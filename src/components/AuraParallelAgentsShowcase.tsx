import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import AuraDynamicIsland from "./AuraDynamicIsland";

const dockScaleByIndex = [1.03, 1.07, 1.14, 1.27, 1.46];
const speechWordDelay = 213;
const speechWordInitialDelay = 220;
const speechWordDuration = 440;
const stepDuration = 2000;
const thinkingDuration = 1000;
const promptHoldDuration = 1500;
const restartPauseDuration = 3000;

const contentStrategyTask = {
  prompt: "Can you make the content creation strategy for my social media accounts.",
  steps: [
    "Reading Memory",
    "Planning a content creation strategy for your social media",
    "Understanding your brand, audience.",
    "Researching what works in your niche.",
  ],
} as const;

const promptWords = contentStrategyTask.prompt.split(" ");
const promptSpeechDuration =
  speechWordInitialDelay +
  (promptWords.length - 1) * speechWordDelay +
  speechWordDuration;

type ShowcasePhase = "speaking" | "holding" | "running" | "paused";

type AuraParallelAgentsShowcaseProps = {
  forceMotion?: boolean;
};

type AuraAgentTaskCardProps = {
  prompt: string;
  steps: readonly string[];
  reduceMotion: boolean;
  onComplete: () => void;
};

type ShimmerTextProps = {
  children: string;
  className?: string;
  duration: number;
  highlight: string;
  softHighlight: string;
  bounce?: boolean;
  reduceMotion: boolean;
};

const ShimmerText: React.FC<ShimmerTextProps> = ({
  children,
  className = "",
  duration,
  highlight,
  softHighlight,
  bounce = false,
  reduceMotion,
}) => (
  <span className={`relative inline-block ${className}`}>
    <span>{children}</span>
    {reduceMotion ? null : (
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-clip-text text-transparent"
        style={{
          backgroundImage: bounce
            ? `linear-gradient(110deg, transparent 34%, ${softHighlight} 42%, ${highlight} 50%, ${softHighlight} 58%, transparent 66%)`
            : `linear-gradient(110deg, transparent 40%, ${softHighlight} 46%, ${highlight} 50%, ${softHighlight} 54%, transparent 60%)`,
          backgroundSize: bounce ? "200% 100%" : "320% 100%",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: bounce
            ? `blur(1.2px) drop-shadow(0 0 3px ${softHighlight})`
            : `drop-shadow(0 0 2px ${softHighlight})`,
        }}
        initial={false}
        animate={{
          backgroundPositionX: bounce
            ? ["100%", "0%"]
            : ["160%", "-160%"],
        }}
        transition={{
          duration,
          ease: bounce ? "easeInOut" : "linear",
          repeat: Infinity,
          repeatType: bounce ? "reverse" : "loop",
        }}
      >
        {children}
      </motion.span>
    )}
  </span>
);

const AuraAgentTaskCard: React.FC<AuraAgentTaskCardProps> = ({
  prompt,
  steps,
  reduceMotion,
  onComplete,
}) => {
  const [stepIndex, setStepIndex] = useState<number | null>(null);

  useEffect(() => {
    if (reduceMotion || steps.length === 0) {
      setStepIndex(steps.length > 0 ? steps.length - 1 : null);
      return;
    }

    let stepTimer = 0;
    let cancelled = false;

    const showStep = (nextStepIndex: number) => {
      if (cancelled) return;

      setStepIndex(nextStepIndex);
      stepTimer = window.setTimeout(() => {
        if (nextStepIndex === steps.length - 1) {
          onComplete();
          return;
        }

        showStep(nextStepIndex + 1);
      }, stepDuration);
    };

    const thinkingTimer = window.setTimeout(() => {
      showStep(0);
    }, thinkingDuration);

    return () => {
      cancelled = true;
      window.clearTimeout(thinkingTimer);
      window.clearTimeout(stepTimer);
    };
  }, [onComplete, reduceMotion, steps]);

  const currentStep =
    stepIndex === null ? "Aura is Thinking" : (steps[stepIndex] ?? "Aura is Thinking");

  return (
    <motion.div
      className="absolute right-[calc(3.5%+clamp(17.5px,3.65cqi,47px)+20px)] bottom-[22%] z-10 flex min-h-[40%] w-[55%] flex-col overflow-hidden rounded-[clamp(8px,1.6cqi,14px)] border border-white/10 bg-[#2D2D2D] p-[clamp(8px,1.5cqi,16px)] text-white shadow-[0_16px_32px_rgba(31,19,62,0.28)]"
      initial={reduceMotion ? false : { opacity: 0, x: -8, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -4, scale: 0.98 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 310, damping: 26, mass: 0.72 }
      }
      aria-label={`Running agent task: ${prompt}`}
    >
      <div className="flex items-center justify-between gap-2 font-['Inter',system-ui,sans-serif] text-[clamp(10px,2cqi,14px)] leading-none font-medium">
        <span className="inline-flex items-center gap-[clamp(5px,0.8cqi,8px)]">
          <span className="size-[clamp(8px,1cqi,11px)] rounded-full bg-[#EA174C] shadow-[0_0_6px_rgba(234,23,76,0.38)]" />
          <ShimmerText
            className="text-white"
            duration={1}
            highlight="#DC3030"
            softHighlight="rgba(220,48,48,0.3)"
            bounce
            reduceMotion={reduceMotion}
          >
            Running
          </ShimmerText>
        </span>
        <X className="size-[clamp(9px,1.35cqi,14px)] text-white/55" aria-hidden="true" />
      </div>

      <p className="mt-[clamp(7px,1.2cqi,12px)] mb-0 max-w-[95%] font-['DM_Sans',system-ui,sans-serif] text-[clamp(10px,2cqi,18px)] leading-[1.45] font-medium tracking-[-0.025em] text-white/90">
        {prompt}
      </p>

      <div className="mt-[clamp(6px,1cqi,10px)] min-h-[clamp(20px,4cqi,36px)] font-['Inter',system-ui,sans-serif] text-[clamp(10px,1.5cqi,14px)] leading-[1.35]">
        <ShimmerText
          key={currentStep}
          className="block text-white/50"
          duration={2.8}
          highlight="#F0EEE6"
          softHighlight="rgba(240,238,230,0.42)"
          reduceMotion={reduceMotion}
        >
          {currentStep}
        </ShimmerText>
      </div>

      <div className="mt-auto inline-flex min-h-[clamp(20px,3.2cqi,28px)] w-[38%] min-w-[84px] items-center gap-[clamp(5px,0.8cqi,8px)] rounded-[clamp(4px,0.7cqi,7px)] bg-[linear-gradient(to_bottom_left,rgba(255,38,38,0.6),#552D2D)] px-[clamp(8px,1.2cqi,12px)] font-['Inter',system-ui,sans-serif] text-[clamp(10px,1.5cqi,14px)] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <span className="size-[clamp(7px,1cqi,10px)] shrink-0 rounded-[1px] bg-white" aria-hidden="true" />
        <span className="whitespace-nowrap">Cancel Task</span>
      </div>
    </motion.div>
  );
};

const AuraParallelAgentsShowcase: React.FC<AuraParallelAgentsShowcaseProps> = ({
  forceMotion = false,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = forceMotion ? false : Boolean(prefersReducedMotion);
  const [phase, setPhase] = useState<ShowcasePhase>(
    reduceMotion ? "running" : "speaking",
  );
  const [cycle, setCycle] = useState(0);

  const finishTask = useCallback(() => {
    setPhase("paused");
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPhase("running");
      return;
    }

    if (phase === "running") return;

    const phaseTimer = window.setTimeout(() => {
      if (phase === "speaking") {
        setPhase("holding");
      } else if (phase === "holding") {
        setPhase("running");
      } else {
        setCycle((currentCycle) => currentCycle + 1);
        setPhase("speaking");
      }
    }, phase === "speaking" ? promptSpeechDuration : phase === "holding" ? promptHoldDuration : restartPauseDuration);

    return () => {
      window.clearTimeout(phaseTimer);
    };
  }, [phase, reduceMotion]);

  const taskOpen = phase === "running";
  const promptVisible = phase !== "paused";
  const visibleAgentCount = phase === "paused" ? 0 : taskOpen ? 5 : 4;
  const bitsAreRestarting = cycle > 0 && phase === "speaking";
  const islandState =
    phase === "speaking"
      ? "listening"
      : phase === "holding"
        ? "processing"
        : "minimized";

  return (
    <div
      className="absolute inset-0"
      aria-label="Aura running multiple agents simultaneously"
    >
      <AuraDynamicIsland state={islandState} forceMotion={forceMotion} />

      <div className="absolute bottom-[12%] left-1/2 z-10 w-[68%] -translate-x-1/2">
        <AnimatePresence initial={false} mode="wait">
          {promptVisible ? (
            <motion.p
              key={cycle}
              className="aura-speech-caption aura-speech-caption--speaking !static !w-full !transform-none"
              aria-label={contentStrategyTask.prompt}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeIn" }}
            >
              <span aria-hidden="true">
                {promptWords.map((word, wordIndex) => (
                  <React.Fragment key={`${word}-${wordIndex}`}>
                    <span
                      className="aura-speech-caption__word"
                      style={{
                        "--speech-word-index": wordIndex,
                      } as React.CSSProperties}
                    >
                      {word}
                    </span>
                    {wordIndex < promptWords.length - 1 ? " " : null}
                  </React.Fragment>
                ))}
              </span>
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {taskOpen ? (
          <AuraAgentTaskCard
            prompt={contentStrategyTask.prompt}
            steps={contentStrategyTask.steps}
            reduceMotion={Boolean(reduceMotion)}
            onComplete={finishTask}
          />
        ) : null}
      </AnimatePresence>

      <motion.div
        className="absolute top-[38%] right-[3.5%] z-10 flex -translate-y-1/2 flex-col items-end gap-[16px]"
        aria-hidden="true"
      >
        <AnimatePresence initial={false}>
          {Array.from({ length: visibleAgentCount }, (_, bitIndex) => (
            <motion.span
              key={bitIndex}
              className="block h-[clamp(2px,0.8cqi,6px)] w-[clamp(12px,2.5cqi,32px)] origin-right rounded-full bg-[#2D2D2D]"
              initial={
                !reduceMotion && (bitIndex === 4 || bitsAreRestarting)
                  ? { opacity: 0, scaleX: 0.45, x: 8 }
                  : false
              }
              animate={{
                opacity: 1,
                scaleX: taskOpen ? dockScaleByIndex[bitIndex] : 1,
                x: 0,
              }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scaleX: 0.55, x: 8 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 340, damping: 24, mass: 0.62 }
              }
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuraParallelAgentsShowcase;

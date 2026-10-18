import React, { useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Sparkle, X } from "lucide-react";

export type AuraDynamicIslandState =
  | "listening"
  | "polishing"
  | "processing"
  | "minimized"
  | "thinking"
  | "complete";

type AuraDynamicIslandProps = {
  state?: AuraDynamicIslandState;
  label?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  forceMotion?: boolean;
};

const stateLabels: Record<AuraDynamicIslandState, string> = {
  listening: "Listening",
  polishing: "Polishing Text",
  processing: "Processing",
  minimized: "Minimized",
  thinking: "Thinking",
  complete: "Complete",
};

const waveformBars = [
  0.24, 0.42, 0.68, 1, 0.64, 0.38, 0.76, 0.9, 0.52, 0.7, 0.94, 0.58,
  0.82, 0.96, 0.66, 0.44, 0.78, 0.54, 0.3,
];

// Varied, deterministic speech samples make each bar react independently
// without using timers or Math.random during rendering.
const speechActivityPatterns = [
  [0.28, 0.82, 0.46, 1, 0.58, 0.28],
  [0.38, 1, 0.54, 0.72, 0.9, 0.38],
  [0.24, 0.62, 0.96, 0.4, 0.76, 0.24],
  [0.34, 0.72, 0.42, 0.94, 0.6, 0.34],
  [0.3, 0.9, 0.5, 0.68, 1, 0.3],
] as const;

const waveformMotion = waveformBars.map((height, index) => {
  const pattern = speechActivityPatterns[(index * 3) % speechActivityPatterns.length];

  return {
    scaleY: pattern.map((activity) => Math.max(0.16, height * activity)),
    opacity: pattern.map((activity) => 0.46 + activity * 0.5),
    duration: 1.5 + ((index * 7) % 6) * 0.1,
    delay: index * 0.04,
  };
});

const flowPath =
  "M0 42 L60 22 L120 45 L180 16 L240 40 L300 24 L360 44 L420 14 L480 39 L540 20 L600 42 L660 22 L720 45 L780 16 L840 40 L900 24 L960 44 L1020 14 L1080 39 L1140 20 L1200 42 L1200 80 L0 80 Z";

const AuraDynamicIsland: React.FC<AuraDynamicIslandProps> = ({
  state = "listening",
  label = stateLabels[state],
  onCancel,
  onConfirm,
  forceMotion = false,
}) => {
  const shellClipId = useId().replace(/:/g, "");
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = !forceMotion && Boolean(prefersReducedMotion);
  const flowDuration = state === "thinking" ? 9.5 : 7.2;
  const isProcessing = state === "processing";
  const isPolishing = state === "polishing";
  const isMinimized = state === "minimized";
  const hasEdgeControls = !isProcessing && !isPolishing;
  const hasLabelShimmer = state === "listening" || isPolishing;

  const cancelControl = onCancel ? (
    <button
      type="button"
      className="grid size-[clamp(12px,1.25vw,17px)] shrink-0 cursor-pointer place-items-center rounded-[clamp(2px,0.25vw,4px)] border-0 bg-[#c90000] p-0 text-white shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-[transform,filter] duration-200 ease-out hover:brightness-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&>svg]:size-[72%] [&>svg]:stroke-[2.2]"
      onClick={onCancel}
      aria-label="Cancel Aura"
    >
      <X aria-hidden="true" />
    </button>
  ) : (
    <span
      className="grid size-[clamp(12px,1.25vw,17px)] shrink-0 place-items-center rounded-[clamp(2px,0.25vw,4px)] bg-[#c90000] text-white shadow-[0_2px_6px_rgba(0,0,0,0.12)] [&>svg]:size-[72%] [&>svg]:stroke-[2.2]"
      aria-hidden="true"
    >
      <X />
    </span>
  );

  const confirmControl = onConfirm ? (
    <button
      type="button"
      className="grid size-[clamp(12px,1.25vw,17px)] shrink-0 cursor-pointer place-items-center rounded-[clamp(2px,0.25vw,4px)] border-0 bg-white/95 p-0 text-[#101010] shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-[transform,filter] duration-200 ease-out hover:brightness-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&>svg]:size-[72%] [&>svg]:stroke-[2.2]"
      onClick={onConfirm}
      aria-label="Confirm Aura request"
    >
      <Check aria-hidden="true" />
    </button>
  ) : (
    <span
      className="grid size-[clamp(12px,1.25vw,17px)] shrink-0 place-items-center rounded-[clamp(2px,0.25vw,4px)] bg-white/95 text-[#101010] shadow-[0_2px_6px_rgba(0,0,0,0.12)] [&>svg]:size-[72%] [&>svg]:stroke-[2.2]"
      aria-hidden="true"
    >
      <Check />
    </span>
  );

  return (
    <div
      className={`absolute top-0 left-1/2 z-20 isolate h-[clamp(24px,3.1vw,42px)] -translate-x-1/2 text-white/90 drop-shadow-[0_6px_8px_rgba(68,20,52,0.16)] ${isMinimized ? "w-[140px]" : "w-[clamp(162px,29%,246px)]"}`}
      data-state={state}
      role="status"
      aria-live="polite"
      aria-label={`Aura is ${label.toLowerCase()}`}
    >
      <svg className="absolute size-0" aria-hidden="true">
        <defs>
          <clipPath id={shellClipId} clipPathUnits="objectBoundingBox">
            <path d="M0 0 H0.012 C0.036 0 0.055 0.125 0.055 0.28 V0.82 Q0.055 1 0.09 1 H0.91 Q0.945 1 0.945 0.82 V0.28 C0.945 0.125 0.964 0 0.988 0 H1 Z" />
          </clipPath>
        </defs>
      </svg>

      <motion.span
        className={`absolute inset-0 z-0 overflow-hidden shadow-[inset_0_-1px_0_rgba(255,255,255,0.22)] backdrop-blur-[14px] backdrop-saturate-[1.35] ${
          isMinimized
            ? "bg-[linear-gradient(180deg,rgba(18,18,18,0.94),rgba(56,56,56,0.72))]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(125,64,103,0.3))]"
        }`}
        style={{
          clipPath: `url(#${shellClipId})`,
          borderRadius: isMinimized ? "0 0 10px 10px" : 0,
          transformOrigin: "50% 0%",
        }}
        initial={false}
        animate={{
          scaleX: 1,
          scaleY: isMinimized ? 0.24 : 1,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 260, damping: 28, mass: 0.72 }
        }
        transformTemplate={(_, generatedTransform) =>
          `${generatedTransform} translateZ(0)`
        }
        aria-hidden="true"
      >
        <span className="absolute top-[-158%] left-1/2 h-[90px] w-[200px] -translate-x-1/2 rounded-[40%] bg-black blur-[40px] shadow-[0_0_12px_9px_rgba(0,0,0,0.34),0_0_28px_20px_rgba(0,0,0,0.18)]" />
        {/* <span className="absolute top-[-134%] left-1/2 h-[180%] w-[90%] -translate-x-1/2 rounded-[50%] bg-black/80 blur-[10px] shadow-[0_0_10px_7px_rgba(0,0,0,0.48)]" /> */}
        <motion.svg
          className="absolute bottom-[-5%] left-0 h-[64%] w-[200%] overflow-visible"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          initial={false}
          animate={
            isMinimized
              ? { x: "-25%", opacity: 0 }
              : shouldReduceMotion || state === "complete"
                ? { x: "-25%", opacity: 1 }
                : { x: ["-40%", "0%"], opacity: 1 }
          }
          transition={{
            x: {
              duration: isMinimized ? 0 : flowDuration,
              ease: "linear",
              repeat:
                shouldReduceMotion || state === "complete" || isMinimized
                  ? 0
                  : Infinity,
            },
            opacity: { duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" },
          }}
        >
          <path
            className={`origin-bottom scale-y-[1.22] [stroke-linejoin:round] [stroke-width:16px] blur-[20px] ${
              isProcessing
                ? "fill-[#3471ED]/60 stroke-[#3471ED]/40 drop-shadow-[0_0_8px_rgba(52,113,237,0.42)]"
                : isPolishing
                  ? "fill-[#F70EAE]/60 stroke-[#F70EAE]/40 drop-shadow-[0_0_8px_rgba(247,14,174,0.48)]"
                : "fill-[#E43235]/60 stroke-[#E43235]/40 drop-shadow-[0_0_8px_rgba(228,50,53,0.42)]"
            }`}
            d={flowPath}
          />
          {/* <path className="fill-[#E43235]/75 blur-[2px]" d={flowPath} /> */}
        </motion.svg>
      </motion.span>

      <AnimatePresence initial={false} mode="wait">
        {isMinimized ? null : (
          <motion.span
            key={isProcessing ? "processing" : isPolishing ? "polishing" : "standard"}
            className="absolute inset-y-0 right-[5.5%] left-[5.5%] z-[3] flex items-center gap-[clamp(4px,0.5vw,7px)] px-[clamp(7px,0.72vw,10px)]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            {hasEdgeControls ? cancelControl : null}
            <motion.span
              className="shrink-0 bg-clip-text font-['Inter',system-ui,sans-serif] text-[clamp(8px,0.9vw,12px)] leading-[1.2] font-normal tracking-[-0.025em] text-transparent text-shadow-[0_1px_5px_rgba(0,0,0,0.16)]"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #ffffff 0%, #ffffff 38%, #B3ACA1 50%, #ffffff 62%, #ffffff 100%)",
                backgroundSize: "260% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={false}
              animate={
                shouldReduceMotion || !hasLabelShimmer
                  ? { backgroundPositionX: "50%" }
                  : { backgroundPositionX: ["160%", "-160%"] }
              }
              transition={{
                duration: 3.4,
                ease: "easeInOut",
                repeat:
                  shouldReduceMotion || !hasLabelShimmer ? 0 : Infinity,
              }}
            >
              {label}
            </motion.span>

            {isProcessing ? (
              <span
                className="flex min-w-0 flex-1 items-center justify-end gap-[clamp(2px,0.24vw,3px)]"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }, (_, dotIndex) => (
                  <motion.span
                    key={dotIndex}
                    className="size-[clamp(2px,0.25vw,3.5px)] shrink-0 rounded-full bg-current"
                    initial={false}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0.9, y: 0 }
                        : { opacity: [0.38, 1, 0.38], y: [0, -2, 0] }
                    }
                    transition={{
                      duration: 0.9,
                      ease: "easeInOut",
                      repeat: shouldReduceMotion ? 0 : Infinity,
                      delay: dotIndex * 0.1,
                    }}
                  />
                ))}
              </span>
            ) : isPolishing ? null : (
              <span
                className="flex h-[52%] min-w-0 flex-1 items-center justify-end gap-[clamp(1px,0.08vw,1.2px)]"
                aria-hidden="true"
              >
                {waveformBars.map((scale, index) => (
                  <motion.span
                    key={index}
                    className="h-full w-[clamp(1.2px,0.12vw,1.8px)] shrink-0 origin-center rounded-full bg-current"
                    initial={false}
                    animate={
                      shouldReduceMotion || state === "complete"
                        ? { scaleY: scale, opacity: 0.92 }
                        : {
                          scaleY: waveformMotion[index].scaleY,
                          opacity: waveformMotion[index].opacity,
                        }
                    }
                    transition={{
                      duration: waveformMotion[index].duration,
                      ease: "easeInOut",
                      repeat: shouldReduceMotion || state === "complete" ? 0 : Infinity,
                      repeatType: "loop",
                      delay: waveformMotion[index].delay,
                    }}
                  />
                ))}
              </span>
            )}
            {isPolishing ? (
              <motion.span
                className="ml-auto grid size-[clamp(12px,1.25vw,17px)] shrink-0 place-items-center text-[#F0EEEE] [&>svg]:size-full [&>svg]:fill-[#F0EEEE] [&>svg]:stroke-[1.8]"
                initial={false}
                animate={
                  shouldReduceMotion ? { rotate: 0 } : { rotate: [0, 360, 360] }
                }
                transition={{
                  duration: 1.5,
                  times: [0, 2 / 3, 1],
                  ease: "linear",
                  repeat: shouldReduceMotion ? 0 : Infinity,
                }}
                aria-hidden="true"
              >
                <Sparkle />
              </motion.span>
            ) : null}
            {hasEdgeControls ? confirmControl : null}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuraDynamicIsland;

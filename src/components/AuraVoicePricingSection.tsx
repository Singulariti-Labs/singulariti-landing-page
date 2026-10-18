import React, { useRef, useState } from "react";
import { Check } from "lucide-react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import auraVoicePricingBackground from "../assets/aura_voice_pricing_bg.png";

type BillingCycle = "monthly" | "yearly";

const VOICE_STATEMENT =
  "Aura is the simplest way to talk to your computer, making your entire device voice-first. Just speak, and Aura gets it done.";

const voiceLines = [
  "Aura is the simplest way to talk to your computer,",
  "making your entire device voice-first.",
  "Just speak, and Aura gets it done.",
].map((line) => line.split(" "));

const voiceWords = voiceLines.flat();
const voiceLineOffsets = voiceLines.map((_, lineIndex) =>
  voiceLines
    .slice(0, lineIndex)
    .reduce((wordCount, line) => wordCount + line.length, 0),
);

type ScrollRevealWordProps = {
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  total: number;
  word: string;
};

const ScrollRevealWord: React.FC<ScrollRevealWordProps> = ({
  index,
  progress,
  reduceMotion,
  total,
  word,
}) => {
  const overlap = 4;
  const range = total + overlap;
  const color = useTransform(
    progress,
    [index / range, (index + overlap) / range],
    ["#5f5f5f", "#000000"],
  );

  return (
    <motion.span
      aria-hidden="true"
      className="inline-block"
      style={{ color: reduceMotion ? "#000000" : color }}
    >
      {word}
    </motion.span>
  );
};

type Plan = {
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  ctaLabel: string;
  current?: boolean;
};

type AuraVoicePricingSectionProps = {
  onFreePlanClick: () => void;
};

const plans: Plan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    description: "Experience Aura, with limited access",
    features: [
      "Unlimited Dictation",
      "Limited Agent Access",
      "Limited LLM Models",
      "Weekly Refresh Limits",
    ],
    ctaLabel: "Get Aura for Free",
    current: true,
  },
  {
    name: "Mini",
    monthlyPrice: 19,
    description: "More usage for everyday tasks",
    features: [
      "Unlimited Dictation",
      "Extended Agent Usage",
      "Access To Frontier Models",
      "Weekly Refresh Limits",
    ],
    ctaLabel: "Get Aura Mini",
  },
  {
    name: "Pro",
    monthlyPrice: 28,
    description: "Unlock all models, with higher usage limits",
    features: [
      "Unlimited Dictation",
      "2x Mini Limits On Agent",
      "Access To Frontier Models",
      "Weekly 2x Refresh On Limits",
      "Early Access To New Features",
    ],
    ctaLabel: "Get Aura Pro",
  },
  {
    name: "Max",
    monthlyPrice: 100,
    description: "For power users who need more",
    features: [
      "Unlimited Dictation",
      "5x To 10x More Agents Limits",
      "Access To Frontier Models",
      "Weekly 2x Refresh On Limits",
      "Early Access To New Features",
    ],
    ctaLabel: "Get Aura Max",
  },
];

const formatPrice = (price: number) =>
  Number.isInteger(price) ? price.toString() : price.toFixed(2);

const AuraVoicePricingSection: React.FC<AuraVoicePricingSectionProps> = ({
  onFreePlanClick,
}) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const voiceRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: voiceRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: entranceScrollProgress } = useScroll({
    target: voiceRef,
    offset: ["start end", "start start"],
  });
  const smoothVoiceProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });
  const smoothEntranceProgress = useSpring(entranceScrollProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.2,
  });
  const entranceOpacity = useTransform(
    smoothEntranceProgress,
    [0.45, 0.94],
    [0, 1],
  );

  return (
    <section
      className="relative isolate overflow-x-clip bg-white bg-cover bg-center bg-no-repeat text-[#141413]"
      style={{
        backgroundImage: `url(${auraVoicePricingBackground})`,
        backgroundAttachment: reduceMotion ? "scroll" : "fixed",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[clamp(180px,22vw,320px)] bg-gradient-to-t from-white via-white/55 to-transparent"
        aria-hidden="true"
      />

      <section
        ref={voiceRef}
        className={reduceMotion ? "relative h-[100svh]" : "relative h-[260svh]"}
        aria-labelledby="aura-voice-title"
      >
        <div className="sticky top-0 isolate flex h-[100svh] items-center justify-center overflow-hidden px-[32px] md:px-[72px]">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[clamp(180px,22vw,320px)] bg-gradient-to-b from-white via-white/55 to-transparent"
            aria-hidden="true"
          />

          <motion.div
            className="absolute top-1/2 left-[clamp(14px,2.5vw,40px)] z-20 h-[64px] w-[2px] -translate-y-1/2 overflow-hidden bg-[#5f5f5f]"
            style={{ opacity: reduceMotion ? 1 : entranceOpacity }}
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-full origin-top bg-[#000000] will-change-transform"
              style={{
                scaleY: reduceMotion ? 1 : smoothVoiceProgress,
              }}
            />
          </motion.div>

          <motion.h2
            id="aura-voice-title"
            aria-label={VOICE_STATEMENT}
            className="relative z-10 m-0 max-w-[1200px] text-balance text-center font-['DM_Sans',system-ui,sans-serif] text-[30px] leading-[1.08] font-medium tracking-[-0.045em] sm:text-[38px] md:text-[48px] lg:text-[52px]"
            style={{ opacity: reduceMotion ? 1 : entranceOpacity }}
          >
            {voiceLines.map((line, lineIndex) => (
              <span
                key={line.join("-")}
                aria-hidden="true"
                className="min-[1180px]:block"
              >
                {line.map((word, wordIndex) => {
                  const index = voiceLineOffsets[lineIndex] + wordIndex;

                  return (
                    <React.Fragment key={`${word}-${index}`}>
                      <ScrollRevealWord
                        word={word}
                        index={index}
                        total={voiceWords.length}
                        progress={smoothVoiceProgress}
                        reduceMotion={Boolean(reduceMotion)}
                      />{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            ))}
          </motion.h2>
        </div>
      </section>

      <section
        className="px-[20px] pb-[clamp(200px,22vw,320px)] md:px-[48px]"
        aria-labelledby="aura-pricing-title"
      >
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="mx-auto mb-[18px] w-fit rounded-full border border-black/10 bg-black px-[21px] py-[10px] font-['DM_Sans',system-ui,sans-serif] text-[15px] leading-none font-normal text-white shadow-[0_3px_8px_rgb(0_0_0_/_24%)]">
            Pricing
          </p>
          <h2
            id="aura-pricing-title"
            className="m-0 font-['DM_Sans',system-ui,sans-serif] text-[28px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[36px] md:text-[44px]"
          >
            Unlock More Aura
          </h2>
          <p className="mt-[10px] mb-0 font-['DM_Sans',system-ui,sans-serif] text-[16px] leading-[1.35] font-normal text-black/60 md:text-[18px]">
            Choose your plan
          </p>

          <div
            className="mx-auto mt-[24px] grid min-h-[46px] w-full max-w-[320px] grid-cols-2 rounded-[9px] bg-[#F0EEE6] p-[4px] font-['DM_Sans',system-ui,sans-serif] shadow-[0_1px_3px_rgb(0_0_0_/_10%)]"
            role="group"
            aria-label="Billing cycle"
          >
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              className={`min-h-[38px] cursor-pointer rounded-[7px] px-[16px] text-[14px] font-semibold transition-[background-color,box-shadow] duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-[2px] focus-visible:outline-black/30 motion-reduce:transition-none ${billingCycle === "monthly"
                ? "bg-white shadow-[0_1px_4px_rgb(0_0_0_/_22%)]"
                : "hover:bg-white/45"
                }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              aria-pressed={billingCycle === "yearly"}
              className={`min-h-[38px] cursor-pointer rounded-[7px] px-[12px] text-[14px] font-semibold transition-[background-color,box-shadow] duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-[2px] focus-visible:outline-black/30 motion-reduce:transition-none ${billingCycle === "yearly"
                ? "bg-white shadow-[0_1px_4px_rgb(0_0_0_/_22%)]"
                : "hover:bg-white/45"
                }`}
            >
              Yearly <span className="ml-[7px] whitespace-nowrap">30% OFF</span>
            </button>
          </div>

          <div className="mt-[20px] grid grid-cols-1 gap-[14px] text-left sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => {
              const effectiveMonthlyPrice =
                billingCycle === "yearly"
                  ? plan.monthlyPrice * 0.7
                  : plan.monthlyPrice;

              return (
                <article
                  key={plan.name}
                  className="flex min-h-[448px] flex-col rounded-[10px] border border-[#E6E4DE] bg-gradient-to-b from-white to-[#F0EEE6] p-[26px] shadow-[0_3px_8px_rgb(0_0_0_/_20%),0_1px_2px_rgb(0_0_0_/_8%)] lg:min-h-[468px]"
                >
                  <div className="text-center font-['Darker_Grotesque',system-ui,sans-serif]">
                    <h3 className="m-0 text-[48px] leading-none font-semibold tracking-[-0.03em]">
                      {plan.name}
                    </h3>
                    <p className="mt-[16px] mb-0 min-h-[40px] text-[18px] leading-[1.4] font-medium text-black">
                      {plan.description}
                    </p>
                    <p className="mt-[14px] mb-0 text-[28px] leading-none font-semibold tracking-[-0.025em]">
                      ${formatPrice(effectiveMonthlyPrice)}
                      <span className="ml-[4px] tracking-normal">
                        / Month
                      </span>
                    </p>
                  </div>

                  <ul className="mt-[54px] mb-[30px] grid gap-[12px] p-0">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-[11px] font-['Darker_Grotesque',system-ui,sans-serif] text-[18px] leading-[1.35] font-medium text-black"
                      >
                        <Check className="size-[15px] shrink-0 stroke-[1.5]" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={plan.current ? onFreePlanClick : undefined}
                    className="mt-auto min-h-[46px] w-full cursor-pointer rounded-[4px] border border-[#3E3D39] bg-[#3E3D39] px-[16px] font-['Darker_Grotesque',system-ui,sans-serif] text-[22px] font-medium text-white shadow-[0_2px_4px_rgb(0_0_0_/_24%)] transition-[background-color,color,box-shadow] duration-200 hover:bg-[#2F2E2B] focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-black/30 motion-reduce:transition-none"
                  >
                    {plan.ctaLabel}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AuraVoicePricingSection;

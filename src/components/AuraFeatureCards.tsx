import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import auraAgentsBackground from "../assets/aura_agents_background.png";
import auraDictationBackground from "../assets/aura_dictation_background.png";
import auraFeaturesBackground from "../assets/aura_features_bg.png";
import showcaseBrowser from "../assets/showcase1_browser.png";
import showcaseMail from "../assets/showcase2_mail.png";
import AuraDictationTranscript, {
  DICTATION_LISTENING_DURATION_MS,
} from "./AuraDictationTranscript";
import AuraDynamicIsland from "./AuraDynamicIsland";
import AuraParallelAgentsShowcase from "./AuraParallelAgentsShowcase";
import AuraSpeechCaption from "./AuraSpeechCaption";

type DictationPhase = "idle" | "listening" | "polishing";

const DictationShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<DictationPhase>("idle");

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;
    const featureCard = showcase.closest("article") ?? showcase;
    let polishingTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (polishingTimer) clearTimeout(polishingTimer);

        if (!entry.isIntersecting) {
          setPhase("idle");
          return;
        }

        setPhase("listening");
        polishingTimer = setTimeout(
          () => setPhase("polishing"),
          DICTATION_LISTENING_DURATION_MS,
        );
      },
      { threshold: 0.45 },
    );

    observer.observe(featureCard);

    return () => {
      observer.disconnect();
      if (polishingTimer) clearTimeout(polishingTimer);
    };
  }, []);

  return (
    <div
      ref={showcaseRef}
      className="aura-dictation-showcase absolute inset-0"
      aria-label="Aura turning a rough voice dictation into a polished email"
    >
      <AuraDictationTranscript isActive={phase !== "idle"} />

    <p id="dictation-highlight-key" className="sr-only">
      Red text marks filler words, purple marks repeated words, green marks
      grammatical mistakes, and dark pink marks a self-correction.
    </p>

    <div className="absolute right-[2.5%] bottom-[3.5%] w-[47.5%] overflow-hidden rounded-[clamp(5px,1.2cqi,12px)] shadow-[0_14px_30px_rgba(31,19,62,0.24)]">
      <img
        src={showcaseMail}
        alt="Email composer where Aura types the polished message"
        width="1380"
        height="1048"
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      <div
        className="aura-dictation-mail-copy"
        aria-label="Formatted email"
      >
        <p>Hi Priya,</p>
        <p>
          Sorry about the delay on the invoice. We had a problem with our
          payment system, and it didn’t go out on time.
        </p>
        <p>
          You’ll receive it by tomorrow evening. Let me know if you have any
          questions.
        </p>
        <p>Thanks.</p>
      </div>
    </div>

      <AuraDynamicIsland
        state={phase === "polishing" ? "polishing" : "listening"}
        forceMotion
      />
    </div>
  );
};

const features = [
  {
    title: "Always there, wherever you need it.",
    description:
      "Aura lives in your notch, so it’s everywhere with you on your device. No switching windows or apps. Hold Ctrl + Alt and just ask.",
    imageOnRight: false,
  },
  {
    title: "Say it. Aura types it, anywhere.",
    description:
      "Speak naturally. Aura automatically drops the filler words, fixes spelling & grammar, and formats your writing to type exactly what you meant.",
    imageOnRight: true,
  },
  {
    title: "Spawn parallel agents. Get more done",
    description:
      "Aura lets you spawn multiple agents for different tasks. One drafts, one researches, one pulls data, all at once. A day’s work done by the time you finish your coffee.",
    imageOnRight: false,
  },
];

type AuraFeatureVisualProps = {
  index: number;
  imageOnRight: boolean;
};

const AuraFeatureVisual: React.FC<AuraFeatureVisualProps> = ({
  index,
  imageOnRight,
}) => {
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { amount: 0.45 });

  return (
    <div
      ref={visualRef}
      className={`@container relative aspect-[5/3] w-full overflow-hidden rounded-[12px] bg-[#DCD5FF] shadow-[0_5px_5px_rgba(45,27,86,0.16)] ${imageOnRight ? "md:order-2" : ""}`}
    >
      <img
        src={index === 1 ? auraDictationBackground : index === 2 ? auraAgentsBackground : auraFeaturesBackground}
        alt=""
        width={index > 0 ? "1674" : "2936"}
        height={index > 0 ? "909" : "1748"}
        loading="lazy"
        decoding="async"
        className="block size-full object-cover"
      />

      {isInView && index === 0 ? (
        <div className="absolute inset-0" aria-label="Aura working over a travel website">
          <div className="absolute top-[22%] right-0 w-[85%] overflow-hidden rounded-tl-[clamp(6px,0.8vw,12px)] shadow-[0_12px_24px_rgba(31,19,62,0.2)]">
            <img
              src={showcaseBrowser}
              alt="A travel website for Sanur Beach open underneath Aura"
              width="2480"
              height="1368"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
            <AuraSpeechCaption />
          </div>
          <AuraDynamicIsland state="listening" forceMotion />
        </div>
      ) : null}

      {isInView && index === 1 ? <DictationShowcase /> : null}

      {isInView && index === 2 ? <AuraParallelAgentsShowcase forceMotion /> : null}
    </div>
  );
};

const AuraFeatureCards: React.FC = () => {
  return (
    <section
      className="w-full bg-white px-[20px] pb-[120px] md:px-[48px] md:pb-[160px] lg:px-[80px] lg:pb-[192px]"
      aria-label="Aura features"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[72px] md:gap-[96px] lg:gap-[120px]">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`grid gap-[28px] md:items-end md:gap-[48px] lg:gap-[64px] ${feature.imageOnRight
              ? "md:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:grid-cols-[minmax(0,32fr)_minmax(0,68fr)]"
              : "md:grid-cols-[minmax(0,62fr)_minmax(0,38fr)] lg:grid-cols-[minmax(0,68fr)_minmax(0,32fr)]"
              }`}
          >
            <AuraFeatureVisual
              index={index}
              imageOnRight={feature.imageOnRight}
            />

            <div
              className={`w-full max-w-[400px] md:mb-[20px] ${feature.imageOnRight ? "md:order-1 md:justify-self-start" : "md:justify-self-end"
                }`}
            >
              <h3 className="m-0 max-w-[340px] text-balance font-['DM_Sans',system-ui,sans-serif] text-[28px] leading-[1.12] font-medium tracking-[-0.03em] text-[#141413] md:text-[30px] lg:text-[34px]">
                {feature.title}
              </h3>
              <p className="mt-[16px] mb-0 max-w-[400px] font-['Darker_Grotesque',system-ui,sans-serif] text-[18px] leading-[1.45] font-medium text-[#3F3E3A] md:text-[19px] lg:text-[24px]">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AuraFeatureCards;

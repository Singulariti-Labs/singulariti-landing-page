import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import "./animations/ConnectionAnimation.css";
import "./animations/ArcSweepAnimation.css";
import "./animations/IsolationFlowAnimation.css";

const contextMetric = (
  <div
    className="flex items-baseline gap-3 pb-1 text-[#212121] sm:gap-4"
    aria-label="0 App Context"
  >
    <span
      className="font-inter text-[clamp(4.5rem,10vw,9rem)] font-normal leading-none tracking-[-0.08em]"
      aria-hidden="true"
    >
      0
    </span>
    <span
      className="whitespace-nowrap font-inter text-[clamp(0.875rem,1.8vw,1.75rem)] font-normal leading-none text-[#141413]"
      aria-hidden="true"
    >
      App Context
    </span>
  </div>
);

const isolationMetric = (
  <div
    className="flex items-baseline gap-3 pb-1 text-[#212121] sm:gap-4"
    aria-label="100% Isolated"
  >
    <span
      className="whitespace-nowrap font-inter text-[clamp(3.25rem,9vw,8rem)] font-normal leading-none tracking-[-0.08em]"
      aria-hidden="true"
    >
      100%
    </span>
    <span
      className="whitespace-nowrap font-inter text-[clamp(0.875rem,1.8vw,1.75rem)] font-normal leading-none text-[#141413]"
      aria-hidden="true"
    >
      Isolated
    </span>
  </div>
);

const processMetric = (
  <div
    className="flex items-baseline gap-3 pb-1 text-[#212121] sm:gap-4"
    aria-label="N, X See, Think, Act"
  >
    <span
      className="whitespace-nowrap font-inter text-[clamp(4.5rem,10vw,9rem)] font-normal leading-none tracking-[-0.08em]"
      aria-hidden="true"
    >
      N
    </span>
    <span
      className="whitespace-nowrap font-inter text-[clamp(0.875rem,1.8vw,1.75rem)] font-normal leading-none text-[#141413]"
      aria-hidden="true"
    >
      X See → Think → Act
    </span>
  </div>
);

const ConnectionAnimation = () => (
  <div className="connection-animation" aria-hidden="true">
    {[0, 2.5, 1, 3.5, 0].map((delay, row) => (
      <div
        key={row}
        className={`connection-animation__row${row % 2 ? " connection-animation__row--reverse" : ""}`}
        style={{ "--row-delay": `${delay}s` } as React.CSSProperties}
      >
        <span className="connection-animation__block connection-animation__block--left" />
        <span className="connection-animation__block connection-animation__block--right" />
      </div>
    ))}
  </div>
);

const ArcSweepAnimation = () => (
  <div className="arc-sweep-animation" aria-hidden="true">
    <span className="arc-sweep-animation__orbit arc-sweep-animation__orbit--outer" />
    <span className="arc-sweep-animation__sector" />
    <span className="arc-sweep-animation__orbit arc-sweep-animation__orbit--inner" />
    <span className="arc-sweep-animation__axis arc-sweep-animation__axis--reveal" />
    <span className="arc-sweep-animation__axis arc-sweep-animation__axis--clear" />
  </div>
);

const IsolationFlowAnimation = () => (
  <div className="isolation-flow-animation" aria-hidden="true">
    <span className="isolation-flow-animation__bar">
      <span className="isolation-flow-animation__segment" />
      <span className="isolation-flow-animation__gradient" />
      <span className="isolation-flow-animation__dot isolation-flow-animation__dot--left" />
      <span className="isolation-flow-animation__dot isolation-flow-animation__dot--right" />
    </span>
  </div>
);

type Problem = {
  label: string;
  highlight: string;
  title: string;
  description: string;
};

const problems: Problem[] = [
  {
    label: "Context",
    highlight: "Trapped",
    title: "Trapped inside a window",
    description:
      "Today, AI is confined to a browser tab or an app. It only knows what happens inside that one window. Everything else other apps, screens, and devices—stays invisible to it.",
  },
  {
    label: "Infra",
    highlight: "Moving slower",
    title: "Moving slower than a human",
    description:
      "AI doesn't have native access to your computer. To get anything done, it clicks, scrolls, and types through interfaces built for humans. It is a workaround, but it was never meant to work this way.",
  },
  {
    label: "Device",
    highlight: "AI as an app,",
    title: "AI as an app, not the foundation",
    description:
      "Every device you own has AI as a layer sitting on top, never at the core. The devices are not connected, and there is no thread running through them. AI is everywhere, but completely isolated.",
  },
];

const useDesktopLayout = () => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false,
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const updateLayout = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    setIsDesktop(query.matches);
    query.addEventListener("change", updateLayout);
    return () => query.removeEventListener("change", updateLayout);
  }, []);

  return isDesktop;
};

const ProblemCard: React.FC<{ problem: Problem; index: number }> = ({
  problem,
  index,
}) => {
  const textFirst = index === 0 || index === 2;
  const cardVisual =
    index === 0 ? contextMetric : index === 1 ? processMetric : isolationMetric;

  const cardCopy = (
    <div className="max-w-[34rem] pb-1">
      <h3 className="max-w-[18ch] font-inter text-[clamp(1.55rem,2.35vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#141413]">
        <span className="problem-title-highlight">{problem.highlight}</span>
        {problem.title.slice(problem.highlight.length)}
      </h3>
      <p className="mt-6 max-w-[48ch] font-darker text-[19px] font-medium leading-[1.5] text-[#141413] xl:text-[22px]">
        {problem.description}
      </p>
    </div>
  );

  return (
    <article className="relative h-full w-full border border-[#141413]/20 bg-white">
      <div className="flex h-full w-3/4 flex-col justify-between gap-16 p-8 sm:p-10 xl:p-14">
        {textFirst ? cardCopy : cardVisual}
        {textFirst ? cardVisual : cardCopy}
      </div>
      {index === 0 ? <ConnectionAnimation /> : null}
      {index === 1 ? <IsolationFlowAnimation /> : null}
      {index === 2 ? <ArcSweepAnimation /> : null}
    </article>
  );
};

const StaticProblems: React.FC = () => (
  <section className="relative w-full px-6 py-32">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-20 text-center lg:mb-28">
        <h2 className="font-inter text-[30px] font-medium leading-[1.08] tracking-tighter text-[#141413] sm:text-[36px] lg:text-[48px]">
          The Model Is Ready
          <br />
          The World Around It Isn't
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <div key={problem.label} className="min-h-[560px]">
            <ProblemCard problem={problem} index={index} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DesktopCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });
  // Finish the card movement at the sticky release, without a stationary tail.
  const motionTimeline = [0, 0.12, 0.2, 0.9, 1];
  const stripX = useTransform(scrollYProgress, motionTimeline, [
    "0vw",
    "0vw",
    "-4vw",
    "-46vw",
    "-50vw",
  ]);
  const firstCardY = useTransform(
    scrollYProgress,
    motionTimeline,
    ["0%", "0%", "6%", "102%", "110%"],
  );
  const thirdCardY = useTransform(
    scrollYProgress,
    motionTimeline,
    ["110%", "110%", "102%", "8%", "0%"],
  );

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 bg-white pb-36 pt-36"
      aria-label="Three limitations of today's AI"
    >
      <div className="flex justify-center px-[5vw] pb-36 text-center">
        <h2 className="mx-auto font-inter text-[clamp(2rem,3.2vw,3.25rem)] font-medium leading-[1.02] tracking-tighter text-[#141413]">
          The Model Is Ready
          <br />
          The World Around It Isn't
        </h2>
      </div>

      <div ref={carouselRef} className="relative h-[380vh]">
        {/* Extend 1.5rem below the viewport so the bottom border enters on exit. */}
        <div className="sticky top-14 h-[calc(100dvh-2rem)] overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 top-[7.5rem] flex w-[150vw] will-change-transform"
            style={{ x: stripX }}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem.label}
                className="h-full w-[50vw] flex-none will-change-transform"
                style={
                  index === 0
                    ? { y: firstCardY }
                    : index === 2
                      ? { y: thirdCardY }
                      : undefined
                }
              >
                <ProblemCard problem={problem} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Section3: React.FC = () => {
  const isDesktop = useDesktopLayout();
  const shouldReduceMotion = useReducedMotion();

  return isDesktop && !shouldReduceMotion ? (
    <DesktopCarousel />
  ) : (
    <StaticProblems />
  );
};

export default Section3;

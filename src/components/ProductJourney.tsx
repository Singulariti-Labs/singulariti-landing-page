import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import auraLogoLockup from "../assets/aura-logo-lockup-transparent.png";
import hardwareSmartGlasses from "../assets/smart-glasses-transparent.png";
import purpleTitleTexture from "../assets/product-journey-purple-texture-white.png";

const phaseHeadingClass =
  "product-phase-heading mb-8 max-w-[1100px] px-5 font-inter text-[14px] font-normal leading-[0.98] tracking-[-0.055em] text-[#141413] sm:px-0 sm:text-[3rem] md:mb-16 lg:mb-10";

const AuraCard: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => (
  <article className="product-showcase-card aura-gradient-border relative isolate grid h-[400px] overflow-hidden rounded-[18px] border-[2px] border-transparent shadow-[0_20px_24px_-24px_rgba(80,42,116,0.28)] sm:h-[460px] sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:h-[520px] lg:rounded-[32px]">
    <div
      className="product-card-gradient product-card-gradient--aura pointer-events-none absolute inset-[2px] z-0 rounded-[16px] lg:rounded-[30px]"
      aria-hidden="true"
    />
    <div className="product-card-visual product-card-visual--aura relative z-10 flex min-h-[180px] items-center justify-start bg-transparent px-4 py-4 sm:h-full sm:min-h-0 sm:justify-center sm:px-8 sm:py-10 lg:px-10">
      <img
        src={auraLogoLockup}
        alt="Aura"
        className="aura-logo-lockup h-auto w-[62%] max-w-[460px] -translate-x-8 sm:w-[120%] sm:translate-x-0 sm:translate-y-0 md:-translate-x-5 lg:w-[92%] lg:-translate-x-8 lg:-translate-y-6"
      />
    </div>
    <div className="product-card-copy-panel product-card-copy-panel--aura relative z-10 flex items-start bg-white/10 px-4 py-4 sm:items-center sm:px-12 sm:py-14 md:items-center md:px-14 md:py-14 lg:items-end lg:px-16 lg:pb-5 lg:pt-20 xl:px-20">
      <div className="product-card-copy lg:-translate-y-10">
        <p className="product-card-body max-w-[72ch] font-darker text-[16px] font-medium leading-[1.15] tracking-[-0.025em] text-[#141413] sm:text-[clamp(1.1rem,2vw,1.75rem)]">
          Aura is a proactive personal assistant that wraps your entire operating system with an agentic layer, making your device voice-first and letting you use your personal assistant anywhere, with any application.
        </p>
        <Link
          to="/get-your-aura"
          tabIndex={interactive ? 0 : -1}
          className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-[10px] border border-transparent bg-[#141413] px-6 font-inter text-sm font-medium text-white transition-colors duration-200 hover:border-[#141413] hover:bg-white hover:text-[#141413] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7a3220] sm:mt-9"
          aria-label="Explore Aura personal AI"
        >
          Explore Aura
          <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  </article>
);

const TypingDots: React.FC = () => (
  <span className="a2i-typing-dots" aria-hidden="true">
    <span />
    <span />
    <span />
  </span>
);

const A2IStatus: React.FC = () => (
  <>
    <span className="a2i-status-rotator" aria-hidden="true">
      <span className="a2i-status-line a2i-status-line--progress">
        <span>Work in Progress</span>
        <TypingDots />
      </span>
      <span className="a2i-status-line a2i-status-line--soon">
        <span>Coming Soon</span>
        <TypingDots />
      </span>
    </span>
    <span className="sr-only">Work in Progress. Coming Soon.</span>
  </>
);

const A2ICard: React.FC = () => (
  <article className="product-showcase-card aura-gradient-border relative isolate grid h-[400px] overflow-hidden rounded-[18px] border-[2px] border-transparent shadow-[0_20px_24px_-24px_rgba(80,42,116,0.28)] sm:h-[460px] sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:h-[520px] lg:rounded-[32px]">
    <div
      className="product-card-gradient product-card-gradient--a2i pointer-events-none absolute inset-[2px] z-0 rounded-[16px] lg:rounded-[30px]"
      aria-hidden="true"
    />
    <div className="product-card-visual product-card-visual--a2i relative z-10 flex min-h-[180px] items-center justify-center bg-white/10 px-4 py-4 sm:h-full sm:min-h-0 sm:px-14 sm:py-14 md:justify-start md:py-20 md:pl-16 md:pr-4 lg:pl-20 lg:pr-6">
      <div className="product-card-a2i-lockup w-full max-w-[420px] sm:translate-y-0">
        <p className="product-card-a2i-title font-darker text-[88px] font-normal leading-[0.78] text-[#141413] sm:text-[160px]">A2I</p>
        <p className="product-card-a2i-subtitle mt-5 font-darker text-[42px] font-medium leading-none text-[#141413] sm:mt-8 sm:text-[78px]">Protocol</p>
      </div>
    </div>
    <div className="product-card-copy-panel product-card-copy-panel--a2i relative z-10 flex items-start bg-white/10 px-4 py-4 sm:items-center sm:px-12 sm:py-14 md:items-center md:px-14 md:py-14 lg:items-end lg:px-16 lg:pb-[58px] lg:pt-20 xl:px-20">
      <div>
        <p className="product-card-body max-w-[72ch] font-darker text-[16px] font-medium leading-[1.15] tracking-[-0.025em] text-[#141413] sm:text-[clamp(1.1rem,2vw,1.75rem)]">
          A2I (Agent App Interaction) Protocol enables AI agents to communicate with any application on the internet at the speed of API.
        </p>
        <button
          type="button"
          disabled
          className="mt-4 inline-flex min-h-12 cursor-default items-center gap-2 rounded-[10px] bg-[#141413]/60 px-6 font-inter text-sm font-medium text-white/90 disabled:opacity-100 sm:mt-9"
          aria-label="A2I Protocol is a work in progress and coming soon"
        >
          <A2IStatus />
        </button>
      </div>
    </div>
  </article>
);

const HardwareCard: React.FC = () => (
  <article className="product-showcase-card product-showcase-card--hardware aura-gradient-border relative isolate h-[400px] overflow-hidden rounded-[18px] border-[2px] border-transparent shadow-[0_20px_24px_-24px_rgba(80,42,116,0.28)] sm:h-[460px] lg:h-[520px] lg:rounded-[32px]">
    <div
      className="product-card-gradient product-card-gradient--hardware pointer-events-none absolute inset-[2px] z-0 rounded-[16px] lg:rounded-[30px]"
      aria-hidden="true"
    />
    <div className="product-card-hardware-surface relative z-10 isolate flex h-full flex-col overflow-hidden bg-white/10 px-4 pb-0 pt-6 sm:px-10 sm:pt-10 md:px-12 md:pt-10 lg:px-14">
      <h3 className="product-card-hardware-title relative z-10 -translate-y-6 font-darker text-[88px] font-normal leading-[0.78] tracking-[-0.065em] text-[#141413] sm:-translate-y-12 sm:text-[160px]">Hardware</h3>
      <p className="product-card-hardware-copy relative z-10 mt-3 max-w-[38ch] font-darker text-[16px] font-medium leading-[1.15] tracking-[-0.025em] text-[#141413] sm:absolute sm:left-[43%] sm:top-[140px] sm:ml-0 sm:mt-0 sm:translate-x-8 sm:translate-y-0 sm:text-[clamp(1.1rem,2vw,1.75rem)] lg:-translate-y-6 lg:translate-x-18">
        Hardware makes the personal assistant accessible everywhere, making it part of every moment and always available wherever you go.
      </p>
      <p className="product-card-hardware-coming pointer-events-none absolute inset-x-0 z-0 translate-y-36 select-none whitespace-nowrap pr-5 text-right font-dm-sans text-[84px] font-normal leading-[0.82] tracking-[-0.065em] text-[#141413]/[8%] sm:bottom-2 sm:translate-x-4 sm:translate-y-0 sm:pr-0 sm:text-left sm:text-[112px] sm:leading-none lg:bottom-auto lg:translate-x-20 lg:translate-y-80 lg:text-[160px]">
        <span className="block sm:inline">Coming</span>{" "}
        <span className="block sm:inline">Soon</span>
      </p>
      <img
        src={hardwareSmartGlasses}
        alt="Transparent smart glasses showing their internal camera and electronics"
        width={1931}
        height={814}
        loading="lazy"
        className="relative z-[1] -mr-4 ml-auto mt-auto h-auto w-full max-w-none object-contain object-right-bottom sm:absolute sm:bottom-0 sm:right-0 sm:mr-0 sm:mt-0 sm:w-[84%]"
      />
    </div>
  </article>
);

const StaticProductStack: React.FC<{ reduceMotion: boolean }> = ({ reduceMotion }) => {
  const reveal = reduceMotion ? false : { opacity: 0, y: 28 };
  const visible = reduceMotion ? undefined : { opacity: 1, y: 0 };
  const transition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div className={reduceMotion ? "block" : "lg:hidden"}>
      <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.18 }} transition={transition}>
        <h3 className={phaseHeadingClass}>First Step Towards Intelligent System</h3>
        <AuraCard />
      </motion.div>
      <motion.div className="mt-40 md:mt-56" initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.18 }} transition={transition}>
        <h3 className={phaseHeadingClass}>Connect Your Personal AI To Every APP It Needs</h3>
        <A2ICard />
      </motion.div>
      <motion.div className="mt-40 md:mt-56" initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.18 }} transition={transition}>
        <h3 className={phaseHeadingClass}>Take Your Personal AI Everywhere You Go</h3>
        <HardwareCard />
      </motion.div>
    </div>
  );
};

const ProductJourney: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const productStageRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const { scrollYProgress } = useScroll({
    target: productStageRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    mass: 0.9,
    restDelta: 0.0001,
  });

  const auraOpacity = useTransform(smoothProgress, [0, 0.24, 0.38], [1, 1, 0]);
  const auraY = useTransform(smoothProgress, [0, 0.24, 0.38], [0, 0, -80]);
  const auraScale = useTransform(smoothProgress, [0, 0.24, 0.38], [1, 1, 0.98]);
  const a2iOpacity = useTransform(smoothProgress, [0, 0.24, 0.38, 0.55, 0.69], [0, 0, 1, 1, 0]);
  const a2iY = useTransform(smoothProgress, [0, 0.24, 0.38, 0.55, 0.69], [80, 80, 0, 0, -80]);
  const a2iScale = useTransform(smoothProgress, [0, 0.24, 0.38, 0.55, 0.69], [0.98, 0.98, 1, 1, 0.98]);
  const hardwareOpacity = useTransform(smoothProgress, [0, 0.55, 0.69, 1], [0, 0, 1, 1]);
  const hardwareY = useTransform(smoothProgress, [0, 0.55, 0.69, 1], [80, 80, 0, 0]);
  const hardwareScale = useTransform(smoothProgress, [0, 0.55, 0.69, 1], [0.98, 0.98, 1, 1]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const nextPhase = latest < 0.31 ? 0 : latest < 0.62 ? 1 : 2;
    setActivePhase((current) => (current === nextPhase ? current : nextPhase));
  });

  return (
    <section
      id="products"
      className="relative w-full overflow-x-clip bg-white pb-40 pt-12 text-[#141413] md:pb-56 md:pt-16 lg:pb-40"
      aria-labelledby="product-journey-title"
    >
      <motion.div
        className="relative isolate flex min-h-[560px] w-full items-center justify-center px-[10px] py-24 text-center sm:min-h-[620px] sm:px-8 md:py-32 lg:min-h-[700px] lg:px-12"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${purpleTitleTexture})`,
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-white via-white/85 to-transparent blur-[8px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30px] bg-gradient-to-t from-white via-white/85 to-transparent blur-[8px]" aria-hidden="true" />
        <div className="relative w-full min-w-0 max-w-[1080px]">
          <h2 id="product-journey-title" className="whitespace-nowrap font-inter text-[clamp(26px,7.5vw,30px)] font-medium leading-[1.08] tracking-tighter text-[#141413] sm:text-[clamp(2.5rem,6.2vw,6.4rem)] sm:leading-[0.96] sm:tracking-[-0.055em] lg:text-[72px]">
            Bringing Personal
            <br className="sm:hidden" />
            {" "}Intelligence
            <br className="hidden sm:block" />
            {" "}for Everyone
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] font-darker text-[clamp(1rem,4.5vw,1.15rem)] font-medium leading-[1.45] text-[#141413]/90 sm:text-[clamp(1.15rem,2vw,1.55rem)] lg:text-[38px]">
            Three connected phases to build AI that feels truly personal
          </p>
        </div>
      </motion.div>

      <div className="mx-auto mt-24 w-full sm:w-[calc(100%-4rem)] md:mt-32 lg:mt-28 lg:w-[70%] lg:max-w-[1400px]">
        <StaticProductStack reduceMotion={Boolean(shouldReduceMotion)} />
        <div ref={productStageRef} className={shouldReduceMotion ? "hidden" : "relative hidden h-[460vh] lg:block"}>
          <div className="sticky top-14 h-[calc(100dvh-3.5rem)] overflow-hidden">
            <div className="relative h-full w-full">
              <motion.div
                className={`product-phase absolute inset-0 flex will-change-transform flex-col justify-center py-4 ${activePhase === 0 ? "pointer-events-auto" : "pointer-events-none"}`}
                style={{ opacity: auraOpacity, y: auraY, scale: auraScale }}
                aria-hidden={activePhase !== 0}
              >
                <h3 className={phaseHeadingClass}>First Step Towards Intelligent System</h3>
                <AuraCard interactive={activePhase === 0} />
              </motion.div>
              <motion.div
                className={`product-phase absolute inset-0 flex will-change-transform flex-col justify-center py-4 ${activePhase === 1 ? "pointer-events-auto" : "pointer-events-none"}`}
                style={{ opacity: a2iOpacity, y: a2iY, scale: a2iScale }}
                aria-hidden={activePhase !== 1}
              >
                <h3 className={phaseHeadingClass}>Connect Your Personal AI To Every APP It Needs</h3>
                <A2ICard />
              </motion.div>
              <motion.div
                className={`product-phase absolute inset-0 flex will-change-transform flex-col justify-center py-4 ${activePhase === 2 ? "pointer-events-auto" : "pointer-events-none"}`}
                style={{ opacity: hardwareOpacity, y: hardwareY, scale: hardwareScale }}
                aria-hidden={activePhase !== 2}
              >
                <h3 className={phaseHeadingClass}>Take Your Personal AI Everywhere You Go</h3>
                <HardwareCard />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductJourney;

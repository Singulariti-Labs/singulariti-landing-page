import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import auraAnimatedLogo from "../assets/aura_animated_logo.png";
import windowsLogo from "../assets/windows_logo.png";
import appleLogo from "../assets/apple_logo.png";
import AuraFeatureStage from "../components/AuraFeatureStage";
import AuraExploreSection from "../components/AuraExploreSection";
import AuraFeatureCards from "../components/AuraFeatureCards";
import AuraVoicePricingSection from "../components/AuraVoicePricingSection";

const GetYourAuraPage: React.FC = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const openDownloadFormForCurrentDevice = () => {
    const isMac = /Macintosh|Mac OS X/i.test(window.navigator.userAgent);

    navigate("/notify-me", {
      state: { system: isMac ? "macos" : "windows" },
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-white bg-[linear-gradient(to_bottom,#F0EEE6_0,#F0EEE6_max(320px,42svh),#F4F2ED_max(448px,65svh),#FAF9F7_max(576px,88svh),#FFFFFF_calc(max(640px,100svh)+clamp(112px,12vw,192px)),#FFFFFF_100%)]">
      <section
        className="relative isolate grid min-h-[max(640px,calc(100svh-56px))] place-items-center overflow-hidden bg-transparent px-[max(6vw,20px)] pt-[clamp(48px,8vh,80px)] pb-[clamp(96px,13vh,128px)] max-[319px]:px-[16px] md:min-h-[max(576px,calc(100svh-56px))] md:pt-[clamp(64px,9vh,112px)] md:pb-[clamp(112px,15vh,176px)] [@media(max-height:620px)_and_(min-width:768px)]:min-h-[560px] [@media(max-height:620px)_and_(min-width:768px)]:pt-[48px] [@media(max-height:620px)_and_(min-width:768px)]:pb-[96px]"
        aria-labelledby="aura-title"
      >
      <div className="pointer-events-none absolute inset-[5%] z-0 grid place-items-center md:inset-[3%]" aria-hidden="true">
        <motion.div
          className="grid size-[min(1300px,calc(100vw-32px),calc(100svh-80px))] place-items-center will-change-transform motion-reduce:will-change-auto"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, rotate: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 360 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 1.2, ease: "easeOut" },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              }
          }
        >
          <img
            src={auraAnimatedLogo}
            alt=""
            className="box-border block size-full object-contain p-[10%]"
            width="1616"
            height="1616"
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute z-[1] aspect-[1.55] w-[min(88vw,768px)] rounded-[50%] bg-[rgb(240_238_230_/_88%)] blur-[clamp(40px,7vw,112px)]" aria-hidden="true" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: "easeOut" }}
        className="relative z-[2] flex w-full max-w-[1120px] flex-col items-center text-center"
      >
        <h1
          id="aura-title"
          className="m-0 mb-[clamp(20px,3vh,36px)] font-['Inter',system-ui,sans-serif] text-[52px] leading-[0.9] font-medium tracking-[-0.065em] text-[#141413] max-[359px]:text-[40px] sm:text-[72px] lg:text-[112px]"
        >
          Aura
        </h1>

        <div className="max-w-[512px] font-['Darker_Grotesque',system-ui,sans-serif] text-[18px] leading-[1.2] font-medium tracking-[-0.02em] text-[#7A3220] max-[359px]:text-[16px] sm:text-[22px] md:max-w-[896px] lg:text-[28px]">
          <p className="m-0">Personal AI That Wraps Entire Operating System With Agentic Layer</p>
          <p className="mt-[4px] mb-0">AI That works anywhere with any application on your devices</p>
        </div>

        <div className="mt-[clamp(44px,8vh,80px)] flex w-full max-w-[320px] flex-col flex-wrap justify-center gap-x-[16px] gap-y-[12px] md:w-auto md:max-w-none md:flex-row [@media(max-height:620px)_and_(min-width:768px)]:mt-[40px]" aria-label="Aura downloads">
          <button
            type="button"
            onClick={() => navigate("/notify-me", { state: { system: "windows" } })}
            className="group inline-flex min-h-[44px] w-full min-w-[200px] touch-manipulation cursor-pointer items-center justify-center gap-[10px] rounded-[6px] border border-[#141413] bg-[#141413] px-[16px] py-[11px] font-['Inter',system-ui,sans-serif] text-[13px] leading-none font-medium text-[#F0EEE6] transition-[background-color,color,box-shadow] duration-200 hover:bg-white/80 hover:text-[#141413] hover:shadow-[0_8px_24px_rgb(20_20_19_/_12%)] focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(122_50_32_/_45%)] motion-reduce:transition-none max-[319px]:min-w-0 md:w-auto"
          >
            <img src={windowsLogo} alt="" aria-hidden="true" className="size-[16px] invert transition-[filter] duration-200 group-hover:invert-0 motion-reduce:transition-none" />
            <span>Download for Windows</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/notify-me", { state: { system: "macos" } })}
            className="group inline-flex min-h-[44px] w-full min-w-[200px] touch-manipulation cursor-pointer items-center justify-center gap-[10px] rounded-[6px] border border-[#141413] bg-[#141413] px-[16px] py-[11px] font-['Inter',system-ui,sans-serif] text-[13px] leading-none font-medium text-[#F0EEE6] transition-[background-color,color,box-shadow] duration-200 hover:bg-white/80 hover:text-[#141413] hover:shadow-[0_8px_24px_rgb(20_20_19_/_12%)] focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(122_50_32_/_45%)] motion-reduce:transition-none max-[319px]:min-w-0 md:w-auto"
          >
            <img src={appleLogo} alt="" aria-hidden="true" className="size-[16px] invert transition-[filter] duration-200 group-hover:invert-0 motion-reduce:transition-none" />
            <span>Download for Mac</span>
          </button>
        </div>
      </motion.div>
      </section>

      <AuraFeatureStage />
      <AuraExploreSection />
      <AuraFeatureCards />
      <AuraVoicePricingSection
        onFreePlanClick={openDownloadFormForCurrentDevice}
      />
    </main>
  );
};

export default GetYourAuraPage;

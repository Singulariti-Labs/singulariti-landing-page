import React from "react";

const AuraExploreSection: React.FC = () => {
  return (
    <section
      className="flex w-full flex-col items-center bg-transparent px-[20px] pt-[72px] pb-[96px] text-center text-[#141413] md:px-[max(20px,6vw)] md:pt-[clamp(80px,10vw,160px)] md:pb-[clamp(96px,12vw,176px)]"
      aria-labelledby="aura-explore-title"
    >
      <h2
        id="aura-explore-title"
        className="m-0 w-full text-balance font-['DM_Sans',system-ui,sans-serif] text-[26px] leading-[1.15] font-medium tracking-[-0.045em] sm:text-[32px] md:text-[40px] md:leading-[1.1] lg:text-[52px]"
      >
        Build, create, and explore your curiosity with Aura.
      </h2>
      <p className="mt-[14px] mb-0 w-full max-w-[384px] text-balance font-['Darker_Grotesque',system-ui,sans-serif] text-[18px] leading-[1.5] font-medium md:mt-[28px] md:max-w-[768px] md:text-[28px] md:leading-[1.4] lg:text-[32px]">
        <span className="inline md:block">Imagine anything that you can do on a computer.</span>
        {" "}
        <span className="inline md:block">Just ask and Aura does it for you</span>
      </p>
    </section>
  );
};

export default AuraExploreSection;

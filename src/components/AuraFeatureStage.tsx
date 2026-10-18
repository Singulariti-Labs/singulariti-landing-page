import React from "react";
import auraProductImage768 from "../assets/optimized/aura_product_image-768.webp";
import auraProductImage1440 from "../assets/optimized/aura_product_image-1440.webp";
import auraProductImage2160 from "../assets/optimized/aura_product_image-2160.webp";

const AuraFeatureStage: React.FC = () => {
  return (
    <section
      className="relative z-[1] flex w-full flex-col items-center overflow-hidden bg-transparent px-[16px] pt-[clamp(64px,16vw,88px)] max-[319px]:px-[12px] md:px-[9vw] md:pt-[clamp(72px,8vw,120px)] lg:px-[max(20px,6vw)]"
      aria-labelledby="aura-feature-stage-title"
    >
      <h2
        id="aura-feature-stage-title"
        className="m-0 mb-[24px] w-full max-w-[352px] text-balance text-center font-['DM_Sans',system-ui,sans-serif] text-[26px] leading-[1.12] font-medium tracking-[-0.04em] text-[#141413] sm:text-[32px] md:mb-[clamp(28px,3.25vw,48px)] md:max-w-[736px] md:text-[40px] md:leading-[1.08] md:tracking-[-0.045em] lg:max-w-[1088px] lg:text-[52px]"
      >
        Personal Proactive Assistant That Lives in Your Notch
      </h2>

      <div
        className="relative isolate aspect-[4/3] w-full overflow-hidden rounded-t-[12px] md:aspect-[16/10] lg:aspect-[2.15/1] lg:max-w-[1088px] lg:rounded-t-[clamp(12px,1.1vw,20px)]"
        aria-hidden="true"
      >
        <img
          className="block size-full object-cover object-[54%_top] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,rgb(0_0_0_/_88%)_62%,rgb(0_0_0_/_48%)_76%,rgb(0_0_0_/_12%)_90%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_52%,rgb(0_0_0_/_88%)_62%,rgb(0_0_0_/_48%)_76%,rgb(0_0_0_/_12%)_90%,transparent_100%)] md:object-top"
          src={auraProductImage1440}
          srcSet={`${auraProductImage768} 768w, ${auraProductImage1440} 1440w, ${auraProductImage2160} 2160w`}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 82vw, 1088px"
          alt=""
          width="4324"
          height="2380"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default AuraFeatureStage;

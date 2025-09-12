import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[110dvh] bg-white flex items-center justify-center overflow-hidden">
      {/* ===== bottom-one ===== */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        -top-[14vw]                /* ⬅ push down ~ first ellipse’s visible height */
        w-[110vw]                  /* wider */
        aspect-[16/10]              /* default: taller on mobile */
        max-lg:aspect-[16/11]      /* < 1024px */
        lg:aspect-[16/7]           /* ≥ 1024px */
        bg-[#FF8400]
        rounded-[50%]
        max-lg:blur[20px]
        blur-[100px]
      "
      />

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        -top-[20vw]                /* ⬅ push down ~ first ellipse’s visible height */
        w-[110vw]                  /* wider */
        aspect-[16/9]              /* default: taller on mobile */
        max-lg:aspect-[16/10]      /* < 1024px */
        lg:aspect-[16/7]           /* ≥ 1024px */
        bg-[#FF7B00]
        rounded-[50%]
        max-lg:blur[60px]
        blur-[150px] 
      "
      />

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        -top-[20vw]          /* half-out top */
        w-[106vw]
        aspect-[16/9]
        max-lg:aspect-[16/9]
        lg:aspect-[16/7]
        bg-[#FF4000]
        rounded-[50%]
        max-lg:blur[60px]
        blur-[120px]
      "
      />
      {/* ===== top-most ===== */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        -top-[18vw]          /* half-out top */
        w-[100vw]
        aspect-[16/8]
        max-lg:aspect-[16/8]
        lg:aspect-[16/5]
        bg-white
        rounded-[50%]
        max-lg:blur-[80px]
        blur-[120px]
      "
      />

      {/* content sits above both layers */}
      <div className="relative z-10 text-center text-black">
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[160px] font-medium drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]">
          Singulariti
        </h1>
        <p className="mt-4 font-medium text-xl lg:text-[40px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          The Personal AI That Lives With You
        </p>

        {/* ===== glass ask bar ===== */}
        <div className="!mt-12 mx-auto max-w-xl w-full px-4">
          <div className="flex items-center justify-between rounded-2xl bg-black/20 backdrop-blur-xl border border-white/40 drop-shadow-[0_8px_4px_rgba(0,0,0,0.30)] px-6 !py-1">
            {/* LEFT label */}
            <span className="text-xl max-lg:text-md text-black/80 !pl-4">Ask</span>

            {/* RIGHT buttons – same width & height (unchanged) */}
            <div className="flex items-center gap-2 !pr-2">
              <button className="w-18 h-9 max-lg:w-12 max-lg:h-6 flex items-center justify-center text-[20px] max-lg:text-[12px] font-medium rounded-2xl bg-black/50 text-white">
                Screen
              </button>
              <button className="w-18 h-9 max-lg:w-12 max-lg:h-6 flex items-center justify-center rounded-2xl bg-black/50">
                <img
                  src="/src/assets/listen-icon.png"
                  alt="audio"
                  className="w-11 h-5 max-lg:w-7 max-lg:h-3" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

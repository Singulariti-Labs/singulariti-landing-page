import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[120dvh] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* ===== bottom ellipses ===== */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-[14vw]
          w-[110vw]
          aspect-[16/10]
          max-lg:aspect-[16/11]
          lg:aspect-[16/7]
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
          -top-[20vw]
          w-[110vw]
          aspect-[16/9]
          max-lg:aspect-[16/10]
          lg:aspect-[16/7]
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
          -top-[20vw]
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
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-[18vw]
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

      {/* ===== hero content centered ===== */}
      <div className="relative z-10 text-center text-black flex flex-col items-center justify-center -translate-y-28">
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[160px] font-medium drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]">
          Singulariti
        </h1>
        <p className="mt-4 font-medium text-xl lg:text-[40px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Creating personal AI that truly cares, giving you the superpower to do anything.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

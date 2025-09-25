import React from "react";
import bgImage from "../assets/roadmap_bg.png"; // <-- replace with your image path

const RoadMap: React.FC = () => {
  const handleExploreAura = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== Hero Section ===== */}
      <section
        className="relative w-full h-[20vh] md:h-[30vh] lg:h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Heading positioned bottom-left */}
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-4xl md:text-8xl font-medium text-black [text-shadow:2px_4px_6px_rgba(0,0,0,0.4)]">
            Road Map
          </h1>
        </div>
      </section>

      {/* ===== Timeline Section ===== */}
      <section className="relative w-full !py-16 bg-white overflow-hidden">
        {/* ===== 1st ===== */}
        <div className="max-w-5xl mx-auto !px-6">
          <div className="flex !mt-10">
            {/* Left side: Circle + Line */}
            <div className="flex flex-col">
              {/* blurred wrapper */}
              <div className="!blur-[1px]">
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #F09D03 0%, #F8DD57 100%)",
                  }}
                />
              </div>
              <div className="w-[1px] lg:w-[2px] h-60 bg-black !mt-2 !ml-3 lg:!ml-[14px]" />
            </div>

            {/* Right side: Content – with text shadow */}
            <div className="!ml-10 lg:!ml-24 flex flex-col !-mt-[1.2rem] lg:!-mt-[2rem]">
              <h2 className="text-5xl lg:text-7xl font-medium text-black leading-none [text-shadow:0px_3px_4px_rgba(0,0,0,0.25)]">
                Aura
              </h2>
              <p className="!mt-2 font-medium text-xl lg:text-2xl text-black !drop-shadow-xl">
                Personal AI Agent For Operating System
              </p>
              <button
                onClick={handleExploreAura}
                className="!mt-8 !px-6 !py-2 bg-black text-white rounded-full hover:bg-gray-800 transition w-fit"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* ===== 2nd ===== */}
        <div className="max-w-5xl mx-auto !px-6">
          <div className="flex !mt-2">
            {/* Left side: Circle + Line */}
            <div className="flex flex-col">
              {/* blurred wrapper */}
              <div className="!blur-[1px]">
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #EDE4D3 0%, #D9D2AE 100%)",
                  }}
                />
              </div>
              <div className="w-[1px] lg:w-[2px] h-60 bg-black !mt-2 !ml-3 lg:!ml-[14px]" />
            </div>

            {/* Right side: Content – with text shadow */}
            <div className="!ml-10 lg:!ml-24 flex flex-col !-mt-[1.2rem] lg:!-mt-[2rem]">
              <h2 className="text-5xl lg:text-7xl font-medium text-black/50 leading-none [text-shadow:0px_3px_4px_rgba(0,0,0,0.25)]">
                A2I Protocol
              </h2>
              <p className="!mt-2 font-medium text-xl lg:text-2xl text-black/50 !drop-shadow-xl">
                Agent, App Iteraction Protocol
              </p>
              <button className="!mt-8 !px-6 !py-2 bg-black/50 text-white rounded-full transition w-fit">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* ===== 3rd ===== */}
        <div className="max-w-5xl mx-auto !px-6">
          <div className="flex !mt-2">
            {/* Left side: Circle + Line */}
            <div className="flex flex-col">
              {/* blurred wrapper */}
              <div className="!blur-[1px]">
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #EDE4D3 0%, #D9D2AE 100%)",
                  }}
                />
              </div>
              <div className="w-[1px] lg:w-[2px] h-60 bg-black !mt-2 !ml-3 lg:!ml-[14px]" />
            </div>

            {/* Right side: Content – with text shadow */}
            <div className="!ml-10 lg:!ml-24 flex flex-col !-mt-[1.2rem] lg:!-mt-[2rem]">
              <h2 className="text-5xl lg:text-7xl font-medium text-black/50 leading-none [text-shadow:0px_3px_4px_rgba(0,0,0,0.25)]">
                OSI-1
              </h2>
              <p className="!mt-2 font-medium text-xl lg:text-2xl text-black/50 !drop-shadow-xl">
                Operating Super Intelligence - AI powred Operating System
              </p>
              <button className="!mt-8 !px-6 !py-2 bg-black/50 text-white rounded-full transition w-fit">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* ===== 4th ===== */}
        <div className="max-w-5xl mx-auto !px-6">
          <div className="flex !mt-2">
            {/* Left side: Circle + Line */}
            <div className="flex flex-col">
              {/* blurred wrapper */}
              <div className="!blur-[1px]">
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #EDE4D3 0%, #D9D2AE 100%)",
                  }}
                />
              </div>
            </div>

            {/* Right side: Content – with text shadow */}
            <div className="!ml-10 lg:!ml-24 flex flex-col !-mt-[1.2rem] lg:!-mt-[2rem]">
              <h2 className="text-5xl lg:text-7xl font-medium text-black/50 leading-none [text-shadow:0px_3px_4px_rgba(0,0,0,0.25)]">
                OSI-1 Powered Hardwares
              </h2>
              <p className="!mt-2 font-medium text-xl lg:text-2xl text-black/50 !drop-shadow-xl">
                Hardwares/Warebles Prowered By OSI-1
              </p>
              <button className="!mt-8 !px-6 !py-2 bg-black/50 text-white rounded-full transition w-fit">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* ===== ELLIPSE ===== */}
        <div className="!mt-34 relative w-full">
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[2vw] w-[110vw] aspect-[16/10] max-lg:aspect-[16/8] lg:aspect-[16/3] rounded-[50%] blur-[40px] lg:blur-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #B04AFF 0%,rgb(125, 62, 225) 50%,#B04AFF 100%)",
            }}
          />
        </div>
         {/* ===== full-bleed glass footer ===== */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[3vh] lg:h-[5vh] flex items-center justify-center bg-white/10 backdrop-blur-[200px] border-t border-white/20 shadow-lg">
          <p className="text-black font-medium text-md lg:text-lg tracking-wide drop-shadow-sm">
            © 2025 Singulariti
          </p>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;

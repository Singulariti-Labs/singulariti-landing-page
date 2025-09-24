import React from "react";
import auraImg from "../assets/aura-card.png";
import seesIcon from "../assets/sees-icon.png";
import hearsIcon from "../assets/hears-icon.png";
import knowsIcon from "../assets/knows-icon.png";

const Aura: React.FC = () => {
  const handleJoinWaitlistClick = () => {
    window.location.href = "/join-waitlist";
  };

  return (
    <section className="relative w-full min-h-[110dvh] bg-white !px-4 sm:!px-8 lg:!px-16 xl:!px-24 !py-16 lg:!py-24">
      <div className="!mx-auto grid gap-12 lg:grid-cols-2 items-start !max-w-7xl w-full">
        {/* -------------------------------------------------- */}
        {/*  LEFT  →  IMAGE + TEXT + BUTTON  (now 1st col)   */}
        {/* -------------------------------------------------- */}
        <div className="order-1 lg:order-1 flex flex-col items-center lg:!items-start text-center lg:!text-left !w-full">
          <img
            src={auraImg}
            alt="Aura"
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
          <p className="!mt-8 text-xl lg:text-3xl font-medium text-gray-800 !px-4 lg:!pr-17">
            Your Personal AI for the Operating System. More than an assistant,
            it’s a partner that transforms the way you connect with technology.
          </p>

          {/* ===== Get Your Aura Button ===== */}
          <button
            onClick={handleJoinWaitlistClick}
            className="
              !mt-8 !mb-20 lg:!ml-3
              relative 
              text-white font-medium text-xl lg:text-2xl 
              !px-6 !py-2 rounded-xl 
              bg-gradient-to-br from-[#FF7B00] via-[#FF9A3C] to-[#FF5E00]
              border border-white
              shadow-inner shadow-white/40
              hover:brightness-110 hover:scale-105 
              transition-all duration-200
            "
          >
            Get Your Aura
          </button>
        </div>

        {/* -------------------------------------------------- */}
        {/*  RIGHT  →  3 CARDS  (now 2nd col)                */}
        {/* -------------------------------------------------- */}
        <div className="order-2 lg:order-2 grid gap-10 lg:gap-12 !w-full items-start">
          {[
            {
              title: "AI That Sees",
              desc: "The AI that can see your screen, it knows what are you looking, while understanding the context ",
              image: seesIcon,
            },
            {
              title: "AI That Hears",
              desc: "AI that listens to your system audio, meetings, videos, or any sound & transforms it into useful insights instantly.",
              image: hearsIcon,
            },
            {
              title: "AI That Knows",
              desc: "Unifies your context, history, & intent across devices into one memory so it knows you and acts when you need it.",
              image: knowsIcon,
            },
          ].map((c, i) => (
            <div
              key={i}
              className="
                !ml-auto lg:!mr-0
                w-full max-w-xl lg:!max-w-lg xl:!max-w-xl
                rounded-2xl
                bg-gradient-to-br from-white to-[#F5F5ED]
                backdrop-blur-lg
                border border-gray-200
                shadow-lg
                !px-4
                lg:!px-6
                hover:shadow-xl
                transition
                relative
                !overflow-visible
              "
            >
              {/* Overlay Image - positioned at upper right edge */}
              <img
                src={c.image}
                alt={c.title}
                className="
                  absolute 
                  !-top-5 
                  !-right-3 
                  lg:!-top-7 
                  lg:!-right-4
                  w-50
                  h-14 
                  lg:w-50 
                  lg:h-20
                  object-contain
                  !z-10
                  drop-shadow-lg
                "
              />

              {/* content left-aligned with inner spacing */}
              <div className="text-left !pl-4 lg:!pl-6 !max-w-[720px] relative !z-0">
                <h3 className="text-md lg:text-xl font-semibold text-black !mt-2">
                  {c.title}
                </h3>
                <p className="text-sm lg:text-lg !my-2 lg:!mb-4 lg:!mt-2 !mr-1 lg:!mr-3 text-black">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aura;

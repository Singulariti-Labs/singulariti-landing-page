import React, { useEffect, useRef, useState } from "react";
import leftCardGif from "../assets/gif/Bug_Solving.gif";
import rightCardGif from "../assets/gif/Yt_Summary_Low.gif";

const FeaturesSection1: React.FC = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current) setIsLeftVisible(entry.isIntersecting);
          if (entry.target === rightRef.current) setIsRightVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 } // visible at 40%
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-[130dvh] bg-white !px-4 sm:!px-8 lg:!px-16 xl:!px-24 !py-16 lg:!py-24">
      <div className="!mx-auto !max-w-7xl w-full">
        
        {/* --------------------------------------------- */}
        {/* CENTERED HEADING */}
        {/* --------------------------------------------- */}
        <div className="text-center !mb-16 lg:!mb-20">
          <h2 className="text-4xl lg:text-6xl xl:text-6xl font-medium text-gray-900 !mb-4 drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
            Aura
          </h2>
          <p
            className="text-xl lg:text-2xl text-black/60 max-w-3xl !mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
            style={{ transform: "skew(-15deg, 0)" }}
          >
            For
          </p>
          <p className="text-2xl lg:text-4xl text-black max-w-3xl !mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
            Proactive & Contextual Intelligence
          </p>
        </div>

        {/* --------------------------------------------- */}
        {/* TWO-COLUMN CARDS */}
        {/* --------------------------------------------- */}
        <div className="grid gap-12 lg:grid-cols-2 items-center w-full">

          {/* LEFT CARD */}
          <div
            ref={leftRef}
            className="w-full max-w-sm lg:max-w-xl !mx-auto lg:!mx-0 lg:!justify-self-center rounded-2xl
                       bg-gradient-to-br from-white to-[#F5F5ED] backdrop-blur-lg border border-gray-200
                       shadow-lg hover:shadow-xl transition-all duration-300 !px-2 !py-3 lg:!px-2 lg:!py-3 text-center"
          >
            <div className="!mb-6 lg:!mb-8">
              {isLeftVisible ? (
                <img
                  src={leftCardGif}
                  alt="Left Card"
                  className="w-full h-54 lg:h-84 bg-gray-100 rounded-xl !mx-auto flex items-center justify-center"
                />
              ) : (
                <div className="w-full h-54 lg:h-84 bg-gray-100 rounded-xl !mx-auto flex items-center justify-center" />
              )}
            </div>

            <h3 className="text-lg lg:text-xl xl:text-2xl font-medium text-black !mb-4">
              Problems Solved, Before They’re Yours
            </h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed">
              Singulariti takes care of the fixes and the unknowns, so you can keep moving without worry.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div
            ref={rightRef}
            className="w-full max-w-sm lg:max-w-xl !mx-auto lg:!mx-0 lg:!justify-self-center rounded-2xl
                       bg-gradient-to-br from-white to-[#F5F5ED] backdrop-blur-lg border border-gray-200
                       shadow-lg hover:shadow-xl transition-all duration-300 !px-2 !py-3 lg:!px-2 lg:!py-3 text-center"
          >
            <div className="!mb-6 lg:!mb-8">
              {isRightVisible ? (
                <img
                  src={rightCardGif}
                  alt="Right Card"
                  className="w-full h-54 lg:h-84 bg-gray-100 rounded-xl !mx-auto flex items-center justify-center"
                />
              ) : (
                <div className="w-full h-54 lg:h-84 bg-gray-100 rounded-xl !mx-auto flex items-center justify-center" />
              )}
            </div>

            <h3 className="text-lg lg:text-xl xl:text-2xl font-medium text-black !mb-4">
              Know what’s inside before you watch or read.
            </h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed">
              From noise to clarity—Singulariti helps you understand any video, webpage, or document in just seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;

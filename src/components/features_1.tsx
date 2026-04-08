import React, { useEffect, useRef, useState } from "react";
import leftCardGif from "../assets/gif/Bug_Solving.gif";
import rightCardGif from "../assets/gif/Yt_Summary_Low.gif";
import { motion } from "framer-motion";

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
      { threshold: 0.4 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#F0EEE6] px-6 py-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#141413] text-5xl lg:text-7xl font-medium"
          >
            Aura
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <p className="mt-4 text-[#141413]/40 text-xl lg:text-2xl font-medium italic">
              For
            </p>
            <p className="mt-2 text-[#141413] text-2xl lg:text-4xl font-medium uppercase tracking-tight">
              Proactive & Contextual Intelligence
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT CARD */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-10 flex flex-col items-center text-center group transition-all duration-500 hover:bg-[#141413]/[0.05]"
          >
            <div className="w-full aspect-video bg-[#141413]/5 rounded-2xl overflow-hidden mb-10 transition-transform duration-500 group-hover:scale-[1.02]">
              {isLeftVisible ? (
                <img
                  src={leftCardGif}
                  alt="Left Card"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full animate-pulse bg-[#141413]/5" />
              )}
            </div>

            <h3 className="text-[#141413] text-2xl font-semibold mb-4">
              Problems Solved, Before They’re Yours
            </h3>
            <p className="text-[#141413]/70 text-lg font-medium leading-relaxed max-w-[440px]">
              Singulariti takes care of the fixes and the unknowns, so you can keep moving without worry.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-10 flex flex-col items-center text-center group transition-all duration-500 hover:bg-[#141413]/[0.05]"
          >
            <div className="w-full aspect-video bg-[#141413]/5 rounded-2xl overflow-hidden mb-10 transition-transform duration-500 group-hover:scale-[1.02]">
              {isRightVisible ? (
                <img
                  src={rightCardGif}
                  alt="Right Card"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full animate-pulse bg-[#141413]/5" />
              )}
            </div>

            <h3 className="text-[#141413] text-2xl font-semibold mb-4">
              Know what’s inside before you watch or read.
            </h3>
            <p className="text-[#141413]/70 text-lg font-medium leading-relaxed max-w-[440px]">
              From noise to clarity—Singulariti helps you understand any video, webpage, or document in just seconds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;

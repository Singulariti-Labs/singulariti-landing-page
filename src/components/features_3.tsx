import React, { useRef, useState, useEffect } from "react";
import leftCardGif from "@/assets/gif/Auto_Heal.gif";
import rightCardGif from "@/assets/gif/Booking.gif";
import { motion } from "framer-motion";

const FeaturesSection3: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#F0EEE6] px-6 py-24"
    >
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
              Smart Suggestions, Auto Browsing & Instant Shopping
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-10 flex flex-col items-center text-center group transition-all duration-500 hover:bg-[#141413]/[0.05]"
          >
            <div className="w-full aspect-video bg-[#141413]/5 rounded-2xl overflow-hidden mb-10 transition-transform duration-500 group-hover:scale-[1.02]">
              {isVisible ? (
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
              Always One Step Ahead
            </h3>
            <p className="text-[#141413]/70 text-lg font-medium leading-relaxed max-w-[440px]">
              It notices what you might miss and nudges you with what works best, before you even think to ask.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-10 flex flex-col items-center text-center group transition-all duration-500 hover:bg-[#141413]/[0.05]"
          >
            <div className="w-full aspect-video bg-[#141413]/5 rounded-2xl overflow-hidden mb-10 transition-transform duration-500 group-hover:scale-[1.02]">
              {isVisible ? (
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
              Smarter Browsing, Instant Results.
            </h3>
            <p className="text-[#141413]/70 text-lg font-medium leading-relaxed max-w-[440px]">
              Ask for anything, get the answer instantly, and with a single step book, buy, or move forward without losing a second.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;

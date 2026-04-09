import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import moonImg from "../assets/moon.png";

const AuraIntro: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  // 1. Precise Scroll Trigger Logic:
  // Offset ["start 100%", "start 85%"] ensures:
  // - Value is 0 until the TOP of the button hits the BOTTOM of the screen.
  // - Value reaches 1 when the button has scrolled up to 85% of the viewport.
  // This prevents it from being "already expanded" when you first see the section header.
  const { scrollYProgress } = useScroll({
    target: buttonRef,
    offset: ["start 100%", "start 80%"]
  });

  // 2. Clear Transformation Mapping:
  // - Above/At trigger: Width = 80% (Shrink state within content area)
  // - Once crossed: Expands to 100vw (Full screen edge-to-edge)
  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100vw"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);

  // breakout margin transformation
  const breakoutMargin = useTransform(scrollYProgress, [0, 1], ["0px", "calc(-50vw + 50%)"]);

  // 3. Snappy Springs for High-End feel
  const smoothWidth = useSpring(width, { stiffness: 450, damping: 40 });
  const smoothRadius = useSpring(borderRadius, { stiffness: 450, damping: 40 });
  const smoothMargin = useSpring(breakoutMargin, { stiffness: 450, damping: 40 });

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* 4. Top Header Part (Standard Content Alignment) */}
      <div className="w-full pt-28 pb-12 bg-transparent">
        <div className="max-w-[1440px] w-full mx-auto px-6 flex flex-col items-center text-center">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#141413] font-darker font-semibold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight mb-8"
          >
            Introducing
          </motion.h3>
        </div>
      </div>

      {/* 
        5. The "Full Screen" Background Container
        This container expands dynamically but keeps all internal content 
        symmetrically centered with NO horizontal movement or 'shaking'.
      */}
      <motion.div
        style={{
          width: smoothWidth,
          borderRadius: smoothRadius,
          marginLeft: smoothMargin,
          marginRight: smoothMargin,
        }}
        className="bg-[#141413] flex flex-col items-center relative overflow-hidden shadow-2xl z-10 mx-auto"
      >
        {/* SHARED CENTER REFERENCE: Fixed w-screen frame ensures internal UI never shifts */}
        <div className="relative w-screen flex flex-col items-center overflow-hidden">

          {/* A. Moon Background (Fixed height and center) */}
          <div className="relative w-full h-[600px] flex justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${moonImg})` }}
            />
            {/* Blurry Atmospheric Flow Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#141413] to-transparent" />

            {/* B. UI Elements (Absolutely steady text and button) */}
            <div className="relative w-full max-w-[1440px] h-full flex flex-col items-center justify-end pb-24 px-6 text-center z-20">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-[#F0EEE6] font-inter font-medium text-[48px] sm:text-[64px] md:text-[80px] lg:text-[108px] md:-mb-1 leading-none mb-8"
              >
                Aura
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#DCCA87] font-darker font-medium text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-tight mb-14 relative top-12"
              >
                First Step Towards Intelligent Systems
              </motion.p>
              <motion.button
                ref={buttonRef}
                onClick={() => navigate('/get-your-aura')}
                className="bg-[#E5E3DB] text-[#141413] px-10 py-1.5 rounded-[5px] font-inter font-medium text-[17px] transition-colors hover:bg-white relative top-8"
              >
                Explore
              </motion.button>
            </div>
          </div>

          {/* 6. Mission Statement (Content capped at 1440px, Background is full screen) */}
          <div className="w-full py-40 flex flex-col items-center">
            <div className="max-w-[1440px] w-full mx-auto px-6 flex flex-col items-center text-center gap-12">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-[#F0EEE6] font-inter font-medium text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-tight"
              >
                Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#D4A820]/80 font-darker text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[1.6] font-semibold max-w-[1240px]"
              >
                AURA is where we begin. But the question driving Singulariti is much larger, what does it take for AI to be present in every moment of a person's life, across every surface, with complete context, working for you as only something that truly knows you can?
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AuraIntro;

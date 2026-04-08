import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F0EEE6] flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-[#141413]/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-[#141413]/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[#141413] text-[clamp(3.5rem,15vw,12rem)] font-medium leading-[0.9] tracking-tighter">
            Singulariti
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#141413]/70 text-[clamp(1.2rem,3vw,1.8rem)] max-w-[800px] font-medium leading-tight"
        >
          Creating personal AI that truly cares, giving you the superpower to do anything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <button className="bg-[#141413] text-[#F0EEE6] px-10 py-4 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

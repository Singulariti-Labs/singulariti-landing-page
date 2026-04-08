import React from "react";
import { motion } from "framer-motion";

const OneLiner: React.FC = () => (
  <section className="relative w-full min-h-[60dvh] bg-[#F0EEE6] flex items-center justify-center overflow-hidden px-6">
    <motion.div
      className="relative z-10 text-center max-w-[1200px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-[#141413] text-[clamp(2.5rem,10vw,10rem)] font-medium leading-[0.9] tracking-tighter">
        Aura For Everything
      </h2>
    </motion.div>
  </section>
);

export default OneLiner;
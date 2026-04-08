import React from "react";
import { motion } from "framer-motion";

const Highlight: React.FC = () => (
  <section className="relative w-full min-h-[80dvh] bg-[#F0EEE6] flex items-center justify-center overflow-hidden px-6">
    <motion.div
      className="relative z-10 text-center max-w-[1200px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-[#141413] text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.1] tracking-tight">
        Personalised Agentic Layer
      </h2>
      <h2 className="mt-4 text-[#141413]/40 text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.1] tracking-tight">
        Between You & Your Operating System
      </h2>
    </motion.div>
  </section>
);

export default Highlight;

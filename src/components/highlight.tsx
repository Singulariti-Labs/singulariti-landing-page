import React from "react";
import { motion } from "framer-motion";

const Highlight: React.FC = () => (
  <section className="relative w-full h-[110dvh] bg-white flex items-center justify-center overflow-hidden">
    {/* ===== centred text ===== */}
    <motion.div
      className="relative z-10 text-center text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.7 }} // triggers when 50% visible
    >
      <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-medium drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]">
        Personalised Agentic Layer
      </h2>
      <h2 className="mt-4 font-medium text-2xl sm:text-2xl md:text-4xl lg:text-7xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        Between You & Your Operating System
      </h2>
    </motion.div>
  </section>
);

export default Highlight;

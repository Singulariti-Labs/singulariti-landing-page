import React from "react";
import { motion } from "framer-motion";

const OneLiner: React.FC = () => (
  <section className="relative w-full h-[80dvh] bg-white flex items-center justify-center overflow-hidden">
    {/* ===== centred text ===== */}
    <motion.div
      className="relative z-10 text-center text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.7 }} // triggers when 70% visible
    >
      <h2 className="text-6xl sm:text-6xl md:text-6xl lg:text-9xl font-medium drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]">
        Singulariti For Everything
      </h2>
    </motion.div>
  </section>
);

export default OneLiner;
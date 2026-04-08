import React from "react";
import complexTaskImg from "../assets/complex_task_feat.png";
import { motion } from "framer-motion";

const FeaturesSection4: React.FC = () => (
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
              Deep Work & Autonomous Execution
          </p>
        </motion.div>
      </div>

      {/* Single Center Card */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-10 flex flex-col items-center text-center group transition-all duration-500 hover:bg-[#141413]/[0.05] max-w-3xl w-full"
        >
          <div className="w-full aspect-video bg-[#141413]/5 rounded-2xl overflow-hidden mb-10 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={complexTaskImg}
              alt="Center Card"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-[#141413] text-2xl font-semibold mb-4">
            Autonomous Productivity, Beyond Human Speed
          </h3>
          
          <p className="text-[#141413]/70 text-lg font-medium leading-relaxed max-w-[500px]">
            Complex tasks collapse into simple requests with results crafted, delivered, and executed seamlessly at the speed of thought.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeaturesSection4;
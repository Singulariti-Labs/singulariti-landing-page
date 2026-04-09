import React from "react";
import { motion } from "framer-motion";
import CubeAnimation from "./animations/CubeAnimation";
import LinesAnimation from "./animations/LinesAnimation";
import RadialAnimation from "./animations/RadialAnimation";

const Section3: React.FC = () => {
  const problems = [
    {
      label: "Context",
      title: "Trapped inside a window",
      animation: <CubeAnimation />,
      description:
        "Today, AI is confined to a browser tab or an app. It only knows what happens inside that one window. Everything else, other apps, other screens, other devices get blurred. Your entire digital life outside that window stays invisible to it. Its world begins and ends at its own edges.",
    },
    {
      label: "Infra",
      title: "Moving slower than a human",
      animation: <LinesAnimation />,
      description:
        "AI doesn't have native access to your computer. To get anything done, it mimics what a human would do, it clicks, scrolls, and types its way through interfaces built for fingers. It works, sometimes. But it was never meant to work this way. AI is a guest in a house it wasn't built for.",
    },
    {
      label: "Device",
      title: "AI is an app, not the foundation",
      animation: <RadialAnimation />,
      description:
        "Every device you own has AI, but as an app, a layer sitting on top, never at the core. It doesn't live at the foundation. Every digital device have it, but none of them are connected. There's no thread running through them. AI is everywhere, but completely isolated.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-transparent px-6 overflow-visible">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[#141413] font-inter font-medium text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[1.1] lg:leading-[1.05] tracking-tighter px-4"
          >
            The Model Is Ready <br className="hidden lg:block" />
            The World Around It Isn't
          </motion.h2>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="relative p-4 bg-transparent border border-[#141413]/25 rounded-[20px] flex flex-col items-start gap-8 group transition-all duration-500"
            >
              {/* Badge */}
              <div className="bg-[#141413] text-[#F0EEE6] px-4 py-1.5 rounded-[5px] text-[13px] font-medium tracking-wide">
                {problem.label}
              </div>

              {/* Animation Placeholder */}
              <div className="w-full h-[240px] flex items-center justify-center bg-transparent relative overflow-hidden">
                {problem.animation}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[#141413] font-inter font-medium text-[24px] leading-[1.2] tracking-tight h-[56px] flex items-start">
                  {problem.title}
                </h3>
                <p className="text-[#7A3220] font-darker text-[16px] leading-[1.5] font-semibold">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;

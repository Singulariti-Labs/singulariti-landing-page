import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  /* Refined Orbit Implementation with Precise Coordinates provided by user */
  const orbits = [
    { w: 2129, h: 922, x: -821, y: -310, duration: 40 },
    { w: 2246, h: 1052, x: -821, y: -310, duration: 55 },
    { w: 2367, h: 1218, x: -821, y: -310, duration: 70 },
    { w: 2515, h: 1324, x: -821, y: -310, duration: 90 },
  ];

  return (
    <section className="relative w-full h-[900px] flex flex-col items-center justify-center py-20 bg-transparent px-[4px]">

      {/* Background Orbits (Full Width Breakout) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full pointer-events-none select-none overflow-hidden z-0">

        {/* Anchored Orbit Container: This ensures the orbits stay centered relative to the layout and don't break on wider displays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[5000px] h-full pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            {/* We offset the SVG internal coordinates to match our centered 5000px container */}
            <g transform="translate(1540, 0)">
              {orbits.map((orbit, i) => (
                <ellipse
                  key={`orbit-svg-${i}`}
                  cx={orbit.x + orbit.w / 2}
                  cy={orbit.y + orbit.h / 2}
                  rx={orbit.w / 2}
                  ry={orbit.h / 2}
                  stroke="#A3A095"
                  strokeWidth="1"
                  fill="none"
                />
              ))}
            </g>
          </svg>

          {/* Animated Circles on paths */}
          <div className="absolute inset-0" style={{ transform: 'translateX(1540px)' }}>
            {orbits.map((orbit, i) => {
              const rx = orbit.w / 2;
              const ry = orbit.h / 2;
              const cx = orbit.x + rx;
              const cy = orbit.y + ry;

              const path = `M ${cx + rx},${cy} A ${rx},${ry} 0 1 1 ${cx - rx},${cy} A ${rx},${ry} 0 1 1 ${cx + rx},${cy}`;

              return (
                <motion.div
                  key={`planet-motion-${i}`}
                  className="absolute w-2.5 h-2.5 bg-[#141413] rounded-full"
                  animate={{
                    offsetDistance: ["0%", "100%"]
                  }}
                  transition={{
                    duration: orbit.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * -15
                  }}
                  style={{
                    offsetPath: `path("${path}")`,
                    top: 0,
                    left: 0
                  }}
                />
              );
            })}
          </div>
        </div>

      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-[1600px] flex flex-col items-start justify-start gap-12 md:gap-16">

        {/* Top: Bold Header */}
        <div className="w-full md:w-[85%] lg:w-[75%] flex flex-col items-start translate-x-[-10px] md:translate-x-0">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#141413] text-[72px] font-medium leading-[1.05] tracking-tighter font-inter"
          >
            AI Research & Products <br />
            To Bring Safe, Personal & <br />
            General Intelligence For Everyone
          </motion.h1>
        </div>

        {/* Bottom: Subtext with Darker Grotesque */}
        <div className="w-full flex flex-col items-end mt-4 md:mt-8 pr-[4px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-right max-w-[90%] md:max-w-[70%]"
          >
            {/* Blurred Ellipse Halo behind text */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#F0EEE6] rounded-[100%] blur-[20px] pointer-events-none"
              style={{ zIndex: -1 }}
            />

            <p className="py-2 px-6 text-[#7A3220] font-semibold text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.15] font-darker tracking-tight inline-block text-right">
              Old Technology is built for humans <br />
              We are building for the era of AI
            </p>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;

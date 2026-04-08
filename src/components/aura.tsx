import React from "react";
import auraImg from "../assets/aura-card.png";
import seesIcon from "../assets/sees-icon.png";
import hearsIcon from "../assets/hears-icon.png";
import knowsIcon from "../assets/knows-icon.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Aura: React.FC = () => {
  const navigate = useNavigate();
  const handleJoinWaitlistClick = () => {
    navigate("/get-your-aura");
  };

  return (
    <section className="relative w-full min-h-screen bg-[#F0EEE6] px-6 py-24">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <img
            src={auraImg}
            alt="Aura"
            className="w-full max-w-md object-contain"
          />
          <h2 className="mt-12 text-[#141413] text-4xl lg:text-5xl font-medium leading-tight max-w-[500px]">
             Your Personal AI for the Operating System.
          </h2>
          <p className="mt-6 text-[#141413]/70 text-lg lg:text-xl font-medium max-w-[500px]">
            More than an assistant, it’s a partner that transforms the way you connect with technology.
          </p>

          <button
            onClick={handleJoinWaitlistClick}
            className="mt-10 bg-[#141413] text-[#F0EEE6] px-10 py-4 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#141413]/10"
          >
            Get Your Aura
          </button>
        </motion.div>

        {/* Right Cards */}
        <div className="grid gap-6 w-full">
          {[
            {
              title: "AI That Sees",
              desc: "The AI that can see your screen, it knows what are you looking, while understanding the context",
              image: seesIcon,
            },
            {
              title: "AI That Hears",
              desc: "AI that listens to your system audio, meetings, videos, or any sound & transforms it into useful insights instantly.",
              image: hearsIcon,
            },
            {
              title: "AI That Knows",
              desc: "Unifies your context, history, & intent across devices into one memory so it knows you and acts when you need it.",
              image: knowsIcon,
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-8 hover:bg-[#141413]/[0.05] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-[#141413] text-2xl font-semibold">
                  {c.title}
                </h3>
                <p className="text-[#141413]/70 text-lg font-medium max-w-[400px]">
                  {c.desc}
                </p>
              </div>
              <img
                src={c.image}
                alt={c.title}
                className="absolute -right-4 -bottom-4 w-40 h-40 object-contain opacity-20 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aura;

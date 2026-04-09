import React from "react";
import auraAnimatedLogo from "../assets/aura_animated_logo.png";
import windowsLogo from "../assets/windows_logo.png";
import appleLogo from "../assets/apple_logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GetYourAuraPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-[#F0EEE6] overflow-hidden relative">

            {/* Layer 1: Background Animated Logo - Hidden on mobile/tablets */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 hidden lg:flex">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 360
                    }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeOut" },
                        scale: { duration: 1.5, ease: "easeOut" },
                        rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                    }}
                    src={auraAnimatedLogo}
                    alt=""
                    className="w-full max-w-[1200px] h-auto object-contain"
                />
            </div>

            {/* Layer 2: Blurred Ellipse */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-[80%] max-w-[750px] aspect-[1.56/1] lg:h-[650px] bg-[#F0EEE6] rounded-full flex-shrink-0 blur-[120px]"
                    style={{
                        filter: "blur(40px) sm:blur(60px) md:blur(100px)",
                    }}
                />
            </div>


            {/* Layer 3: Main Content */}
            <main className="relative z-20 flex-grow w-full flex flex-col items-center justify-center px-6 -mt-10">

                {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center text-center w-full max-w-5xl"
                >
                    {/* Aura Title */}
                    <h1
                        className="text-[#141413] text-[40px] sm:text-[54px] md:text-[72px] lg:text-[120px] font-medium leading-none tracking-tighter mb-6 lg:mb-10"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Aura
                    </h1>

                    {/* Subheading */}
                    <div className="mb-12 lg:mb-20 space-y-2 lg:space-y-1">
                        <p
                            className="text-[#7A3220] text-[15px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium leading-[1.3] lg:leading-[1.1] tracking-tight max-w-[900px] mx-auto font-darker px-4"
                        >
                            Personal AI That Wraps Entire Operating System With Agentic Layer
                        </p>
                        <p
                            className="text-[#7A3220] text-[15px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium leading-[1.3] lg:leading-[1.1] tracking-tight max-w-[900px] mx-auto font-darker px-4"
                        >
                            AI That works anywhere with any application on your devices
                        </p>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-5 mt-4">
                        {/* Windows Button */}
                        <motion.button
                            onClick={() => navigate('/notify-me', { state: { system: "windows" } })}
                            className="group bg-[#141413] hover:bg-white/70 text-[#F0EEE6] hover:text-[#141413] pl-6 pr-8 py-1.5 rounded-[10px] flex items-center gap-3 min-w-[260px] justify-center transition-all duration-300 shadow-lg hover:shadow-black/20"
                        >
                            <img src={windowsLogo} alt="" className="w-5 h-5 invert group-hover:invert-0 transition-all duration-300" />
                            <span className="text-xl font-medium">Download</span>
                        </motion.button>

                        {/* Mac Button */}
                        <motion.button
                            onClick={() => navigate('/notify-me', { state: { system: "macos" } })}
                            className="group bg-[#141413] hover:bg-white/70 text-[#F0EEE6] hover:text-[#141413] pl-6 pr-8 py-1.5 rounded-[10px] flex items-center gap-3 min-w-[260px] justify-center transition-all duration-300 shadow-lg hover:shadow-black/20"
                        >
                            <img src={appleLogo} alt="" className="w-5 h-5 invert group-hover:invert-0 transition-all duration-300" />
                            <span className="text-xl font-medium">Download</span>
                        </motion.button>
                    </div>
                </motion.div>
            </main>

        </div>
    );
};

export default GetYourAuraPage;

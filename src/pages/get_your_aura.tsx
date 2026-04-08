import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import auraBgLogo from "../assets/aura_bg_logo.png";
import windowsLogo from "../assets/windows_logo.png";
import appleLogo from "../assets/apple_logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GetYourAuraPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-[#F0EEE6] overflow-x-hidden">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-visible">

                {/* Background Logo */}
                <div
                    className="absolute pointer-events-none z-0 opacity-10"
                    style={{
                        left: '0%',
                        top: '50%',
                        transform: 'translate(-20%, -50%)',
                        width: 'min(100vw, 800px)',
                    }}
                >
                    <img src={auraBgLogo} alt="" className="w-full h-auto grayscale" />
                </div>

                {/* Content Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto"
                >
                    <div className="flex flex-col items-center w-full text-center">
                        {/* Header Section */}
                        <div className="flex flex-col items-center mb-20">
                            <h2 className="text-[#141413]/50 text-2xl md:text-3xl font-medium tracking-tight">
                                Get Your
                            </h2>
                            <h1 className="text-[#141413] text-[clamp(4rem,15vw,12rem)] font-medium leading-none tracking-tighter">
                                Aura
                            </h1>
                        </div>

                        {/* Download Sections */}
                        <div className="grid md:grid-cols-2 gap-12 w-full max-w-3xl">

                            {/* Windows Section */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-12 flex flex-col items-center group hover:bg-[#141413]/[0.05] transition-all duration-300"
                            >
                                <img
                                    src={windowsLogo}
                                    alt="Windows Logo"
                                    className="w-16 h-14 md:w-20 md:h-18 mb-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />

                                <button
                                    onClick={() => navigate('/notify-me', { state: { system: "windows" } })}
                                    className="bg-[#141413] text-[#F0EEE6] px-10 py-4 rounded-full text-xl font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full"
                                >
                                    Download
                                </button>
                            </motion.div>

                            {/* MacOS Section */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-[#141413]/[0.03] border border-[#141413]/10 rounded-3xl p-12 flex flex-col items-center group hover:bg-[#141413]/[0.05] transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-12">
                                    <img
                                        src={appleLogo}
                                        alt="Apple Logo"
                                        className="w-8 h-8 object-contain opacity-50"
                                    />
                                    <span className="text-[#141413] text-lg font-medium opacity-50">
                                        MacOS Coming Soon
                                    </span>
                                </div>

                                <button
                                    onClick={() => navigate('/notify-me', { state: { system: "macos" } })}
                                    className="bg-transparent border border-[#141413]/20 text-[#141413] px-10 py-4 rounded-full text-xl font-medium hover:bg-[#141413] hover:text-[#F0EEE6] transition-all duration-300 w-full"
                                >
                                    Notify Me
                                </button>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default GetYourAuraPage;

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import auraBgLogo from "../assets/aura_bg_logo.png";
import windowsLogo from "../assets/windows_logo.png";
import appleLogo from "../assets/apple_logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GetYourAuraPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow relative w-full flex flex-col items-center justify-center pt-32 md:pt-48 pb-16 md:pb-24 px-4 overflow-hidden">

                {/* Background Logo */}
                <div
                    className="absolute pointer-events-none z-0"
                    style={{
                        left: '10%',
                        top: '50%',
                        transform: 'translate(-25%, -50%)', // Positioned towards the left
                        width: 'min(100vw, 800px)',
                        height: 'auto',
                    }}
                >
                    <img src={auraBgLogo} alt="" className="w-full h-auto" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto h-[600px] justify-center">
                    <div className="flex flex-col items-center w-full">
                        {/* Header Section */}
                        <div className="flex flex-col items-center !md:mt-6 !mt-8">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-black drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
                                Get Your
                            </h2>
                            <h1 className="text-5xl md:text-7xl lg:text-[140px] font-medium text-black leading-none !mb-4 !md:-mt-6 !lg:-mt-8 drop-shadow-[0_6px_2px_rgba(0,0,0,0.25)]">
                                Aura
                            </h1>
                        </div>

                        {/* Download Sections Container */}
                        <div className="flex flex-col items-center gap-6 md:gap-12 w-full">

                            {/* Windows Section */}
                            <div className="flex flex-col items-center">
                                {/* Windows Icon */}
                                <img
                                    src={windowsLogo}
                                    alt="Windows Logo"
                                    className="w-16 h-16 md:w-20 md:h-20 !mb-6 !md:mb-10 object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                />

                                {/* Download Button */}
                                <Button
                                    onClick={() => navigate('/notify-me', { state: { system: "windows" } })}
                                    className="bg-[#F5F5ED] hover:bg-[#EBEBE0] text-black !px-10 !md:px-14 !py-1 !md:py-1 rounded-[15px] md:rounded-[20px] text-xl md:text-2xl font-semibold shadow-[0_8px_10px_0_rgba(0,0,0,0.25)] transition-all h-auto"
                                >
                                    Download
                                </Button>
                            </div>

                            {/* MacOS Section */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4 md:mb-6">
                                    <img
                                        src={appleLogo}
                                        alt="Apple Logo"
                                        className="w-4 h-4 md:w-6 md:h-6 object-contain"
                                    />
                                    <span className="text-lg md:text-lg font-semibold text-black text-center !py-2">
                                        For MacOS Coming Soon
                                    </span>
                                </div>

                                {/* Notify Me Button */}
                                <Button
                                    onClick={() => navigate('/notify-me', { state: { system: "macos" } })}
                                    className="bg-[#F5F5ED] hover:bg-[#EBEBE0] text-black !px-8 !md:px-10 !py-1 !md:py-1 rounded-[12px] md:rounded-[15px] text-base md:text-lg font-semibold shadow-[0_4px_2px_0_rgba(0,0,0,0.25)] transition-all h-auto"
                                >
                                    Notify Me
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GetYourAuraPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import NotifyMeForm from "../components/NotifyMeForm";
import auraBgLogo768 from "../assets/optimized/aura_bg_logo-768.webp";
import auraBgLogo1440 from "../assets/optimized/aura_bg_logo-1440.webp";
import auraBgLogo2160 from "../assets/optimized/aura_bg_logo-2160.webp";
import { motion } from "framer-motion";

const NotifyMePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-[#F0EEE6] relative overflow-hidden">
            {/* Background Logo - Exact same position as on the Aura page */}
            <div
                className="absolute pointer-events-none z-0 opacity-10"
                style={{
                    left: '0%',
                    top: '50%',
                    transform: 'translate(-20%, -50%)',
                    width: 'min(100vw, 800px)',
                }}
            >
                <img
                    src={auraBgLogo768}
                    srcSet={`${auraBgLogo768} 768w, ${auraBgLogo1440} 1440w, ${auraBgLogo2160} 2160w`}
                    sizes="min(100vw, 800px)"
                    alt=""
                    width="5488"
                    height="4052"
                    decoding="async"
                    className="w-full h-auto grayscale"
                />
            </div>

            {/* Content Container - Full Page */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-20 flex flex-col h-full w-full"
            >
                <NotifyMeForm onClose={() => navigate('/aura')} />
            </motion.div>
        </div>
    );
};

export default NotifyMePage;

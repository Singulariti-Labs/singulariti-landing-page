import React from "react";
import { useNavigate } from "react-router-dom";
import NotifyMeForm from "../components/NotifyMeForm";
import auraBgLogo from "../assets/aura_bg_logo.png";
import { motion } from "framer-motion";

const NotifyMePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-[#F0EEE6] relative overflow-hidden">
            {/* Background Logo - Exact same position as in get_your_aura.tsx */}
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

            {/* Content Container - Full Page */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-20 flex flex-col h-full w-full"
            >
                <NotifyMeForm onClose={() => navigate('/get-your-aura')} />
            </motion.div>
        </div>
    );
};

export default NotifyMePage;

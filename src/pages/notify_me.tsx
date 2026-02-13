import React from "react";
import { useNavigate } from "react-router-dom";
import NotifyMeForm from "../components/NotifyMeForm";
import auraBgLogo from "../assets/aura_bg_logo.png";

const NotifyMePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-white relative overflow-hidden">
            {/* Background Logo - Exact same position as in get_your_aura.tsx */}
            <div
                className="absolute pointer-events-none z-0"
                style={{
                    left: '10%',
                    top: '50%',
                    transform: 'translate(-25%, -50%)',
                    width: 'min(100vw, 800px)',
                    height: 'auto',
                }}
            >
                <img src={auraBgLogo} alt="" className="w-full h-auto" />
            </div>

            {/* Blur Backdrop Layer */}
            <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[6px]" />

            {/* Content Container - Full Page */}
            <div className="relative z-20 flex flex-col h-full w-full">
                <NotifyMeForm onClose={() => navigate('/get-your-aura')} />
            </div>
        </div>
    );
};

export default NotifyMePage;

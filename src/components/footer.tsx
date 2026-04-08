import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinWaitlistClick = () => {
    navigate("/get-your-aura");
  };

  return (
    <footer className="w-full bg-[#F0EEE6] border-t border-[#141413]/10 px-6 py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-medium">
        {/* Left – CTA */}
        <button
          onClick={handleJoinWaitlistClick}
          className="bg-[#141413] text-[#F0EEE6] px-8 py-3 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Get Your Aura
        </button>

        {/* Right – Copyright */}
        <p className="text-[#141413]/50 text-sm md:text-base">
          © 2026 Singulariti
        </p>
      </div>
    </footer>
  );
};

export default Footer;

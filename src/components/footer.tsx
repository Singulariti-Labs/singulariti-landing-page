import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#141413] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Huge Background Text (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="font-darker text-[15vw] md:text-[18vw] leading-none font-bold text-white/[0.04] whitespace-nowrap">
          Singulariti.
        </h1>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10 w-full flex flex-col justify-between h-full min-h-[300px] md:min-h-[400px]">
        {/* Top Section */}
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-16 md:gap-12">
          {/* Left Side: Mission */}
          <div className="max-w-md lg:max-w-lg text-center md:text-left">
            <h2 className="font-darker text-[22px] md:text-[28px] lg:text-[32px] leading-[1.1] font-medium text-[#F0EEE6] tracking-tight">
              AI Research & Products To Make Safe General Intelligence For Everyone.
            </h2>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-row gap-12 sm:gap-24 md:gap-24 lg:gap-32 items-start text-left">
            {/* Products Column */}
            <div>
              <h3 className="font-inter text-[18px] mb-8 text-[#F0EEE6] font-medium">Products</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => handleLinkClick("/get-your-aura")}
                    className="font-inter text-small text-[14px] text-white/60 hover:text-white transition-all duration-300 text-left"
                  >
                    Aura
                  </button>
                </li>
                <li>
                  <span className="font-inter text-small text-[14px] text-white/20 cursor-default">Coming Soon</span>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-inter text-[18px] mb-8 text-[#F0EEE6] font-medium">Company</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => handleLinkClick("/about")}
                    className="font-inter text-small text-[14px] text-[#F0EEE6]/60 hover:text-[#F0EEE6] transition-all duration-300 text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button className="font-inter text-small text-[14px] text-white/60 hover:text-white transition-all duration-300 text-left">Research</button>
                </li>
                <li>
                  <button className="font-inter text-small text-[14px] text-white/60 hover:text-white transition-all duration-300 text-left">Careers</button>
                </li>
                <li>
                  <button className="font-inter text-small text-[14px] text-white/60 hover:text-white transition-all duration-300 text-left">Safety</button>
                </li>
                <li>
                  <button className="font-inter text-small text-[14px] text-white/60 hover:text-white transition-all duration-300 text-left">Help</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center md:text-left">
          <p className="font-inter text-sm text-white/30">
            © 2026 Singulariti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full h-[10vh] lg:h-[10vh] bg-black flex items-center justify-between !px-8 sm:!px-12 lg:!px-16 xl:!px-24">
    {/* Left side - Join the Waitlist Button */}
    <button className="bg-white hover:bg-[#E2DFD0] text-black !px-6 !py-2 lg:!px-8 lg:!py-2 rounded-xl font-medium text-lg lg:text-3xl  transition-colors duration-200 shadow-lg">
      Join the Waitlist
    </button>
    
    {/* Right side - Copyright */}
    <p className="text-white text-sm lg:text-base font-medium">
      © 2025 Singulariti
    </p>
  </footer>
);

export default Footer;
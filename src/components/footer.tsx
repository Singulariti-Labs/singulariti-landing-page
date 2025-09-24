import React from "react";

const Footer: React.FC = () => {
  const handleJoinWaitlistClick = () => {
    window.location.href = "/join-waitlist";
  };

  return (
    <footer className="w-full h-[10vh] lg:h-[10vh] bg-black flex items-center justify-between !px-8 sm:!px-12 lg:!px-16 xl:!px-24"> 
      {/* Left side - Join the Waitlist Button */} 
      <button
  onClick={handleJoinWaitlistClick}
  className="
    !mt-8 !mb-8
    relative
    text-black font-medium text-lg lg:text-3xl
    !px-6 !py-2 lg:!px-8 lg:!py-2 rounded-xl
    bg-white/90
    border border-white/50
    shadow-inner shadow-black/10
    hover:brightness-105 hover:scale-105
    transition-all duration-200
  "
>
  Get Early Access
</button>
       
      {/* Right side - Copyright */} 
      <p className="text-white text-sm lg:text-base font-medium"> 
        © 2025 Singulariti 
      </p> 
    </footer>
  );
};

export default Footer;
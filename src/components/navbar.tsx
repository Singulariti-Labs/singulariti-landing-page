// Navbar.tsx - With navigation functionality
import React from "react";
import logo from "../assets/singulariti-logo.png";

const Navbar: React.FC = () => {
  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const handleFeaturesClick = () => {
    // Check if we're already on the home page
    if (window.location.pathname === "/") {
      // Scroll to the FeaturesSection1 element
      const featuresSection = document.getElementById("section4");
      if (featuresSection) {
        featuresSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      // Navigate to home page with hash to scroll to features
      window.location.href = "/#section4";
    }
  };

  const handleJoinWaitlistClick = () => {
    window.location.href = "/join-waitlist";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
      {/* Outer container to ensure centering */}
      <div className="w-full flex justify-center">
        {/* Inner container with max-width and proper centering */}
        <div className="w-full max-w-[1920px] !px-4 sm:!px-8 lg:!px-16 xl:!px-16 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Singulariti Logo" 
              className="h-16 md:h-14 lg:h-18 w-auto object-contain select-none cursor-pointer"
              onClick={handleHomeClick}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center !space-x-6 lg:!space-x-8 xl:!space-x-12">
            <button 
              onClick={handleHomeClick}
              className="text-xl text-gray-800 hover:text-black font-extrabold transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={handleFeaturesClick}
              className="text-xl text-gray-800 hover:text-black font-bold transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              Features
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center !gap-4">
            <button 
              onClick={handleJoinWaitlistClick}
              className="hidden md:block bg-white/60 hover:bg-[#E2DFD0]/50 text-black border-1 text-sm md:text-base lg:text-2xl font-medium !px-4 !py-2 lg:!px-6 lg:!py-1.5 rounded-lg transition-colors duration-200"
            >
              <span className="hidden lg:inline">Join Waitlist</span>
              <span className="lg:hidden">Start</span>
            </button>
            
            <button className="md:hidden !p-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
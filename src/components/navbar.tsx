import React, { useState } from "react";
import logo from "../assets/singulariti-logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    window.location.href = "/";
  };

  const handleFeaturesClick = () => {
    setIsMenuOpen(false);
    if (window.location.pathname === "/") {
      const featuresSection = document.getElementById("section4");
      if (featuresSection) {
        featuresSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = "/#section4";
    }
  };

  const handleAboutClick = () => {
    setIsMenuOpen(false);
    navigate("/about");
  };

  const handleJoinWaitlistClick = () => {
    setIsMenuOpen(false);
    navigate("/get-your-aura");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
      <div className="w-full flex justify-center relative">
        <div className="w-full max-w-[1920px] !px-4 sm:!px-8 lg:!px-16 xl:!px-16 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex items-center z-20">
            <img
              src={logo}
              alt="Singulariti Logo"
              className="h-16 md:h-14 lg:h-18 w-auto object-contain select-none cursor-pointer"
              onClick={handleHomeClick}
            />
          </div>

          {/* Navigation Links - Centered (Hidden on Mobile) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center !space-x-6 lg:!space-x-8 xl:!space-x-12 z-10">
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
            <button
              onClick={handleAboutClick}
              className="text-xl text-gray-800 hover:text-black font-bold transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              About
            </button>
          </div>

          {/* Right side - Join Waitlist & Mobile Menu Toggle */}
          <div className="flex items-center !gap-2 md:!gap-4 z-20">
            <Button
              onClick={handleJoinWaitlistClick}
              variant="outline"
              size="lg"
              className="bg-white/60 hover:bg-[#E2DFD0] text-black border-1 text-lg sm:text-xl md:text-xl lg:text-2xl font-medium !px-3 !py-1.5 sm:!px-4 sm:!py-2 lg:!px-6 lg:!py-1.5 rounded-lg transition-colors duration-200"
            >
              <span className="hidden sm:inline">Get Your Aura</span>
              <span className="sm:hidden">Aura</span>
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden !p-2 text-gray-800 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col !p-4 !space-y-4">
              <button
                onClick={handleHomeClick}
                className="text-left text-xl font-bold text-gray-800 hover:text-black !py-2 border-b border-gray-50"
              >
                Home
              </button>
              <button
                onClick={handleFeaturesClick}
                className="text-left text-xl font-bold text-gray-800 hover:text-black !py-2 border-b border-gray-50"
              >
                Features
              </button>
              <button
                onClick={handleAboutClick}
                className="text-left text-xl font-bold text-gray-800 hover:text-black !py-2"
              >
                About
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../assets/singulariti-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleJoinWaitlistClick = () => {
    setIsMenuOpen(false);
    navigate("/get-your-aura");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F0EEE6] w-full">
      <div className="w-full h-14 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={handleHomeClick}
        >
          <img
            src={logo}
            alt="Singulariti Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={handleHomeClick}
            className="text-[#141413] text-[15px] font-medium opacity-70 hover:opacity-100 transition-all duration-200"
          >
            Home
          </button>

          <button
            onClick={handleJoinWaitlistClick}
            className="bg-[#141413] text-[#F0EEE6] px-4 py-2 rounded-[5px] text-[14px] font-medium hover:bg-[#141413]/60 hover:text-[#F0EEE6] transition-all duration-200"
          >
            Get Your Aura
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-[#141413]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#F0EEE6] px-6 py-6 flex flex-col gap-4 shadow-xl"
          >
            <button
              onClick={handleHomeClick}
              className="text-[#141413] text-lg font-medium opacity-70 hover:opacity-100 text-left"
            >
              Home
            </button>
            <button
              onClick={handleJoinWaitlistClick}
              className="bg-[#141413] text-[#F0EEE6] w-full py-2 rounded-xl text-md font-medium"
            >
              Get Your Aura
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

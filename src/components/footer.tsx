import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const handleJoinWaitlistClick = () => {
    console.log("Join waitlist clicked");
  };

  return (
    <footer
      className="
        relative w-full h-[10vh] lg:h-[10vh]
        flex items-center justify-between
        !px-8 sm:!px-12 lg:!px-16 xl:!px-24
        /* --- white glass --- */
        bg-white/60
        backdrop-blur-2xl
        border-b border-white/20
        /* shadow on TOP edge */
        shadow-[0_-4px_5px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.6)]
      "
    >
      {/* Left – CTA */}
      <Button
        onClick={handleJoinWaitlistClick}
        variant="outline"
        className="relative z-10
             !mt-8 !mb-8
             text-black font-medium text-lg lg:text-2xl
             !px-6 !py-2 lg:!px-6 lg:!py-5 rounded-xl
             bg-white/90
             border border-black/50
             shadow-inner shadow-black/10
             hover:brightness-105 hover:scale-102 hover:bg-[#E2DFD0]
             transition-all duration-200"
      >
        Get Early Access
      </Button>

      {/* Right – Copyright */}
      <p className="relative z-10 text-black text-sm lg:text-base font-medium drop-shadow-sm">
        © 2025 Singulariti
      </p>
    </footer>
  );
};

export default Footer;

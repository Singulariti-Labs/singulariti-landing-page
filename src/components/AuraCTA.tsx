import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import windowsLogo from "../assets/windows_logo.png";

const AuraCTA: React.FC = () => (
  <section
    className="relative isolate my-20 overflow-hidden rounded-[28px] bg-[#141413] px-6 py-20 text-center text-white shadow-[0_28px_70px_-48px_rgba(80,42,116,0.5)] sm:px-10 md:my-28 md:rounded-[36px] md:py-28 lg:my-32 lg:py-32"
    aria-labelledby="aura-cta-title"
  >
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(183,152,213,0.58),rgba(155,111,192,0.16)_42%,transparent_70%)]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-[#9b6fc0]/15 blur-[80px]"
      aria-hidden="true"
    />

    <div className="mx-auto flex max-w-[920px] flex-col items-center">
      <div className="mb-7 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[7%] px-4 py-2 font-inter text-sm font-medium text-white/80">
        <img src={windowsLogo} alt="" className="h-4 w-4 invert" />
        Available on Windows
      </div>

      <h2
        id="aura-cta-title"
        className="font-inter text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.055em]"
      >
        Aura is Live Now on Windows
      </h2>

      <Link
        to="/aura"
        className="mt-10 inline-flex min-h-13 items-center justify-center gap-2 rounded-[10px] bg-white px-7 font-inter text-base font-semibold text-[#141413] transition-colors duration-200 hover:bg-[#eee7f7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-12"
        aria-label="Get Aura for Windows"
      >
        Get Your Aura
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </Link>
    </div>
  </section>
);

export default AuraCTA;

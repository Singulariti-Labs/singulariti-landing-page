import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 z-20 inline-flex items-center text-black/70 hover:text-black transition-colors duration-200 backdrop-blur-sm bg-white/30 !px-4 !py-2 rounded-full"
      >
        <svg
          className="w-5 h-5 !mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>

      {/* Heading Section */}
      <div className="w-full text-center !pt-24 !px-4 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-medium text-black !mb-8 drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]">
          Singulariti
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex items-start justify-center !px-4 !pb-24 !pt-4 relative z-10">
        <div className="w-full max-w-[50%]">
          <div className="!space-y-8 text-black text-base md:text-xl font-medium leading-relaxed">
            <p>
              Every great leap in human history began with a new way to connect — not just with each other,
              but with the machines we create.
            </p>

            <p>
              In the early days, when computers were first adopted by companies, interaction with machines happened entirely
              through hardware — buttons, switches, and blinking lights. Then came the Operating System, and suddenly,
              machines could understand commands. The Graphical User Interface followed,
              turning code into clicks and creating a new layer of interaction — software.
            </p>

            <p>
              Then came the Internet era. In its early days, the internet was vast, chaotic, and unorganized — until
              Google gave us a way to talk to it through a simple search box. Soon after, browsers became the interface
              to explore the digital universe. Each era of technology found its way to the masses only after a new,
              simpler way of interaction was born.
            </p>

            <p>Now, we stand at the dawn of another revolution — Artificial Intelligence.</p>

            <p>
              But just like every great technology before it, AI too needs a new interface —
              a completely new experience for humans to interact, understand, and create with it.
            </p>

            <p>At Singulariti, we believe that the future is Personal AI.</p>

            <p>
              For AI to reach the masses, it has to become personal — woven into the lives of every person,
              every home, every hand. The next high-stakes conversation the world will have won't be about AI itself
              — it will be about Personal Assistant. An AI that belongs to you, understands you, evolves with you,
              and becomes an extension of how you think, create, and live.
            </p>

            <p>
              We're building towards a future where everyone has their own Personal Assistant — just as we have our own
              computers & smartphones. But to make this vision real, it's not enough to build software or hardware alone.
              To make Personal Assistant a reality, we must build a complete ecosystem — one where every piece falls perfectly
              into place, igniting the domino effect of global adoption.
            </p>

            <p>
              At Singulariti we are building the foundation for the next era of technology, where the experience of how humans
              and machines interact will change forever.
            </p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM ELLIPSE (half visible) ===== */}
      <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[110vw] aspect-[16/5] rounded-[50%] blur-[60px] opacity-80"
        style={{
          background:
            'linear-gradient(90deg, #B04AFF 0%, rgb(125, 62, 225) 50%, #B04AFF 100%)',
        }}
      />

      {/* ===== full-bleed glass footer ===== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[3vh] lg:h-[5vh] flex items-center justify-center bg-white/10 backdrop-blur-[200px] border-t border-white/20 shadow-lg">
        <p className="text-black font-medium text-md lg:text-lg tracking-wide drop-shadow-sm">
          © 2025 Singulariti
        </p>
      </div>
    </div>
  );
};

export default About;

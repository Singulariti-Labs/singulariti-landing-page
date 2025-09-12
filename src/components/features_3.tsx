import React from "react";
import leftCardImg from "../assets/code_fix_feat.png";
import rightCardImg from "../assets/tickets_feat.png";

const FeaturesSection3: React.FC = () => (
  <section className="relative w-full min-h-[130dvh] bg-white !px-4 sm:!px-8 lg:!px-16 xl:!px-24 !py-16 lg:!py-24">
    <div className="!mx-auto !max-w-7xl w-full">
      
      {/* -------------------------------------------------- */}
      {/*  CENTERED HEADING                                 */}
      {/* -------------------------------------------------- */}
      <div className="text-center !mb-16 lg:!mb-20">
        <h2 className="text-4xl lg:text-6xl xl:text-6xl font-medium text-gray-900 !mb-4 drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
          Singulariti
        </h2>
        <p className="text-xl lg:text-2xl text-black/60 max-w-3xl !mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]" style={{transform: 'skew(-15deg, 0)'}}>
            For
        </p>
        <p className="text-2xl lg:text-4xl text-black max-w-3xl !mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
          Smart Suggestions, Auto Browsing & Instant Shopping
        </p>
      </div>

      {/* -------------------------------------------------- */}
      {/*  TWO COLUMN CARDS LAYOUT                          */}
      {/* -------------------------------------------------- */}
      <div className="grid gap-12 lg:grid-cols-2 items-center w-full">
        
        {/* LEFT CARD */}
        <div className="
          w-full
          max-w-sm
          lg:max-w-xl
          !mx-auto 
          lg:!mx-0
          lg:!justify-self-center
          rounded-2xl
          bg-gradient-to-br
          from-white
          to-[#F5F5ED]
          backdrop-blur-lg
          border
          border-gray-200
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          !px-2
          !py-3
          lg:!px-2
          lg:!py-3
          text-center
        ">
          {/* GIF/Image */}
          <div className="!mb-6 lg:!mb-8">
            <img
              src={leftCardImg}
              alt="Left Card"
              className="w-full h-54 lg:h-84 bg-gray-100 rounded-xl !mx-auto flex items-center justify-center"
            />
          </div>
          
          {/* Title */}
          <h3 className="text-lg lg:text-xl xl:text-2xl font-medium text-black !mb-4">
            Always One Step Ahead
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed">
            It notices what you might miss and nudges you with what works best, before you even think to ask.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="
          w-full 
          max-w-sm
          lg:max-w-xl 
          !mx-auto 
          lg:!mx-0
          lg:!justify-self-center
          rounded-2xl
          bg-gradient-to-br
          from-white
          to-[#F5F5ED]
          backdrop-blur-lg
          border
          border-gray-200
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          !px-2
          !py-3
          lg:!px-2
          lg:!py-3
          text-center
        ">
          {/* GIF/Image */}
          <div className="!mb-6 lg:!mb-8">
            <img
              src={rightCardImg}
              alt="Right Card"
              className="w-full h-54 lg:h-84 bg-gray-100 rounded-xl !mx-auto flex items-center justify-center"
            />
           
          </div>
          
          {/* Title */}
          <h3 className="text-lg lg:text-xl xl:text-2xl font-medium text-black !mb-4">
            Smarter Browsing, Instant Results.
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm lg:text-base xl:text-lg text-gray-800 leading-relaxed">
            Ask for anything, get the answer instantly, and with a single step book, buy, or move forward without losing a second.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection3;
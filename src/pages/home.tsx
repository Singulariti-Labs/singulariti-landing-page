import React from "react";
import AuraCTA from "../components/AuraCTA";
import HeroSection from "../components/hero";
import ProductJourney from "../components/ProductJourney";
import Section2 from "../components/section2";
import Section3 from "../components/section3";

const HomePage: React.FC = () => (
  <>
    <div className="content-container">
      <HeroSection />
    </div>
    <div className="home-white-transition">
      <div className="content-container flow-root">
        <Section2 />
        <Section3 />
      </div>
      <ProductJourney />
      <div className="content-container flow-root">
        <AuraCTA />
      </div>
    </div>
  </>
);

export default HomePage;

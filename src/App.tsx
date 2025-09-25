import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import Highlight from './components/highlight';
import Aura from './components/aura';
import FeaturesSection1 from './components/features_1';
import FeaturesSection2 from './components/features_2';
import FeaturesSection3 from './components/features_3';
import FeaturesSection4 from './components/features_4';
import OneLiner from './components/oneliner';
import Footer from './components/footer';
import JoinWaitlist from './pages/join';
import RoadMap from './pages/road-map';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Highlight />
              <Aura />
              <FeaturesSection1 />
              <FeaturesSection2 />
              <FeaturesSection3 />
              <FeaturesSection4 />
              <OneLiner />
              <Footer />
            </>
          }
        />

        {/* New page: /join-waitlist */}
        <Route path="/join-waitlist" element={<JoinWaitlist />} />
        <Route path="/singulariti-road-map" element={<RoadMap />}/>
      </Routes>
    </>
  );
}

export default App;
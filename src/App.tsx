import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
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
import About from "./pages/about";
import GetYourAuraPage from "./pages/get_your_aura";
import NotifyMePage from "./pages/notify_me";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/notify-me'];

  return (
    <div className="content-container">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
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
        <Route path="/singulariti-road-map" element={<RoadMap />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-your-aura" element={<GetYourAuraPage />} />
        <Route path="/notify-me" element={<NotifyMePage />} />
      </Routes>
    </div>
  );
}

export default App;
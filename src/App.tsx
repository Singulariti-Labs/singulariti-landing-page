import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import Section2 from './components/section2';
import Section3 from './components/section3';
import AuraIntro from './components/AuraIntro';
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
    <div className="flex flex-col min-h-screen bg-[#F0EEE6]">
      {!hideNavbarRoutes.includes(location.pathname) && (
        <header className="sticky top-0 z-50 w-full bg-[#F0EEE6]">
          <div className="content-container">
            <Navbar />
          </div>
        </header>
      )}

      <main className="content-container flex-grow">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Section2 />
                <Section3 />
                <AuraIntro />
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
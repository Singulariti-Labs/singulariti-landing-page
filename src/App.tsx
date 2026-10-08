import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import Section2 from './components/section2';
import Section3 from './components/section3';
import ProductJourney from './components/ProductJourney';
import AuraCTA from './components/AuraCTA';
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
        <header className="nav-glass sticky top-0 z-50 w-full">
          <div className="content-container">
            <Navbar />
          </div>
        </header>
      )}

      <main className={location.pathname === '/' ? 'w-full flex-grow' : 'content-container flex-grow'}>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <div className="content-container">
                  <HeroSection />
                </div>
                <div className="home-white-transition">
                  <div className="content-container flow-root">
                    <Section2 />
                    <Section3 />
                    <ProductJourney />
                    <AuraCTA />
                  </div>
                </div>
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

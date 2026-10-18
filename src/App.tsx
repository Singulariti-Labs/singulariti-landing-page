import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';

const HomePage = lazy(() => import('./pages/home'));
const JoinWaitlist = lazy(() => import('./pages/join'));
const RoadMap = lazy(() => import('./pages/road-map'));
const About = lazy(() => import('./pages/about'));
const GetYourAuraPage = lazy(() => import('./pages/get_your_aura'));
const NotifyMePage = lazy(() => import('./pages/notify_me'));

const RouteFallback = () => (
  <div
    className="min-h-[50dvh] w-full bg-[#F0EEE6]"
    aria-label="Loading page"
    role="status"
  />
);

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

      <main className={['/', '/aura'].includes(location.pathname) ? 'w-full flex-grow' : 'content-container flex-grow'}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/join-waitlist" element={<JoinWaitlist />} />
            <Route path="/singulariti-road-map" element={<RoadMap />} />
            <Route path="/about" element={<About />} />
            <Route path="/aura" element={<GetYourAuraPage />} />
            <Route path="/get-your-aura" element={<Navigate to="/aura" replace />} />
            <Route path="/notify-me" element={<NotifyMePage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;

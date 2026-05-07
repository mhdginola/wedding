import { useState, useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

import LoadingScreen from './components/LoadingScreen';
import CoverPage from './components/CoverPage';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';

import Hero from './sections/Hero';
import GuestGreeting from './sections/GuestGreeting';
import BrideGroom from './sections/BrideGroom';
import EventDetails from './sections/EventDetails';
import QuoteBible from './sections/QuoteBible';
import GiftRegistry from './sections/GiftRegistry';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coverOpen, setCoverOpen] = useState(false);

  useScrollAnimation(coverOpen);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    setCoverOpen(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!coverOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [coverOpen]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-white">
      {!coverOpen && <CoverPage onOpen={handleOpenInvitation} />}

      <div
        className={`transition-opacity duration-1000 ${
          coverOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <Navbar />
        <MusicPlayer canPlay={coverOpen} />

        <main>
          <Hero />
          <GuestGreeting />
          <BrideGroom />
          <EventDetails />
          <QuoteBible />
          <Gallery />
          <GiftRegistry />
        </main>

        <Footer />
      </div>
    </div>
  );
}

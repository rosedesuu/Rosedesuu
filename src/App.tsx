import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesCatalog } from './components/ServicesCatalog';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { SecurityGuarantees } from './components/SecurityGuarantees';
import { VouchesShowcase } from './components/VouchesShowcase';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { GameFilter, PilotService } from './types';
import { Swords } from 'lucide-react';

export default function App() {
  const [activeGame, setActiveGame] = useState<GameFilter>('all');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<PilotService | null>(null);
  const [calculatedOrder, setCalculatedOrder] = useState<{
    game: 'genshin' | 'wuthering';
    server: string;
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    includesStream: boolean;
    isPriority: boolean;
    includesAudit: boolean;
  } | null>(null);

  const handleBookService = (service: PilotService) => {
    setSelectedService(service);
    setCalculatedOrder(null);
    setIsBookingOpen(true);
  };

  const handleProceedWithCalculation = (orderData: {
    game: 'genshin' | 'wuthering';
    server: string;
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    includesStream: boolean;
    isPriority: boolean;
    includesAudit: boolean;
  }) => {
    setCalculatedOrder(orderData);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedService(null);
    setCalculatedOrder(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-neutral-100 antialiased selection:bg-cyan-500 selection:text-black">
      
      {/* Top Bar Navigation (Adheres to Section 2 Top Bar Contract) */}
      <Header onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          activeGame={activeGame}
          onSelectGame={(game) => {
            setActiveGame(game);
            const servicesEl = document.getElementById('services');
            servicesEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Services Catalog with Filter */}
        <ServicesCatalog
          selectedGame={activeGame}
          onSelectGame={setActiveGame}
          onBookService={handleBookService}
        />

        {/* Interactive Price & Schedule Calculator */}
        <InteractiveCalculator
          onProceedWithCalculation={handleProceedWithCalculation}
        />

        {/* Account Safety & Security Protocols */}
        <SecurityGuarantees />

        {/* Attributable Client Vouches */}
        <VouchesShowcase />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenBooking={handleOpenGeneralBooking} />

      {/* Floating Fast Booking Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleOpenGeneralBooking}
          className="px-4 py-2.5 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-300 active:bg-cyan-500 transition-all flex items-center gap-2 hover:scale-105"
          title="Book a Pilot Session"
        >
          <Swords className="w-3.5 h-3.5" />
          <span>Book a Pilot</span>
        </button>
      </div>

      {/* Booking & Order Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
        calculatedOrder={calculatedOrder}
      />

    </div>
  );
}

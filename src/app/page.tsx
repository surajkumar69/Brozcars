'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import FleetSection from '@/components/fleet/FleetSection';
import WhyChooseUs from '@/components/why-us/WhyChooseUs';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import LocationSection from '@/components/location/LocationSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';
import FloatingWhatsApp from '@/components/whatsapp/FloatingWhatsApp';
import BookingModal from '@/components/booking/BookingModal';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (carId?: string) => {
    setSelectedCarId(carId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedCarId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-yellow-400 selection:text-black">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* B. About Brozcars */}
        <About />

        {/* C. Our Premium Fleet (Strict 9 Vehicles) */}
        <FleetSection onOpenBooking={handleOpenBooking} />

        {/* D. Why Choose Brozcars */}
        <WhyChooseUs />

        {/* E. How It Works */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* F. Location & Map */}
        <LocationSection />

        {/* G. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp */}
      <FloatingWhatsApp />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        carId={selectedCarId}
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PICKUP_LOCATIONS } from '@/lib/constants';

interface HeroProps {
  onOpenBooking: (carId?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [pickupLoc, setPickupLoc] = useState(PICKUP_LOCATIONS[0]);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Hero Image with Automotive Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Brozcars Mahindra Thar 4x4 Self Drive Car in Guwahati Assam"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000 opacity-60 filter brightness-[0.75] contrast-[1.1]"
        />
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-[#09090b]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_90%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        {/* Luxury Crest & Badge */}
        <div className="flex flex-col items-center gap-3.5 mb-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-yellow-400/80 shadow-2xl shadow-yellow-500/30 bg-black/90 group hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.jpg"
              alt="Brozcars Rental Official Emblem"
              fill
              sizes="96px"
              className="object-cover scale-110"
              priority
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-yellow-500/10">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Khanapara, Guwahati • Drive the Dream</span>
          </div>
        </div>

        {/* Master Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-mono uppercase max-w-5xl">
          YOUR JOURNEY. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 yellow-glow">
            YOUR RULES.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl font-light leading-relaxed">
          Experience the freedom of self-drive car rentals with Brozcars in Guwahati.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#fleet"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Explore Our Cars</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-yellow-400 font-bold text-sm uppercase tracking-wider border border-zinc-700/80 hover:border-yellow-500/50 flex items-center justify-center gap-3 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-yellow-400" />
            <span>Book Your Car</span>
          </button>
        </div>

        {/* Quick Trip Planner Bar */}
        <div className="mt-14 w-full max-w-5xl glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl border border-zinc-800">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-yellow-400 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Pickup Location
              </label>
              <select
                value={pickupLoc}
                onChange={(e) => setPickupLoc(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              >
                {PICKUP_LOCATIONS.map((loc, i) => (
                  <option key={i} value={loc} className="bg-zinc-900 text-zinc-200">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-yellow-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-yellow-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Return Date
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02] shadow-md shadow-yellow-500/20"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
            <span>Strict 9-Car Verified Fleet</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
            <span>Khanapara Gateway Pickup</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
            <span>Zero Hidden Rental Surcharges</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
            <span>Instant WhatsApp Confirmation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

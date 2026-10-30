'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/constants';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-yellow-500/20 py-2 px-4 text-xs font-medium text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-400 font-semibold tracking-wide uppercase text-[10px] bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">Khanapara, Guwahati</span>
            <span className="hidden sm:inline text-zinc-400">•</span>
            <span className="hidden sm:inline text-zinc-300">Brozcars Rental | "Drive the Dream"</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${SITE_SETTINGS.phone.replace(/[^0-9]/g, '')}`} 
              className="hover:text-yellow-400 flex items-center gap-1.5 transition-colors font-medium text-zinc-200"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span>{SITE_SETTINGS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-2.5'
            : 'bg-[#09090b]/80 backdrop-blur-sm border-b border-zinc-900 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with official Brozcars Rental Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-yellow-400/60 shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform bg-black shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Brozcars Rental Official Logo"
                fill
                sizes="48px"
                className="object-cover object-center scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-mono flex items-center">
                BROZ<span className="text-yellow-400">CARS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-yellow-400/90 font-bold -mt-0.5">
                Drive the Dream.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="text-zinc-200 hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/#fleet" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Our Cars
            </Link>
            <Link href="/#how-it-works" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              How It Works
            </Link>
            <Link href="/#location" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Location
            </Link>
            <Link href="/#contact" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_SETTINGS.phone.replace(/[^0-9]/g, '')}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-all text-xs font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-yellow-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-yellow-400 text-black text-xs font-bold tracking-wide"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c0c0e] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 font-medium text-sm">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-1.5 px-2 rounded-md hover:bg-zinc-900/60"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-1.5 px-2 rounded-md hover:bg-zinc-900/60"
              >
                About
              </Link>
              <Link
                href="/#fleet"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-1.5 px-2 rounded-md hover:bg-zinc-900/60"
              >
                Our Cars (9 Fleet Models)
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-1.5 px-2 rounded-md hover:bg-zinc-900/60"
              >
                How It Works
              </Link>
              <Link
                href="/#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-1.5 px-2 rounded-md hover:bg-zinc-900/60"
              >
                Location & Map
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-1.5 px-2 rounded-md hover:bg-zinc-900/60"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
              <a
                href={`tel:${SITE_SETTINGS.phone.replace(/[^0-9]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 font-semibold text-xs"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Call +91 7086100215</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking?.();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book Your Car</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

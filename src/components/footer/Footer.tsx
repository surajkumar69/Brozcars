'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Shield, ArrowUp } from 'lucide-react';
import { SITE_SETTINGS, INITIAL_CARS } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400/60 shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform bg-black shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Brozcars Rental Official Crest Logo"
                  fill
                  sizes="56px"
                  className="object-cover object-center scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-mono flex items-center">
                  BROZ<span className="text-yellow-400">CARS</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-yellow-400 font-bold -mt-0.5">
                  Drive the Dream.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              Brozcars is Khanapara, Guwahati’s premier self-drive car rental business. We provide meticulously sanitized, verified cars with transparent pricing for trips across Assam, Meghalaya, and the Northeast.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-yellow-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Everyday: 7:00 AM – 11:00 PM</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-yellow-400 transition-colors">
                  About Brozcars
                </Link>
              </li>
              <li>
                <Link href="/#fleet" className="hover:text-yellow-400 transition-colors">
                  Our Fleet (9 Cars)
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-yellow-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-yellow-400 transition-colors">
                  Location & Map
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-yellow-400 hover:underline transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Available Fleet Models (Strict List) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Available Fleet
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs font-medium">
              {INITIAL_CARS.map((car) => (
                <li key={car.id}>
                  <Link
                    href={`/cars/${car.id}`}
                    className="hover:text-yellow-400 transition-colors flex items-center justify-between"
                  >
                    <span>{car.name}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">₹{car.pricePerDay}/d</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{SITE_SETTINGS.addressFull}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href={`tel:${SITE_SETTINGS.phone}`} className="hover:text-yellow-400 transition-colors font-mono font-bold text-zinc-200">
                  {SITE_SETTINGS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href={`mailto:${SITE_SETTINGS.email}`} className="hover:text-yellow-400 transition-colors break-all">
                  {SITE_SETTINGS.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${SITE_SETTINGS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-yellow-400 hover:text-white hover:border-yellow-400/50 transition-colors text-[11px]"
                >
                  <span>WhatsApp: +91 7086100215</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Brozcars. All rights reserved. Self Drive Car Rentals, Khanapara, Guwahati, Assam. "Drive the Dream."</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MapPin, Sparkles, Award, Clock, Fuel, CheckCircle2 } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#09090b] relative overflow-hidden border-b border-zinc-900">
      {/* Decorative ambient yellow glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column - AI Generated Car Shot */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl glass-card group bg-zinc-950">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                <Image
                  src="/images/cars/toyota-innova-crysta.jpg"
                  alt="Brozcars Toyota Innova Crysta self drive Guwahati"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Stat Pill */}
              <div className="p-4 sm:p-5 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">Location Hub</p>
                  <p className="text-white font-bold text-sm">Khanapara, Guwahati, Assam</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            </div>

            {/* Floating Verified Badge */}
            <div className="absolute -top-4 -right-4 bg-zinc-900 border border-yellow-400/40 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center font-black text-black">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium">Brozcars Fleet</p>
                <p className="text-sm font-bold text-white">100% Verified Fleet</p>
              </div>
            </div>
          </div>

          {/* Right Column - Brand Story & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Brozcars</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight uppercase">
              Discover Freedom with <span className="text-yellow-400">Brozcars</span>
            </h2>

            <p className="mt-6 text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
              Welcome to <span className="text-white font-medium">Brozcars</span>, your trusted self-drive car rental service based strategically in <span className="text-yellow-400 font-medium">Khanapara, Guwahati, Assam</span>. We offer a curated fleet of reliable, meticulously maintained vehicles tailored for customers looking for convenient, independent, and premium travel across Guwahati, Assam, Meghalaya, and the Northeast.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed text-sm sm:text-base font-light">
              Whether you are planning a scenic weekend road trip to the misty hills of Shillong and Cherrapunji, an expedition to Kaziranga National Park, or need a comfortable executive ride for business meetings in Guwahati, Brozcars puts you behind the wheel with total freedom, privacy, and peace of mind.
            </p>

            {/* Key Advantages Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Prime Khanapara Location</h4>
                  <p className="text-xs text-zinc-400 mt-1">Conveniently situated right at the Guwahati-Shillong expressway corridor.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Fully Verified 9-Car Fleet</h4>
                  <p className="text-xs text-zinc-400 mt-1">Hatchbacks, Sedans, 4x4 Thar, and 7-seater Innova Crysta with genuine specs.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Transparent Rental Terms</h4>
                  <p className="text-xs text-zinc-400 mt-1">Best rates guaranteed, zero hidden surcharges, and refundable security deposits.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct WhatsApp Booking</h4>
                  <p className="text-xs text-zinc-400 mt-1">No complicated paperwork or delays—connect instantly with our team.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Highlight */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 uppercase font-semibold">Service Hours</p>
                  <p className="text-xs font-bold text-white">{SITE_SETTINGS.openingHours}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-400 uppercase font-semibold">Safety Assurance</p>
                  <p className="text-xs font-bold text-white">Inspected & Sanitized</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

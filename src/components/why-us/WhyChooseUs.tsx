'use client';

import React from 'react';
import { Car, CalendarCheck, Zap, MapPin, Headphones, Sparkles, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6 text-yellow-400" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-yellow-400" />,
  Zap: <Zap className="w-6 h-6 text-yellow-400" />,
  MapPin: <MapPin className="w-6 h-6 text-yellow-400" />,
  Headphones: <Headphones className="w-6 h-6 text-yellow-400" />
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#09090b] relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Brozcars Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            Why Choose <span className="text-yellow-400">Brozcars?</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            We focus on convenience, vehicle hygiene, transparent pricing, and seamless road support for every self-drive customer in Guwahati.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl glass-card border border-zinc-800/80 hover:border-yellow-400/40 transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-yellow-500/30 flex items-center justify-center mb-6 shadow-inner">
                  {ICONS_MAP[item.icon] || <Check className="w-6 h-6 text-yellow-400" />}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-semibold text-yellow-400">
                <Check className="w-4 h-4" />
                <span>Verified Brozcars Service</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { Sparkles, ArrowRight, Car, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

const STEP_ICONS = [
  <Car key="1" className="w-6 h-6 text-yellow-400" />,
  <Calendar key="2" className="w-6 h-6 text-yellow-400" />,
  <Send key="3" className="w-6 h-6 text-yellow-400" />,
  <CheckCircle2 key="4" className="w-6 h-6 text-yellow-400" />
];

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            How It <span className="text-yellow-400">Works</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Rent your self-drive car in Khanapara, Guwahati in just 4 quick and transparent steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-yellow-400/40 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-yellow-500/20 flex items-center justify-center">
                    {STEP_ICONS[index]}
                  </div>
                  <span className="text-3xl font-black font-mono text-zinc-800 group-hover:text-yellow-400/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-mono">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs font-medium text-yellow-400">
                <span>Step {item.step}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Start Your Booking Request</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>
    </section>
  );
}

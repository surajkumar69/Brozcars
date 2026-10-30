'use client';

import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Sparkles, Phone, Clock } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/constants';

export default function LocationSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Khanapara, Guwahati, Assam 781022'
  )}`;

  return (
    <section id="location" className="py-24 bg-[#09090b] relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prime Guwahati Hub</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            Our Location in <span className="text-yellow-400">Khanapara</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Strategically located at Khanapara—the premier gateway between Guwahati city and the scenic Shillong & Assam highway network.
          </p>
        </div>

        {/* Map & Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-zinc-800">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">Brozcars Khanapara</h3>
                  <p className="text-xs text-yellow-400">Self Drive Car Rentals Hub</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Office Address</span>
                  <p className="text-zinc-200 font-medium">
                    {SITE_SETTINGS.addressFull}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Operating Hours</span>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>{SITE_SETTINGS.openingHours}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <span className="text-zinc-500 text-xs uppercase font-semibold block mb-1">Direct Helpline</span>
                  <div className="flex items-center gap-2 text-zinc-300 font-mono">
                    <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                    <a href={`tel:${SITE_SETTINGS.phone}`} className="hover:text-yellow-400 transition-colors">
                      {SITE_SETTINGS.phone}
                    </a>
                  </div>
                </div>

                {/* Transit Proximity Info */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  <span className="text-zinc-500 text-xs uppercase font-semibold block mb-2">Transit Proximity</span>
                  
                  <div className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-zinc-900/60 text-zinc-300">
                    <span>Guwahati Airport (LGBI)</span>
                    <span className="font-semibold text-yellow-400 font-mono">~45-60 Mins Delivery</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-zinc-900/60 text-zinc-300">
                    <span>Guwahati Railway Station</span>
                    <span className="font-semibold text-yellow-400 font-mono">~20 Mins Delivery</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-zinc-900/60 text-zinc-300">
                    <span>Shillong Highway (GS Road)</span>
                    <span className="font-semibold text-emerald-400 font-mono">Instant Access</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Get Directions On Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl min-h-[380px] sm:min-h-[460px] relative bg-zinc-950">
            <iframe
              title="Brozcars Khanapara Guwahati Google Map"
              src="https://maps.google.com/maps?q=Khanapara%2C%20Guwahati%2C%20Assam&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
            />
            {/* Overlay tag */}
            <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-yellow-400 flex items-center gap-2 shadow-lg">
              <Compass className="w-3.5 h-3.5" />
              <span>Brozcars Pickup Hub</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hi Brozcars! I am interested in renting a self-drive car in Guwahati. Could you please share available cars and rates?'
  );
  const waUrl = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-zinc-900/95 border border-yellow-500/30 text-white text-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Need instant assistance?</span>
          <span className="font-bold text-yellow-400">Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-500 hover:text-zinc-300 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Brozcars"
        className="relative group p-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-yellow-400/80"
      >
        {/* Subtle Ping Animation */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
        </span>

        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      </a>
    </div>
  );
}

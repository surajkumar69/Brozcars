'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Fuel, Settings2, Calendar, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Car } from '@/types';
import { SITE_SETTINGS } from '@/lib/constants';

interface CarCardProps {
  car: Car;
  onOpenBooking: (carId: string) => void;
}

export default function CarCard({ car, onOpenBooking }: CarCardProps) {
  const whatsappUrl = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(
    `Hi Brozcars! I am interested in renting the ${car.name}. Could you please let me know its availability?`
  )}`;

  return (
    <div className="group relative rounded-2xl glass-card overflow-hidden border border-zinc-800/80 hover:border-yellow-400/50 transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container with Uniform Frame & Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
        <Image
          src={car.image}
          alt={`Brozcars AI Generated ${car.name} self drive rental in Guwahati Assam`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain object-center p-1 sm:p-2 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700/80 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
            {car.category}
          </span>
        </div>

        {/* Status Pill */}
        <div className="absolute top-3 right-3">
          {car.isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold text-amber-400">
              Booked
            </span>
          )}
        </div>

        {/* Quick WhatsApp pill */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Quick WhatsApp Enquiry"
          className="absolute bottom-3 right-3 p-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white backdrop-blur-md shadow-md transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors font-mono">
              {car.name}
            </h3>
            <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5 font-light">
              {car.tagline || car.description}
            </p>
          </div>

          {/* Verified Specifications Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 my-3 text-[11px]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Users className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span className="truncate">{car.seatingCapacity} Seats</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Fuel className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span className="truncate">{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Settings2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span className="truncate">{car.transmission}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 grid grid-cols-2 gap-2.5">
          <Link
            href={`/cars/${car.id}`}
            className="py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-yellow-400/40 text-zinc-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-yellow-400" />
          </Link>

          <button
            onClick={() => onOpenBooking(car.id)}
            className="py-2.5 px-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md shadow-yellow-500/20"
          >
            <Calendar className="w-3.5 h-3.5 text-black" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

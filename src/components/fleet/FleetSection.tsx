'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Filter, Car as CarIcon } from 'lucide-react';
import { Car, CarCategory } from '@/types';
import { fetchCars } from '@/lib/dataStore';
import CarCard from './CarCard';

interface FleetSectionProps {
  onOpenBooking: (carId?: string) => void;
}

export default function FleetSection({ onOpenBooking }: FleetSectionProps) {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  const loadCars = async () => {
    try {
      const data = await fetchCars();
      setCars(data);
    } catch (err) {
      console.error('Failed to load cars:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCars();
    const handleUpdate = () => loadCars();
    window.addEventListener('brozcars_fleet_updated', handleUpdate);
    return () => window.removeEventListener('brozcars_fleet_updated', handleUpdate);
  }, []);

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV & 4x4', '7-Seater MPV'];

  const filteredCars = selectedCategory === 'All'
    ? cars
    : cars.filter(c => c.category === selectedCategory);

  return (
    <section id="fleet" className="py-24 bg-black relative border-b border-zinc-900">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Premium Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            Drive What <span className="text-yellow-400">Fits You</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Choose from our strict lineup of 9 thoroughly verified self-drive vehicles. Clean, fully sanitized, and ready for your Guwahati & Northeast road journeys.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-500/20 scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Responsive Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="rounded-2xl bg-zinc-900/40 border border-zinc-800 h-96 animate-pulse" />
            ))}
          </div>
        ) : filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onOpenBooking={(id) => onOpenBooking(id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900/30 rounded-2xl border border-zinc-800 p-8">
            <CarIcon className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">No vehicles found in this category.</p>
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-panel border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need Help Choosing The Perfect Car?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Our Khanapara team is ready to recommend the ideal car for your family, group size, or terrain.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
          >
            Custom Trip Enquiry
          </button>
        </div>

      </div>
    </section>
  );
}

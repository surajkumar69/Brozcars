import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  Users, Fuel, Settings2, ShieldCheck, ArrowLeft, MessageCircle, 
  CheckCircle2, Gauge, Luggage, Sparkles, AlertCircle 
} from 'lucide-react';
import { INITIAL_CARS, SITE_SETTINGS } from '@/lib/constants';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import FloatingWhatsApp from '@/components/whatsapp/FloatingWhatsApp';
import BookingForm from '@/components/booking/BookingForm';

export async function generateStaticParams() {
  return INITIAL_CARS.map((car) => ({
    slug: car.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = INITIAL_CARS.find((c) => c.id === slug);

  if (!car) {
    return {
      title: 'Car Not Found | Brozcars Guwahati',
    };
  }

  return {
    title: `${car.name} Self Drive Car Rental in Guwahati | Brozcars Khanapara`,
    description: `Rent ${car.name} for self drive in Guwahati, Assam. ${car.tagline}. Verified, sanitized, instant WhatsApp booking with Brozcars.`,
    openGraph: {
      title: `${car.name} Self Drive Rental - Brozcars Guwahati`,
      description: car.description,
      images: [{ url: car.image }],
    },
  };
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = INITIAL_CARS.find((c) => c.id === slug);

  if (!car) {
    notFound();
  }

  const otherCars = INITIAL_CARS.filter((c) => c.id !== car.id).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(
    `Hi Brozcars! I want to enquire about renting the ${car.name}. Is it available for my dates?`
  )}`;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between">
      <Navbar />

      <main className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Back */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/#fleet"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-yellow-400 transition-colors bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Cars</span>
            </Link>

            <span className="text-xs text-yellow-400 font-mono font-medium">
              Khanapara, Guwahati Hub
            </span>
          </div>

          {/* Main Grid: Gallery & Details on Left, Booking Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Columns: Photo, Gallery, Specs, Description */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Main Photo Showcase */}
              <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl glass-card">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <Image
                    src={car.image}
                    alt={`Brozcars AI Generated ${car.name} self drive rental`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center p-2 sm:p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-30 pointer-events-none" />
                </div>

                {/* Vehicle Header Info Bar */}
                <div className="p-5 sm:p-6 border-t border-zinc-800/80 bg-zinc-900/60">
                  <span className="px-2.5 py-1 rounded-md bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider">
                    {car.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-white font-mono mt-2">
                    {car.name}
                  </h1>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    {car.tagline}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat Bar */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Prefer booking via WhatsApp?</p>
                    <p className="text-[11px] text-zinc-400">Directly ask our Khanapara manager about dates and discounts.</p>
                  </div>
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Verified Technical Specifications */}
              <div className="p-6 rounded-2xl glass-card border border-zinc-800">
                <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>Verified Specifications</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Transmission</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <Settings2 className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Fuel Type</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <Fuel className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{car.fuelType}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Seating Capacity</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <Users className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{car.seatingCapacity} Passengers</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Engine</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <Gauge className="w-3.5 h-3.5 text-yellow-400" />
                      <span className="truncate">{car.engine}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Mileage (Approx)</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <Fuel className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{car.mileage}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Security Deposit</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-400 font-mono">
                      <span>100% Refundable</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
                  <Luggage className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span><strong>Boot Capacity:</strong> {car.luggageCapacity}</span>
                </div>
              </div>

              {/* Description & Overview */}
              <div className="p-6 rounded-2xl glass-card border border-zinc-800">
                <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider mb-3">
                  Vehicle Overview
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {car.description}
                </p>

                <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mt-6 mb-3">
                  Key Vehicle Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rental Terms & Mandatory Documents */}
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                  <span>Self Drive Rental Requirements</span>
                </h3>
                <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Valid Original Indian Driving License (Minimum 1 year old).</li>
                  <li>Original Aadhaar Card / Passport / Voter ID for address verification.</li>
                  <li>Refundable security deposit returned immediately on vehicle handover.</li>
                  <li>Fuel is provided on same-to-same policy (return at the same fuel level as received).</li>
                  <li>Comprehensive insurance and 24/7 roadside breakdown assistance included.</li>
                </ul>
              </div>

            </div>

            {/* Right 5 Columns: Dedicated Instant Booking Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 p-6 sm:p-8 rounded-3xl glass-card border border-yellow-500/30 shadow-2xl">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-500/10 px-2.5 py-1 rounded-full border border-yellow-500/20">
                    Instant Booking
                  </span>
                  <h3 className="text-2xl font-black text-white font-mono uppercase mt-2">
                    Rent {car.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Submit your dates to book this car directly via Brozcars WhatsApp.
                  </p>
                </div>

                <BookingForm initialCarId={car.id} />
              </div>
            </div>

          </div>

          {/* Related Cars from Approved 9-Car Fleet */}
          <div className="mt-20 pt-12 border-t border-zinc-800">
            <h3 className="text-xl font-bold text-white font-mono uppercase mb-6">
              Other Available Cars in Our Fleet
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCars.map((c) => (
                <Link
                  key={c.id}
                  href={`/cars/${c.id}`}
                  className="group rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-yellow-400/40 p-4 transition-all flex items-center gap-4"
                >
                  <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-zinc-950 shrink-0 flex items-center justify-center">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="96px"
                      className="object-contain object-center p-1 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors truncate">
                      {c.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400">{c.category} • {c.seatingCapacity} Seats</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, MapPin, User, Phone, Mail, Car as CarIcon, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Car, Booking } from '@/types';
import { PICKUP_LOCATIONS, SITE_SETTINGS } from '@/lib/constants';
import { fetchCars } from '@/lib/dataStore';

interface BookingFormProps {
  initialCarId?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function BookingForm({ initialCarId, onSuccess, className = '' }: BookingFormProps) {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCarId, setSelectedCarId] = useState(initialCarId || '');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('09:00 AM');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('08:00 PM');
  const [pickupLocation, setPickupLocation] = useState(PICKUP_LOCATIONS[0]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    fetchCars().then((loadedCars) => {
      setCars(loadedCars);
      if (!selectedCarId && loadedCars.length > 0) {
        setSelectedCarId(loadedCars[0].id);
      }
    });
  }, []);

  useEffect(() => {
    if (initialCarId) {
      setSelectedCarId(initialCarId);
    }
  }, [initialCarId]);

  // Set default dates if empty: tomorrow and day after tomorrow
  useEffect(() => {
    if (!pickupDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setPickupDate(tomorrow.toISOString().split('T')[0]);

      const afterTomorrow = new Date();
      afterTomorrow.setDate(afterTomorrow.getDate() + 3);
      setReturnDate(afterTomorrow.toISOString().split('T')[0]);
    }
  }, []);

  const selectedCar = cars.find((c) => c.id === selectedCarId) || cars[0];

  // Calculate rental duration in days
  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1;
    const start = new Date(pickupDate).getTime();
    const end = new Date(returnDate).getTime();
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const totalDays = calculateDays();
  const dailyRate = selectedCar ? selectedCar.pricePerDay : 2000;
  const estimatedTotal = totalDays * dailyRate;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !pickupDate || !returnDate || !selectedCar) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    const bookingId = `BZ-${Math.floor(100000 + Math.random() * 900000)}`;

    const newBooking: Booking = {
      id: bookingId,
      customerName,
      phone,
      email: email || 'Not Provided',
      carId: selectedCar.id,
      carName: selectedCar.name,
      carPrice: selectedCar.pricePerDay,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      pickupLocation,
      totalDays,
      estimatedTotal,
      message,
      status: 'New',
      createdAt: new Date().toISOString(),
      adminNotes: ''
    };

    // Pure static booking via WhatsApp direct enquiry

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    // Format WhatsApp message
    const waText =
      `🚗 *NEW CAR RENTAL BOOKING - BROZCARS*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🔖 *Booking Ref:* ${bookingId}\n` +
      `👤 *Customer Name:* ${customerName}\n` +
      `📞 *Mobile:* ${phone}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🚘 *Vehicle:* ${selectedCar.name}\n` +
      `🏷️ *Daily Rate:* ₹${selectedCar.pricePerDay.toLocaleString('en-IN')}/day\n` +
      `📍 *Pickup Location:* ${pickupLocation}\n` +
      `📅 *Pickup:* ${pickupDate} (${pickupTime})\n` +
      `📅 *Return:* ${returnDate} (${returnTime})\n` +
      `⏱️ *Total Duration:* ${totalDays} Day(s)\n` +
      `💰 *Estimated Rental Total:* ₹${estimatedTotal.toLocaleString('en-IN')}\n` +
      (message ? `📝 *Message:* ${message}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*Brozcars - Khanapara, Guwahati, Assam*\n` +
      `Sent from brozcars.com`;

    const waUrl = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(waText)}`;

    setSubmittedBooking(newBooking);
    setIsSubmitting(false);

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
      onSuccess?.();
    }, 700);
  };

  if (submittedBooking) {
    return (
      <div className="p-8 text-center space-y-5 rounded-2xl glass-card border border-yellow-500/30">
        <div className="w-16 h-16 rounded-full bg-yellow-400/20 border border-yellow-400 flex items-center justify-center mx-auto text-yellow-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
            Booking ID: {submittedBooking.id}
          </span>
          <h3 className="text-2xl font-black text-white font-mono mt-3">
            Booking Request Submitted!
          </h3>
          <p className="text-xs text-zinc-300 mt-2 max-w-md mx-auto">
            We are redirecting you to WhatsApp to connect directly with Brozcars for instant verification and car handover details.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-left text-xs space-y-2 max-w-sm mx-auto">
          <div className="flex justify-between text-zinc-400">
            <span>Vehicle:</span>
            <span className="font-bold text-white">{submittedBooking.carName}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Duration:</span>
            <span className="font-bold text-white">{submittedBooking.totalDays} Days ({submittedBooking.pickupDate} to {submittedBooking.returnDate})</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Estimated Total:</span>
            <span className="font-bold text-yellow-400 font-mono">₹{submittedBooking.estimatedTotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="pt-2">
          <a
            href={`https://wa.me/${SITE_SETTINGS.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20"
          >
            <span>Open WhatsApp Now</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Vehicle Selection */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <CarIcon className="w-3.5 h-3.5 text-yellow-400" />
          Select Car *
        </label>
        <select
          value={selectedCarId}
          onChange={(e) => setSelectedCarId(e.target.value)}
          className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
          required
        >
          {cars.map((car) => (
            <option key={car.id} value={car.id} className="bg-zinc-900 text-zinc-100">
              {car.name} — ₹{car.pricePerDay.toLocaleString('en-IN')}/day ({car.category})
            </option>
          ))}
        </select>
      </div>

      {/* Customer Name & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-yellow-400" />
            Customer Name *
          </label>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            placeholder="10-digit Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>
      </div>

      {/* Email Address & Pickup Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-yellow-400" />
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-yellow-400" />
            Pickup Location *
          </label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
          >
            {PICKUP_LOCATIONS.map((loc, i) => (
              <option key={i} value={loc} className="bg-zinc-900 text-zinc-100">
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dates and Times */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
        <div>
          <span className="block text-[11px] font-bold text-yellow-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Pickup Schedule
          </span>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              required
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs text-zinc-100 focus:outline-none focus:border-yellow-400"
            />
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-2 text-xs text-zinc-100 focus:outline-none focus:border-yellow-400"
            >
              {['07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM', '10:00 PM'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-bold text-yellow-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Return Schedule
          </span>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              required
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs text-zinc-100 focus:outline-none focus:border-yellow-400"
            />
            <select
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-2 text-xs text-zinc-100 focus:outline-none focus:border-yellow-400"
            >
              {['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Additional Message */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
          Additional Message (Optional)
        </label>
        <textarea
          rows={2}
          placeholder="E.g., Heading to Shillong / Dawki / Need child seat / Need airport pickup"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
        />
      </div>

      {/* Price Summary Live Bar */}
      <div className="p-4 rounded-xl bg-zinc-900/90 border border-yellow-500/30 flex items-center justify-between">
        <div>
          <span className="text-[11px] text-zinc-400 block">
            Duration: <strong className="text-white">{totalDays} Day{totalDays > 1 ? 's' : ''}</strong> @ ₹{dailyRate}/day
          </span>
          <span className="text-xs text-zinc-400">Zero Hidden Surcharges</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-wider text-yellow-400 block font-semibold">Estimated Total</span>
          <span className="text-xl font-black text-yellow-400 font-mono">
            ₹{estimatedTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-yellow-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
      >
        <span>{isSubmitting ? 'Processing...' : 'Confirm & Book on WhatsApp'}</span>
        <ArrowRight className="w-4 h-4 text-black" />
      </button>

      <p className="text-[11px] text-zinc-500 text-center font-light flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
        <span>Instantly redirects to Brozcars official WhatsApp (+91 7086100215)</span>
      </p>
    </form>
  );
}

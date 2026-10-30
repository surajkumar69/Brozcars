'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_SETTINGS } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `*MESSAGE TO BROZCARS GUWAHATI*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || 'N/A'}\n` +
      `📌 *Topic:* ${formData.subject}\n` +
      `💬 *Message:* ${formData.message}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Sent via brozcars.com`;

    const waUrl = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            Contact <span className="text-yellow-400">Brozcars</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Have questions about self-drive car rentals, rates, or delivery in Guwahati? Reach out directly to our Khanapara team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <a
              href={`tel:${SITE_SETTINGS.phone.replace(/[^0-9]/g, '')}`}
              className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-yellow-400/50 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Call Directly</span>
                <p className="text-lg font-bold text-white font-mono group-hover:text-yellow-400 transition-colors mt-0.5">
                  {SITE_SETTINGS.phone}
                </p>
                <p className="text-xs text-zinc-500 mt-1">Available 7:00 AM – 11:00 PM for booking enquiries</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${SITE_SETTINGS.email}`}
              className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-yellow-400/50 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Email Inquiries</span>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mt-0.5 break-all">
                  {SITE_SETTINGS.email}
                </p>
                <p className="text-xs text-zinc-500 mt-1">Corporate rentals, invoices & long-term leases</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-card border border-zinc-800/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Office Location</span>
                <p className="text-base font-bold text-white mt-0.5">
                  {SITE_SETTINGS.location}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Near GS Road & Beltola Bypass, Khanapara, Guwahati, Assam 781022
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${SITE_SETTINGS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Instant WhatsApp Chat</span>
                <p className="text-base font-bold text-white mt-0.5">
                  +91 7086100215
                </p>
                <p className="text-xs text-zinc-400 mt-1">Chat directly with the fleet manager for quick replies</p>
              </div>
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-card border border-zinc-800">
            <h3 className="text-xl font-bold text-white font-mono mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-light">
              Fill in your details below and we will get back to you promptly on WhatsApp or phone.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  Your message has been initiated. Our team at Khanapara will connect with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      <option value="General Booking Enquiry">General Booking Enquiry</option>
                      <option value="Mahindra Thar 4x4 Enquiry">Mahindra Thar 4x4 Enquiry</option>
                      <option value="Toyota Innova Crysta 7-Seater">Toyota Innova Crysta 7-Seater</option>
                      <option value="Shillong / Meghalaya Trip Plan">Shillong / Meghalaya Trip Plan</option>
                      <option value="Airport Pickup Requirement">Airport Pickup Requirement</option>
                      <option value="Corporate / Long Term Lease">Corporate / Long Term Lease</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Message / Travel Dates
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us your travel dates, preferred vehicle, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';

export default function PetBookingForm() {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: 'dog',
    microchipNumber: '',
    startDate: '',
    endDate: '',
    additionalNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get current date to prevent booking past dates
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto my-12 bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white">
        <h2 className="text-2xl font-bold">Request a Pet Stay</h2>
        <p className="text-emerald-100 text-sm mt-1">
          Complete your details below. We will review availability and confirm your booking.
        </p>
      </div>

      {/* REPLACE ACTION URL WITH YOUR FORM BACKEND LINK (e.g., Formspree, Web3Forms) */}
      <form action="https://formspree.io" method="POST" className="p-8 space-y-6">
        
        {/* SECTION 1: OWNER DETAILS */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">1. Owner Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
              <input 
                type="text" name="ownerName" required value={formData.ownerName} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
              <input 
                type="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-xs font-medium text-slate-700 mb-1">UK Mobile Number *</label>
            <input 
              type="tel" name="phone" required placeholder="07123 456789" value={formData.phone} onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
            />
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* SECTION 2: PET DETAILS (DEFRA COMPLIANT FIELDS) */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">2. Pet Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-700 mb-1">Pet Name(s) & Breed *</label>
              <input 
                type="text" name="petName" required placeholder="e.g. Milo (Golden Retriever)" value={formData.petName} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Pet Type *</label>
              <select 
                name="petType" value={formData.petType} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-xs font-medium text-slate-700 mb-1">Microchip Number (Required for UK Boarding Licensing)</label>
            <input 
              type="text" name="microchipNumber" value={formData.microchipNumber} onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
            />
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* SECTION 3: BOOKING DATES */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">3. Requested Stay Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Drop-off Date *</label>
              <input 
                type="date" name="startDate" required min={today} value={formData.startDate} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Pick-up Date *</label>
              <input 
                type="date" name="endDate" required min={formData.startDate || today} value={formData.endDate} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
              />
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* SECTION 4: EXTRA INFO */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Routine, Habits, or Medical Requirements</label>
          <textarea 
            name="additionalNotes" rows={3} value={formData.additionalNotes} onChange={handleChange}
            placeholder="Tell us about feeding schedules, medication requirements, or behaviour tendencies..."
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div>
          <button 
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Submit Booking Request (Free)
          </button>
          <p className="text-center text-xs text-slate-400 mt-3">
            🔒 Your data is stored in full compliance with UK GDPR standards.
          </p>
        </div>
      </form>
    </div>
  );
}

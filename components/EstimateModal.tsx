"use client";

import { useEstimateModal } from "@/context/EstimateModalContext";

export default function EstimateModal() {
  const { isModalOpen, closeModal } = useEstimateModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      ></div>
      <div className="relative bg-white border border-slate-200 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(0,163,224,0.3)] animate-in fade-in zoom-in duration-300">
        
        <div className="bg-slate-50 border-b border-slate-200 p-6 flex justify-between items-center">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-slate-900">
              START YOUR <span className="text-electric-blue">ESTIMATE</span>
            </h3>
            <p className="font-body text-slate-500 text-xs md:text-sm">
              Rivian Certified Repair • 24hr Response Time
            </p>
          </div>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-slate-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-tech tracking-widest text-gray-400">VEHICLE MODEL</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue focus:outline-none transition-colors">
                <option>Rivian R1T</option>
                <option>Rivian R1S</option>
                <option>Tesla Model S/X</option>
                <option>Other EV</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-tech tracking-widest text-gray-400">INSURANCE PROVIDER</label>
              <input type="text" placeholder="e.g. Rivian Insurance / Geico" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue focus:outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-tech tracking-widest text-gray-400">DESCRIBE THE DAMAGE</label>
            <textarea rows={3} placeholder="Front bumper impact, sensor warnings active..." className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue focus:outline-none transition-colors"></textarea>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-tech tracking-widest text-gray-400">CONTACT NAME</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-tech tracking-widest text-gray-400">PHONE NUMBER</label>
              <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue focus:outline-none transition-colors" />
            </div>
          </div>
          <button className="w-full bg-electric-blue py-4 font-tech font-bold text-white tracking-widest hover:bg-white hover:text-charcoal hover:shadow-[0_0_20px_#00A3E0] transition-all duration-300">
            SUBMIT REQUEST
          </button>
          <p className="text-center text-xs text-gray-500 font-body">
            Your data is secure. We typically respond within 2 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}

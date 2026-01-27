"use client";

import Link from "next/link";
import { useEstimateModal } from "@/context/EstimateModalContext";

export default function Header() {
  const { openModal } = useEstimateModal();

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 group bg-white/10 backdrop-blur-md hover:bg-white/95">
      {/* Gradient backdrop for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent hover:from-white hover:to-white transition-colors duration-300 backdrop-blur-[2px]"></div>
      
      <div className="relative container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area (Super-Sized) */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            {/* Logo reduced to ~1.5x size (h-24/h-40) for better balance */}
            <div className="relative h-24 w-24 md:h-40 md:w-40 shrink-0 rounded-full border-2 border-white/20 shadow-[0_0_25px_rgba(0,163,224,0.3)] bg-black/80 z-50 translate-y-4 md:translate-y-8">
              <img 
                src="/Revive_renew_restore_logo.png" 
                alt="Revive Renew Restore" 
                className="w-full h-full object-contain p-1.5" 
              />
            </div>
            
            {/* Text Name */}
            <span className="font-heading text-lg md:text-xl tracking-wide text-white group-hover:text-slate-900 transition-colors leading-tight">
              REVIVE<span className="text-electric-blue">.</span> RENEW<span className="text-metallic-silver">.</span> <br className="md:hidden"/>
              RESTORE<span className="text-electric-blue">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-tech text-sm tracking-widest text-white/90 group-hover:text-slate-900 transition-colors">
          <Link href="/" className="hover:text-electric-blue transition-colors text-shadow">HOME</Link>
          <Link href="/#services" className="hover:text-electric-blue transition-colors text-shadow">SERVICES</Link>
          <Link href="/#certification" className="hover:text-electric-blue transition-colors text-shadow">CERTIFICATION</Link>
          <Link href="/about" className="hover:text-electric-blue transition-colors text-shadow">ABOUT</Link>
          <Link href="/reviews" className="hover:text-electric-blue transition-colors text-shadow">REVIEWS</Link>
          <Link href="/careers" className="hover:text-electric-blue transition-colors text-shadow">CAREERS</Link>
          
          <button 
            onClick={openModal}
            className="px-6 py-2 border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 skew-x-[-10deg] backdrop-blur-md bg-white/10 hover:shadow-lg"
          >
            <span className="block skew-x-[10deg] font-bold">GET ESTIMATE</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-charcoal text-white selection:bg-electric-blue selection:text-white">
      
      {/* 1. GLASS HEADER */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 group hover:bg-black/80">
        {/* Gradient backdrop for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px]"></div>
        
        <div className="relative container mx-auto px-6 h-20 flex items-center justify-between">
          
{/* Logo Area (Super-Sized) */}
          <div className="flex items-center gap-4">
            {/* Logo increased to h-20 (80px) to fill the header height */}
            <div className="relative h-16 w-16 md:h-24 md:w-24 shrink-0 rounded-full border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-black/50 z-50 mt-2">
              <img 
                src="/Revive_renew_restore_logo.png" 
                alt="Revive Renew Restore" 
                className="w-full h-full object-contain p-0.5" 
              />
            </div>
            
            {/* Text Name */}
            <span className="font-heading text-lg md:text-xl tracking-wide text-white leading-tight">
              REVIVE<span className="text-electric-blue">.</span> RENEW<span className="text-metallic-silver">.</span> <br className="md:hidden"/>
              RESTORE<span className="text-electric-blue">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-tech text-sm tracking-widest text-white/90">
            <Link href="#services" className="hover:text-electric-blue transition-colors text-shadow">SERVICES</Link>
            <Link href="#certification" className="hover:text-electric-blue transition-colors text-shadow">CERTIFICATION</Link>
            <Link href="#about" className="hover:text-electric-blue transition-colors text-shadow">ABOUT</Link>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 skew-x-[-10deg] backdrop-blur-md bg-black/20"
            >
              <span className="block skew-x-[10deg] font-bold">GET ESTIMATE</span>
            </button>
          </nav>
        </div>
      </header>

      {/* 2. VIDEO HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* The Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black/30 z-10"></div>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            {/* Cinematic Driving Loop */}
            <source src="https://pub-5bdeb7ee84514a3798567c9adcc16d14.r2.dev/8469674-uhd_3840_2160_25fps%20(1).mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 pt-20 flex flex-col items-center text-center">
          <div className="max-w-5xl">
            {/* Tagline Badge */}
            <div className="inline-flex mb-6 px-4 py-1.5 border border-electric-blue/50 bg-black/40 rounded-full backdrop-blur-md mx-auto">
              <span className="font-tech text-electric-blue text-[10px] md:text-xs tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse shadow-[0_0_10px_#00A3E0]"></span>
                Jacksonville's Certified EV Specialist
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="font-heading text-6xl md:text-8xl leading-[0.9] mb-8 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              REVIVE<span className="text-electric-blue">.</span> RENEW<span className="text-metallic-silver">.</span> <br className="hidden md:block"/>
              RESTORE<span className="text-electric-blue">.</span>
            </h1>
            
            {/* Subtext */}
            <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              Official Rivian Certification. Factory-trained precision. 
              Restoring your Electric Adventure Vehicle to its original glory using 
              exclusively OEM parts.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-4 bg-electric-blue text-white font-tech font-bold tracking-widest hover:bg-white hover:text-charcoal hover:shadow-[0_0_40px_#00A3E0] transition-all duration-300 skew-x-[-10deg] group shadow-lg"
              >
                <span className="block skew-x-[10deg]">
                  START ESTIMATE <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </span>
              </button>
              
              <button className="px-10 py-4 border border-white/50 text-white font-tech tracking-widest hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300 skew-x-[-10deg] backdrop-blur-sm bg-black/20">
                <span className="block skew-x-[10deg]">VIEW WORK</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="relative z-20 bg-charcoal border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Customer Satisfaction", value: "4.9★", color: "text-electric-blue" },
              { label: "Avg Completion", value: "3.2 Days", color: "text-white" },
              { label: "Cars Restored", value: "2,000+", color: "text-deep-gold" },
              { label: "Rivian Certified", value: "100%", color: "text-electric-blue" },
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:bg-white/5 p-4 rounded-lg transition-colors cursor-default">
                <h3 className={`font-heading text-4xl md:text-6xl mb-2 ${stat.color} drop-shadow-lg`}>
                  {stat.value}
                </h3>
                <p className="font-tech text-metallic-silver text-xs md:text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID: WHY CHOOSE US */}
      <section id="about" className="py-24 bg-charcoal relative">
        <div className="container mx-auto px-6">
          
          <div className="mb-16 text-center">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">
              THE <span className="text-electric-blue">REVIVE</span> STANDARD
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              We don't just repair vehicles; we restore factory specifications. 
              Precision engineering meets master craftsmanship.
            </p>
          </div>

          {/* THE BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Block 1: RIVIAN CERTIFIED (Fixed Layout with Mobile Responsiveness) */}
            <div className="md:row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-electric-blue/50 transition-colors">
              
              {/* THE BADGE - Responsive Sizing (w-24 mobile, w-32 desktop) */}
              <div className="absolute top-6 right-6 w-24 md:w-32 bg-white p-2 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] transform rotate-6 group-hover:rotate-0 transition-transform duration-500 z-20">
                <img 
                  src="/rivian-badge.jpg" 
                  alt="Rivian Certified Fleet Center" 
                  className="w-full h-auto object-contain" 
                />
              </div>

              {/* TEXT CONTENT - Responsive Spacing (mt-24 mobile, mt-32 desktop) */}
              <div className="relative z-10 mt-24 md:mt-32">
                <h3 className="font-heading text-3xl md:text-4xl mb-3 text-white leading-none">
                  RIVIAN<br/>
                  <span className="text-electric-blue">CERTIFIED</span>
                </h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed max-w-[100%] md:max-w-[90%]">
                  One of only 12 facilities in Florida authorized to handle R1T & R1S structural repairs. We use official Rivian diagnostic software and OEM parts exclusively.
                </p>
              </div>

              {/* Decorative 'Official Partner' Bar */}
              <div className="mt-6 h-16 md:h-20 w-full bg-gradient-to-r from-electric-blue/20 to-transparent rounded-lg border border-electric-blue/20 flex items-center justify-center relative overflow-hidden shrink-0">
                 <div className="absolute inset-0 bg-electric-blue/5 animate-pulse"></div>
                 <span className="font-tech text-electric-blue tracking-widest text-[10px] md:text-xs relative z-10 font-bold">OFFICIAL PARTNER</span>
              </div>
            </div>

            {/* Block 2: LOCATION MAP (Dark Mode Embed) */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-charcoal hover:border-white/30 transition-colors h-64 md:h-auto">
              {/* THE DARK MODE MAP EMBED */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.276632463768!2d-81.6371169244825!3d30.37128097476059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b0b9231718cb%3A0x628024254070217!2s4150%20Springrove%20St%2C%20Jacksonville%2C%20FL%2032209!5e0!3m2!1sen!2sus!4v1709230000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end pointer-events-none">
                <div>
                  <h3 className="font-heading text-3xl mb-1 text-white drop-shadow-md">JACKSONVILLE HQ</h3>
                  <p className="font-body text-electric-blue drop-shadow-md bg-black/50 px-2 py-1 rounded inline-block">4150 Springrove St.</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=4150+Springrove+St,+Jacksonville,+FL" 
                  target="_blank"
                  className="hidden sm:block px-6 py-2 bg-white text-charcoal font-bold font-tech text-sm hover:bg-electric-blue hover:text-white transition-colors skew-x-[-10deg] pointer-events-auto shadow-lg"
                >
                  <span className="block skew-x-[10deg]">NAVIGATE</span>
                </a>
              </div>
            </div>

            {/* Block 3: ALUMINUM EXPERTS (With Welding BG) */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-6 hover:border-deep-gold/50 transition-colors">
              
              {/* Background Image: Welding Sparks */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"></div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="font-heading text-2xl text-deep-gold mb-2 drop-shadow-md">ALUMINUM EXPERTS</h3>
                <p className="font-body text-gray-300 text-xs leading-relaxed">
                  Clean-room environments for contaminant-free aluminum welding, essential for modern EV frames.
                </p>
              </div>
            </div>

            {/* Block 4: ADAS CALIBRATION (With Tech BG) */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-electric-blue p-6 transition-colors">
              
              {/* Background Image: HUD / Tech */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-electric-blue via-electric-blue/80 to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-white mb-2 drop-shadow-md">ADAS CALIBRATION</h3>
                  <p className="font-body text-white/90 text-xs leading-relaxed font-medium">
                    In-house sensor realignment. We ensure your cameras, radar, and LIDAR "see" perfectly before you leave.
                  </p>
                </div>
                
                {/* Tech Icon */}
                <div className="self-end text-white/40 group-hover:text-white transition-colors">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THE PROCESS (Timeline) */}
      <section className="py-24 bg-black relative border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-4xl text-white mb-4">THE RESTORATION <span className="text-electric-blue">PROCESS</span></h2>
            <p className="font-body text-gray-400">From the moment you hand over the keys to the final reveal.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0"></div>

            {[
              { step: "01", title: "ASSESSMENT", text: "Complete disassembly and blueprinting. We identify every millimeter of damage before we touch a tool." },
              { step: "02", title: "STRUCTURAL", text: "Frame alignment using Rivian-certified jigs and millimeter-precise laser measuring systems." },
              { step: "03", title: "REFINISH", text: "Factory color matching in our downdraft paint booths. Waterborne paints that meet OEM sustainability standards." },
              { step: "04", title: "CALIBRATION", text: "Re-initializing all ADAS sensors, cameras, and radar systems to ensure your safety features work perfectly." },
            ].map((item, i) => (
              <div key={i} className="relative z-10 group">
                <div className="w-24 h-24 bg-charcoal border border-white/20 rounded-full flex items-center justify-center mb-6 group-hover:border-electric-blue group-hover:shadow-[0_0_20px_#00A3E0] transition-all duration-300">
                  <span className="font-tech text-3xl text-white">{item.step}</span>
                </div>
                <h3 className="font-heading text-2xl text-white mb-3 group-hover:text-electric-blue transition-colors">{item.title}</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXTENDED SERVICES LIST */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Left: Additional Info Text */}
          <div>
            <h3 className="font-heading text-3xl text-white mb-6">COMPREHENSIVE <span className="text-electric-blue">CARE</span></h3>
            <p className="font-body text-gray-400 mb-6 leading-relaxed">
              While we specialize in Rivian and EV collision repair, our facility is equipped to handle complex restorations for all luxury makes. 
              We work directly with your insurance provider to handle the claim, arrange towing, and manage your rental coordination.
            </p>
            <div className="p-6 bg-white/5 border-l-2 border-electric-blue rounded-r-lg">
              <p className="font-tech text-sm text-white italic">
                "Our promise is simple: Your vehicle returns to you in better condition than the day it left the factory."
              </p>
            </div>
          </div>

          {/* Right: The List */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Paintless Dent Repair (PDR)",
              "Aluminum Structural Welding",
              "High-Voltage System Safing",
              "Glass & Windshield Replacement",
              "Ceramic Coating & Detailing",
              "Wheel Restoration",
              "Carbon Fiber Repair",
              "Headlight Restoration"
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 bg-electric-blue rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="font-body text-sm text-gray-300 group-hover:text-white transition-colors">{service}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            
{/* Brand (Footer Update - Massive Logo) */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                {/* Huge Footer Logo (160px) */}
                <div className="h-32 w-32 md:h-40 md:w-40 shrink-0 rounded-full border-4 border-white/10 bg-white/5 shadow-2xl">
                   <img src="/Revive_renew_restore_logo.png" alt="Revive Renew Restore" className="w-full h-full object-contain" />
                </div>
                
                <div className="text-center md:text-left pt-4">
                  <span className="font-heading text-3xl md:text-5xl tracking-wide text-white block mb-4">
                    REVIVE<span className="text-electric-blue">.</span> RENEW<span className="text-metallic-silver">.</span><br/>
                    RESTORE<span className="text-electric-blue">.</span>
                  </span>
                  <p className="font-body text-gray-500 max-w-sm leading-relaxed mx-auto md:mx-0">
                    Jacksonville's premier Rivian-Certified collision center. 
                    Where precision engineering meets master craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-tech text-white mb-6 tracking-widest">CONTACT</h4>
              <ul className="space-y-4 font-body text-gray-400 text-sm">
                <li className="hover:text-electric-blue cursor-pointer transition-colors">4150 Springrove St<br/>Jacksonville, FL 32209</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">(904) 555-0123</li>
                <li className="hover:text-electric-blue cursor-pointer transition-colors">estimates@revive.com</li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-tech text-white mb-6 tracking-widest">HOURS</h4>
              <ul className="space-y-4 font-body text-gray-400 text-sm">
                <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-white">By Appt Only</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-charcoal bg-white/10 px-2 rounded text-xs py-0.5">CLOSED</span></li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-tech">
            <p>&copy; 2026 REVIVE RENEW RESTORE INC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">PRIVACY</span>
              <span className="hover:text-white cursor-pointer">TERMS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* THE "MONEY MAKER" MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(0,163,224,0.3)] animate-in fade-in zoom-in duration-300">
            
            <div className="bg-charcoal border-b border-white/5 p-6 flex justify-between items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl text-white">
                  START YOUR <span className="text-electric-blue">ESTIMATE</span>
                </h3>
                <p className="font-body text-gray-400 text-xs md:text-sm">
                  Rivian Certified Repair • 24hr Response Time
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
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
                  <select className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-electric-blue focus:outline-none transition-colors">
                    <option>Rivian R1T</option>
                    <option>Rivian R1S</option>
                    <option>Tesla Model S/X</option>
                    <option>Other EV</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-tech tracking-widest text-gray-400">INSURANCE PROVIDER</label>
                  <input type="text" placeholder="e.g. Rivian Insurance / Geico" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-electric-blue focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-tech tracking-widest text-gray-400">DESCRIBE THE DAMAGE</label>
                <textarea rows={3} placeholder="Front bumper impact, sensor warnings active..." className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-electric-blue focus:outline-none transition-colors"></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-tech tracking-widest text-gray-400">CONTACT NAME</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-electric-blue focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-tech tracking-widest text-gray-400">PHONE NUMBER</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-electric-blue focus:outline-none transition-colors" />
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
      )}

    </main>
  );
}
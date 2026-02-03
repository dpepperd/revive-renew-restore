"use client";

import { useEstimateModal } from "@/context/EstimateModalContext";

export default function Home() {
  const { openModal } = useEstimateModal();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-electric-blue selection:text-white">
      
      {/* 2. VIDEO HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* The Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-black/30 z-10"></div>
          
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
            <div className="inline-flex mb-6 px-4 py-1.5 border border-electric-blue/50 bg-white/10 rounded-full backdrop-blur-md mx-auto">
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
                onClick={openModal}
                className="px-10 py-4 bg-electric-blue text-white font-tech font-bold tracking-widest hover:bg-white hover:text-charcoal hover:shadow-[0_0_40px_#00A3E0] transition-all duration-300 skew-x-[-10deg] group shadow-lg"
              >
                <span className="block skew-x-[10deg]">
                  START ESTIMATE <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </span>
              </button>
              
              <button className="px-10 py-4 border border-white/50 text-white font-tech tracking-widest hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300 skew-x-[-10deg] backdrop-blur-sm bg-white/10">
                <span className="block skew-x-[10deg]">VIEW WORK</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="relative z-20 bg-white border-t border-slate-200 shadow-xl">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Customer Satisfaction", value: "4.9★", color: "text-electric-blue" },
              { label: "Cars Restored", value: "2,000+", color: "text-deep-gold" },
              { label: "Rivian Certified", value: "100%", color: "text-electric-blue" },
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:bg-slate-50 p-4 rounded-lg transition-colors cursor-default">
                <h3 className={`font-heading text-4xl md:text-6xl mb-2 ${stat.color} drop-shadow-lg`}>
                  {stat.value}
                </h3>
                <p className="font-tech text-slate-500 text-xs md:text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID: WHY CHOOSE US */}
      <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-electric-blue/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="mb-16 text-center">
            <h2 className="font-heading text-5xl md:text-6xl mb-4 drop-shadow-sm">
              THE <span className="text-electric-blue inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,163,224,0.3)]">REVIVE</span> STANDARD
            </h2>
            <p className="font-body text-slate-600 max-w-2xl mx-auto text-lg">
              We don't just repair vehicles; we restore factory specifications. 
              Precision engineering meets master craftsmanship.
            </p>
          </div>

          {/* THE BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
            
            {/* Block 1: RIVIAN CERTIFIED */}
            <div className="md:row-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 flex flex-col justify-between hover:border-electric-blue/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-[1.02] z-10">
              
              {/* THE BADGES - SIDE BY SIDE */}
              <div className="absolute top-6 right-0 left-0 flex justify-center gap-8 px-4 z-20">
                <div className="w-48 md:w-64 bg-white p-4 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] transform group-hover:shadow-[0_0_30px_rgba(0,163,224,0.5)] transition-all duration-500 hover:scale-110">
                  <img 
                    src="/Rivian_CFC_Logo_1.png" 
                    alt="Rivian CFC Certification" 
                    className="w-full h-auto object-contain" 
                  />
                </div>
                <div className="w-48 md:w-64 bg-white p-4 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] transform group-hover:shadow-[0_0_30px_rgba(0,163,224,0.5)] transition-all duration-500 hover:scale-110">
                  <img 
                    src="/Rivian_CCC_White_background.png" 
                    alt="Rivian CCC Certification" 
                    className="w-full h-auto object-contain" 
                  />
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 mt-24 md:mt-32">
                <div className="w-12 h-1 bg-electric-blue mb-6 group-hover:w-24 transition-all duration-500 mx-auto md:mx-0"></div>
                <h3 className="font-heading text-4xl md:text-5xl mb-4 text-slate-900 leading-[0.9] flex items-baseline justify-center gap-6">
                  <span className="whitespace-nowrap">RIVIAN</span>
                  <span className="whitespace-nowrap text-electric-blue text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-600">CERTIFIED</span>
                </h3>
                <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed max-w-prose mx-auto text-center font-semibold">
                  One of only 12 facilities in Florida authorized to handle R1T & R1S structural repairs. We use official Rivian diagnostic software and OEM parts exclusively.
                </p>
              </div>

              {/* Decorative 'Official Partner' Bar */}
              <div className="mt-8 h-14 w-full bg-gradient-to-r from-electric-blue/10 to-transparent rounded-lg border border-electric-blue/20 flex items-center justify-center relative overflow-hidden shrink-0 group-hover:border-electric-blue/40 transition-colors">
                 <div className="absolute inset-0 bg-electric-blue/5 animate-pulse"></div>
                 <span className="font-tech text-electric-blue tracking-[0.2em] text-xs relative z-10 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_10px_#00A3E0]"></span>
                    OFFICIAL PARTNER
                 </span>
              </div>
            </div>

            {/* Block 2: LOCATION MAP */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 min-h-[250px]">
              {/* THE DARK MODE MAP EMBED */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.276632463768!2d-81.6371169244825!3d30.37128097476059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b0b9231718cb%3A0x628024254070217!2s4150%20Springrove%20St%2C%20Jacksonville%2C%20FL%2032209!5e0!3m2!1sen!2sus!4v1709230000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%)" }}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity"
              ></iframe>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end pointer-events-none">
                <div>
                  <h3 className="font-heading text-3xl mb-1 text-white drop-shadow-md group-hover:text-electric-blue transition-colors duration-300">JACKSONVILLE HQ</h3>
                  <div className="flex items-center gap-2 text-slate-300">
                    <svg className="w-4 h-4 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p className="font-body text-sm font-medium">4150 Springrove St.</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=4150+Springrove+St,+Jacksonville,+FL" 
                  target="_blank"
                  className="hidden sm:block px-6 py-2 bg-electric-blue text-white font-bold font-tech text-sm hover:bg-white hover:text-charcoal transition-all duration-300 skew-x-[-10deg] pointer-events-auto shadow-[0_0_20px_rgba(0,163,224,0.4)] hover:shadow-white/20 transform hover:-translate-y-1"
                >
                  <span className="block skew-x-[10deg]">NAVIGATE</span>
                </a>
              </div>
            </div>

            {/* Block 3: ALUMINUM EXPERTS */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 hover:shadow-deep-gold/20 hover:border-deep-gold/30">
              
              {/* Background Image: Welding Sparks */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 contrast-125 saturate-0 group-hover:saturate-100"></div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent mix-blend-hard-light"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-8 h-1 bg-deep-gold mb-3 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="font-heading text-2xl text-slate-800 mb-2 drop-shadow-sm group-hover:text-deep-gold transition-colors">ALUMINUM EXPERTS</h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed font-medium">
                  Clean-room environments for contaminant-free aluminum welding, essential for modern EV frames.
                </p>
              </div>
            </div>

            {/* Block 4: ADAS CALIBRATION */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-electric-blue to-blue-600 p-6 shadow-lg hover:shadow-2xl hover:shadow-electric-blue/40 hover:scale-[1.02] transition-all duration-500">
              
              {/* Background Image: HUD / Tech */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">ADAS CALIBRATION</h3>
                  <p className="font-body text-white/90 text-sm leading-relaxed font-medium drop-shadow-md">
                    In-house sensor realignment. We ensure your cameras, radar, and LIDAR "see" perfectly.
                  </p>
                </div>
                
                {/* Tech Icon */}
                <div className="self-end text-white/60 group-hover:text-white transition-colors">
                  <svg className="w-12 h-12 group-hover:animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-24 bg-white relative border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-4xl text-slate-900 mb-4">THE RESTORATION <span className="text-electric-blue">PROCESS</span></h2>
            <p className="font-body text-slate-600">From the moment you hand over the keys to the final reveal.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

            {[
              { step: "01", title: "ASSESSMENT", text: "Complete disassembly and blueprinting. We identify every millimeter of damage before we touch a tool." },
              { step: "02", title: "STRUCTURAL", text: "Frame alignment using Rivian-certified jigs and millimeter-precise laser measuring systems." },
              { step: "03", title: "REFINISH", text: "Factory color matching in our downdraft paint booths. Waterborne paints that meet OEM sustainability standards." },
              { step: "04", title: "CALIBRATION", text: "Re-initializing all ADAS sensors, cameras, and radar systems to ensure your safety features work perfectly." },
            ].map((item, i) => (
              <div key={i} className="relative z-10 group">
                <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-electric-blue group-hover:shadow-[0_0_20px_#00A3E0] transition-all duration-300 shadow-sm">
                  <span className="font-tech text-3xl text-slate-900">{item.step}</span>
                </div>
                <h3 className="font-heading text-2xl text-slate-900 mb-3 group-hover:text-electric-blue transition-colors">{item.title}</h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXTENDED SERVICES LIST */}
      <section className="py-24 bg-slate-200 border-t border-slate-300">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Left: Additional Info Text */}
          <div>
            <h3 className="font-heading text-3xl text-slate-900 mb-6">COMPREHENSIVE <span className="text-electric-blue">CARE</span></h3>
            <p className="font-body text-slate-600 mb-6 leading-relaxed">
              While we specialize in Rivian and EV collision repair, our facility is equipped to handle complex restorations for all luxury makes. 
              We work directly with your insurance provider to handle the claim, arrange towing, and manage your rental coordination.
            </p>
            <div className="p-6 bg-white border-l-2 border-electric-blue rounded-r-lg shadow-sm">
              <p className="font-tech text-sm text-slate-700 italic">
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
                <span className="font-body text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{service}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
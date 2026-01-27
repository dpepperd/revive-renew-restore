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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Customer Satisfaction", value: "4.9★", color: "text-electric-blue" },
              { label: "Avg Completion", value: "3.2 Days", color: "text-slate-900" },
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
      <section id="about" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          
          <div className="mb-16 text-center">
            <h2 className="font-heading text-5xl md:text-6xl mb-4">
              THE <span className="text-electric-blue">REVIVE</span> STANDARD
            </h2>
            <p className="font-body text-slate-600 max-w-2xl mx-auto">
              We don't just repair vehicles; we restore factory specifications. 
              Precision engineering meets master craftsmanship.
            </p>
          </div>

          {/* THE BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Block 1: RIVIAN CERTIFIED (Fixed Layout with Mobile Responsiveness) */}
            <div className="md:row-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-electric-blue/50 transition-colors shadow-sm">
              
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
                <h3 className="font-heading text-3xl md:text-4xl mb-3 text-slate-900 leading-none">
                  RIVIAN<br/>
                  <span className="text-electric-blue">CERTIFIED</span>
                </h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed max-w-[100%] md:max-w-[90%]">
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
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 hover:border-electric-blue/30 transition-colors h-64 md:h-auto shadow-sm">
              {/* THE DARK MODE MAP EMBED */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.276632463768!2d-81.6371169244825!3d30.37128097476059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b0b9231718cb%3A0x628024254070217!2s4150%20Springrove%20St%2C%20Jacksonville%2C%20FL%2032209!5e0!3m2!1sen!2sus!4v1709230000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none"></div>
              
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
            <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:border-deep-gold/50 transition-colors shadow-sm">
              
              {/* Background Image: Welding Sparks */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"></div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="font-heading text-2xl text-deep-gold mb-2 drop-shadow-md">ALUMINUM EXPERTS</h3>
                <p className="font-body text-slate-600 text-xs leading-relaxed">
                  Clean-room environments for contaminant-free aluminum welding, essential for modern EV frames.
                </p>
              </div>
            </div>

            {/* Block 4: ADAS CALIBRATION (With Tech BG) */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-electric-blue p-6 transition-colors shadow-lg shadow-electric-blue/20">
              
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
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEstimateModal } from "@/context/EstimateModalContext";

// Simple check icon for lists
const CheckIcon = () => (
  <svg className="w-5 h-5 text-electric-blue shrink-0 mt-0.5 shadow-sm rounded-full bg-electric-blue/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function CertificationPage() {
  const { openModal } = useEstimateModal();

  return (
    <main className="min-h-screen bg-white text-slate-900 font-body selection:bg-electric-blue selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Clean Shop/Tech aesthetic */}
        <div className="absolute inset-0 z-0 bg-slate-900">
           {/* Fallback pattern if image is missing, but keeping the electric blue gradient mix */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
           {/* Subtle blue accent bleed */}
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xl">
             <div className="w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3E0] animate-pulse"></div>
             <span className="font-tech text-xs tracking-widest font-bold lowercase">jax, fl</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg max-w-4xl mx-auto">
            THE ONLY SHOP IN JACKSONVILLE CERTIFIED FOR <span className="text-electric-blue text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400">BOTH</span>.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium text-slate-200 drop-shadow-md leading-relaxed mb-6">
            We're proud to be a Rivian Certified Fleet Service Center and a Rivian Certified Collision Center — two of the most rigorous certifications in the EV industry, and we hold both.
          </p>
          <p className="text-sm md:text-base max-w-4xl mx-auto text-slate-300 font-medium leading-relaxed hidden md:block">
            Not every shop can work on a Rivian. And not every shop that can work on one is qualified to restore it after a collision. We are. That means when you bring your Rivian to us, you're getting factory-trained technicians, OEM-approved repair procedures, and the equipment Rivian itself requires to keep your vehicle performing exactly as it was built to.
          </p>
        </div>
      </section>

      {/* 2. IT'S A STANDARD */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
         {/* Decorative grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
            <h2 className="font-heading text-4xl text-slate-900 mb-8 drop-shadow-sm">THIS ISN'T A BADGE.<br/><span className="text-electric-blue drop-shadow-[0_4px_10px_rgba(0,163,224,0.2)]">IT'S A STANDARD.</span></h2>
            
            <div className="prose prose-lg mx-auto text-slate-600 font-medium leading-relaxed">
              <p className="mb-6">
                Rivian doesn't hand out certifications. To earn them, a shop has to meet strict requirements across facilities, tooling, training, and ongoing performance. Rivian reviews and audits certified centers to make sure standards are maintained — not just met once and forgotten.
              </p>
              <p className="mb-6">
                Rivian's certification program exists because their vehicles are fundamentally different from traditional trucks and SUVs. The battery architecture, the quad-motor system, the advanced driver assistance tech, the aluminum-intensive body structure — all of it requires specialized knowledge and purpose-built equipment to service and repair correctly.
              </p>
              <p className="text-slate-900 font-bold text-xl italic mt-10 border-l-4 border-electric-blue pl-6 text-left bg-white p-6 shadow-sm rounded-r-xl">
                "A non-certified shop may be willing to work on your Rivian. But without the training, the tools, and the OEM repair procedures, they're guessing. We're not."
              </p>
            </div>
        </div>
      </section>

      {/* 3. THE TWO CERTIFICATIONS (Side-by-Side or Stacked Cards) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Fleet Service Center */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,163,224,0.15)] hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-deep-gold/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-24 h-24 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center shadow-inner shrink-0 p-3">
                    <img src="/Rivian_CFC_Logo_1.png" alt="Fleet Certification" className="w-full h-auto object-contain" />
                 </div>
                 <h3 className="font-heading text-3xl text-slate-900 leading-tight">FLEET SERVICE<br/><span className="text-electric-blue">CENTER</span></h3>
              </div>
              
              <h4 className="font-tech text-slate-900 font-bold text-sm tracking-widest mb-4 uppercase">Built for Fleets. Ready for Whatever.</h4>
              <p className="font-body text-slate-600 mb-6 leading-relaxed">
                Commercial operators and fleet managers trust Rivian because of the R1T and R1S's capability, range, and reliability. We keep that promise going post-purchase. As a Rivian Certified Fleet Service Center, we're equipped to handle the maintenance and repair needs of Rivian fleet vehicles at scale.
              </p>
              
              <div className="space-y-4 font-body text-slate-700 font-medium">
                <p className="font-bold text-slate-900 mb-2">What this means for fleet customers:</p>
                <ul className="space-y-3">
                  {[
                    "Technicians trained and certified directly through Rivian's fleet program",
                    "Access to Rivian's diagnostic systems and proprietary service tools",
                    "OEM parts and fluids — no substitutions",
                    "Streamlined service processes designed around fleet uptime",
                    "Warranty-compliant repairs that protect your investment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Collision Center */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0B1120] rounded-3xl p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] border border-slate-800 relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,163,224,0.4)] hover:-translate-y-1 hover:border-blue-500/30 text-white">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-electric-blue/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="flex items-center gap-6 mb-8 relative z-10">
                 <div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-lg shrink-0 p-3">
                    <img src="/Rivian_CCC_White_background.png" alt="Collision Certification" className="w-full h-auto object-contain" />
                 </div>
                 <h3 className="font-heading text-3xl leading-tight">COLLISION<br/><span className="text-electric-blue text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400">CENTER</span></h3>
              </div>
              
              <h4 className="font-tech text-electric-blue font-bold text-sm tracking-widest mb-4 uppercase drop-shadow-sm relative z-10">When Something Goes Wrong, You Need It Done Right.</h4>
              <p className="font-body text-slate-300 mb-6 leading-relaxed relative z-10">
                A collision doesn't just damage the exterior of a Rivian — it can affect the battery pack, the structural integrity of the skateboard platform, sensor calibration, and advanced safety systems. Getting the sheet metal straight isn't enough.
              </p>
              
              <div className="space-y-4 font-body text-slate-200 font-medium relative z-10">
                <p className="font-bold text-white mb-2">What this means for collision customers:</p>
                <ul className="space-y-3">
                  {[
                    "OEM-approved structural repair procedures for aluminum",
                    "Battery and high-voltage system inspection protocols",
                    "Full ADAS and sensor recalibration after repairs",
                    "Rivian-approved paint and finishing processes",
                    "Documentation that protects your warranty and resale value"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-electric-blue shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,163,224,0.5)] bg-white rounded-full border border-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY IT MATTERS (The Under One Roof section) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
         <div className="absolute inset-0 bg-electric-blue/5 opacity-50"></div>
         
         <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <h2 className="font-heading text-4xl text-slate-900 mb-6 drop-shadow-sm">FLEET AND COLLISION.<br/><span className="text-electric-blue drop-shadow-[0_4px_10px_rgba(0,163,224,0.2)]">UNDER ONE ROOF.</span></h2>
            
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">
              Most Rivian owners will never need to find a collision center. Most fleet operators may never have a major incident. But having both certifications in the same facility means we understand the full picture of how these vehicles are built, how they're used, and what it takes to keep them running — and to bring them back when something goes wrong.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              It also means our technicians are living with Rivians every day. That depth of experience shows up in every appointment, whether it's routine fleet service or a complex post-collision restoration.
            </p>
         </div>
      </section>

      {/* 5. SUMMARY OF CERTS (Formal definitions) */}
      <section className="py-16 bg-white border-t border-slate-200">
         <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="font-tech text-slate-400 font-bold tracking-widest text-sm text-center mb-10 uppercase">Our Certifications Summary</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center">
                  <span className="text-deep-gold text-2xl mb-2 hover:scale-125 transition-transform duration-300">★</span>
                  <h4 className="font-heading text-xl text-slate-900 mb-3">Rivian Certified Fleet Service Center</h4>
                  <p className="text-sm font-body text-slate-600 font-medium leading-relaxed">Authorized to perform warranty and post-warranty service on Rivian fleet vehicles using factory-trained technicians, OEM parts, and Rivian's proprietary diagnostic systems.</p>
               </div>
               <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center">
                  <span className="text-electric-blue text-2xl mb-2 hover:scale-125 transition-transform duration-300">★</span>
                  <h4 className="font-heading text-xl text-slate-900 mb-3">Rivian Certified Collision Center</h4>
                  <p className="text-sm font-body text-slate-600 font-medium leading-relaxed">Authorized to perform structural and cosmetic collision repairs on Rivian vehicles following OEM repair procedures, including high-voltage systems, ADAS recalibration, and aluminum body repair.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-br from-electric-blue to-blue-700 relative overflow-hidden text-white border-b-4 border-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <h2 className="font-heading text-5xl mb-6 drop-shadow-md">READY TO <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">SCHEDULE?</span></h2>
           <p className="text-xl text-blue-50 font-medium mb-10 drop-shadow-sm">
             Whether you're managing a fleet or dealing with collision damage, our team is here to help. Give us a call or book online — we'll take it from there.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* Note: In a real app, these would link to specific service flow pages */}
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-white text-electric-blue font-tech font-bold tracking-widest uppercase hover:bg-slate-50 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 rounded-sm"
              >
                Get a Collision Estimate
              </button>

           </div>
           
           <p className="text-xs text-blue-200/80 font-tech tracking-wider uppercase">
             All service and repair work performed in accordance with Rivian OEM specifications. <br className="hidden sm:block"/>Revive Renew Restore is independently owned and operated.
           </p>
        </div>
      </section>

    </main>
  );
}

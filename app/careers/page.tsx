"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Placeholder for icons (using SVGs directly in components for simplicity or heroicons if available)
const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function CareersPage() {
  const [activePosition, setActivePosition] = useState<string | null>(null);

  const togglePosition = (title: string) => {
    if (activePosition === title) {
      setActivePosition(null);
    } else {
      setActivePosition(title);
    }
  };

  const positions = [
    {
      title: "Collision Repair Technician",
      description: "Seeking experienced collision repair technicians to work on Rivian electric vehicles. Must have strong body repair skills and willingness to train on EV-specific procedures. Rivian certification provided.",
      requirements: [
        "3+ years collision repair experience",
        "I-CAR or ASE certifications preferred",
        "Detail-oriented with quality mindset",
        "Ability to follow Rivian OEM repair procedures"
      ]
    },
    {
      title: "Auto Body Painter",
      description: "Professional auto body painter needed for high-end EV repairs. Experience with waterborne paint systems preferred. Training provided on Rivian color matching and finish requirements.",
      requirements: [
        "3+ years professional painting experience",
        "Knowledge of waterborne paint systems",
        "Strong color matching skills",
        "Commitment to flawless finish quality"
      ]
    },
    {
      title: "Estimator",
      description: "Detail-oriented estimator to assess Rivian collision damage and work with insurance companies. CCC1 experience required. Will train on Rivian-specific parts and repair procedures.",
      requirements: [
        "2+ years estimating experience",
        "CCC1 proficiency",
        "Strong customer service skills",
        "Insurance company relationships preferred"
      ]
    },
    {
      title: "Customer Service Representative",
      description: "Front desk professional to manage customer intake, scheduling, and communication. Automotive experience helpful but not required. Must be organized and customer-focused.",
      requirements: [
        "Excellent communication skills",
        "Professional demeanor",
        "Computer proficiency",
        "Multi-tasking ability"
      ]
    }
  ];

  const benefits = [
    { name: "Health & Dental Insurance" },
    { name: "Paid Time Off" },
    { name: "Tool Allowance" },
    { name: "Ongoing Training & Certifications" },
    { name: "Competitive Hourly Rates" },
    { name: "Climate-Controlled Shop" },
    { name: "Modern Equipment" },
    { name: "Performance Bonuses" }
  ];

  return (
    <main className="min-h-screen bg-bg-main text-txt-primary font-body selection:bg-primary selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/careers_hero_rivian_shop.png" // Generated Image
            alt="Modern Auto Repair Shop with Rivian"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <h1 className="font-heading text-6xl md:text-8xl mb-6">
            JOIN THE <span className="text-primary">FUTURE</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light text-slate-200">
            Be part of Jacksonville's premier Rivian-certified collision center. 
            Work with cutting-edge EV technology while building your career.
          </p>
          <Link 
            href="#openings" 
            className="inline-block px-10 py-4 bg-primary hover:bg-primary-hover text-white font-tech font-bold tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            VIEW OPEN POSITIONS
          </Link>
        </div>
      </section>

      {/* 2. WHY WORK WITH US */}
      <section className="py-24 bg-bg-main">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl mb-4 text-txt-primary">WHY CHOOSE <span className="text-primary">REVIVE RENEW RESTORE?</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Electric Vehicle Expertise",
                text: "Work exclusively with Rivian's revolutionary EV platform and become a certified expert in the future of automotive repair."
              },
              {
                title: "Ongoing Training",
                text: "Continuous education and certification opportunities to keep your skills cutting-edge in EV collision repair."
              },
              {
                title: "Modern Facility",
                text: "State-of-the-art equipment and tools in a clean, professional environment designed for precision EV work."
              },
              {
                title: "Competitive Compensation",
                text: "Top-tier pay, comprehensive benefits, and tool allowances that reward your expertise."
              },
              {
                title: "Family Culture",
                text: "Locally owned and operated with a team-first approach. Your success is our success."
              },
              {
                title: "Career Growth",
                text: "Clear advancement paths and opportunities to specialize in emerging EV technologies."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-border-theme rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  ★
                </div>
                <h3 className="font-heading text-2xl mb-3 text-txt-primary">{item.title}</h3>
                <p className="text-txt-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURRENT OPENINGS */}
      <section id="openings" className="py-24 bg-bg-section">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-4xl mb-12 text-center text-txt-primary">OPEN <span className="text-primary">POSITIONS</span></h2>

          <div className="space-y-6">
            {positions.map((pos, i) => (
              <div key={i} className="bg-white border border-border-theme rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => togglePosition(pos.title)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <h3 className="font-heading text-2xl text-txt-primary">{pos.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold font-tech tracking-wider rounded-full">
                      FULL TIME
                    </span>
                  </div>
                  <span className={`transform transition-transform duration-300 text-primary text-xl ${activePosition === pos.title ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {/* Accordion Content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activePosition === pos.title ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 border-t border-dashed border-border-theme">
                    <p className="text-txt-secondary mb-6 mt-4 leading-relaxed">
                      {pos.description}
                    </p>
                    
                    <h4 className="font-tech text-sm font-bold text-txt-primary mb-4 tracking-wide uppercase">Requirements:</h4>
                    <ul className="space-y-2 mb-8">
                      {pos.requirements.map((req, r) => (
                        <li key={r} className="flex items-start gap-3 text-sm text-txt-secondary">
                          <CheckIcon />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href="#application-form"
                      className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors rounded"
                    >
                      APPLY NOW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS & PERKS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative BG pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-heading text-4xl mb-12 text-center">WHAT WE <span className="text-black/50">OFFER</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-colors flex items-center justify-center">
                <h3 className="font-bold text-sm md:text-base tracking-wide">{benefit.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM */}
      <section id="application-form" className="py-24 bg-bg-main">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl mb-4 text-txt-primary">READY TO <span className="text-primary">JOIN OUR TEAM?</span></h2>
            <p className="text-txt-secondary">Fill out the form below and we'll be in touch soon.</p>
          </div>

          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-border-theme">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-txt-secondary uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full bg-bg-section border border-border-theme rounded p-3 focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-txt-secondary uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full bg-bg-section border border-border-theme rounded p-3 focus:border-primary focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-txt-secondary uppercase tracking-wider">Phone <span className="text-red-500">*</span></label>
                <input type="tel" required className="w-full bg-bg-section border border-border-theme rounded p-3 focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-txt-secondary uppercase tracking-wider">Position Interested In <span className="text-red-500">*</span></label>
                <select required className="w-full bg-bg-section border border-border-theme rounded p-3 focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select a position...</option>
                  <option value="technician">Collision Repair Technician</option>
                  <option value="painter">Auto Body Painter</option>
                  <option value="estimator">Estimator</option>
                  <option value="csr">Customer Service Representative</option>
                  <option value="other">Other/General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-txt-secondary uppercase tracking-wider">Resume Upload (PDF/DOC) <span className="text-red-500">*</span></label>
              <div className="border-2 border-dashed border-border-theme rounded-lg p-6 text-center hover:border-primary/50 transition-colors bg-bg-section">
                <input type="file" accept=".pdf,.doc,.docx" required className="hidden" id="resume-upload" />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <span className="block text-primary font-bold mb-1">Click to Upload Resume</span>
                  <span className="text-xs text-txt-secondary">or drag and drop here</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-txt-secondary uppercase tracking-wider">Tell Us About Your Experience</label>
              <textarea maxLength={500} rows={4} className="w-full bg-bg-section border border-border-theme rounded p-3 focus:border-primary focus:outline-none transition-colors" placeholder="Briefly describe your relevant experience..."></textarea>
              <p className="text-right text-xs text-txt-secondary">Max 500 characters</p>
            </div>

            <button type="submit" className="w-full bg-primary py-4 font-tech font-bold text-white tracking-widest hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all duration-300 rounded transform hover:-translate-y-0.5">
              SUBMIT APPLICATION
            </button>
            
            <p className="text-center text-xs text-txt-secondary pt-4">
              By submitting this form, you agree to our privacy policy. We will contact you within 3-5 business days.
            </p>
          </form>
        </div>
      </section>

    </main>
  );
}

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
  const [appForm, setAppForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resumeFile: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const togglePosition = (title: string) => {
    if (activePosition === title) {
      setActivePosition(null);
    } else {
      setActivePosition(title);
    }
  };

  const positions = [
    {
      title: "Body Repair Technician",
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
      title: "EV Technician",
      description: "Specialized technician to handle EV-specific diagnostic and electrical work. Training provided on electric vehicle systems, battery management, and high-voltage safety protocols.",
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

          {/* APPLICATION FORM */}
          <section id="application-form" className="mt-12 bg-white p-8 rounded-2xl border border-border-theme shadow-sm max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl mb-2 text-txt-primary text-center">READY TO JOIN OUR TEAM?</h3>
            <p className="text-center text-sm text-txt-secondary mb-6">Fill out the form below and we'll be in touch soon.</p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={async (e) => {
              e.preventDefault();
              setSubmitting(true);
              setSubmitMessage(null);
              try {
                // prepare resume as base64 if present
                let resumeBase64 = null;
                let resumeFilename = null;
                if (appForm.resumeFile) {
                  resumeFilename = appForm.resumeFile.name;
                  const arrBuf = await appForm.resumeFile.arrayBuffer();
                  const b64 = Buffer.from(arrBuf).toString('base64');
                  resumeBase64 = b64;
                }

                const resp = await fetch('/api/apply', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: appForm.name,
                    email: appForm.email,
                    phone: appForm.phone,
                    position: appForm.position,
                    experience: appForm.experience,
                    resumeBase64,
                    resumeFilename,
                  })
                });

                const data = await resp.json();
                if (!resp.ok) throw new Error(data?.error || 'Submission failed');
                setSubmitMessage('Application submitted — thank you!');
                setAppForm({ name: '', email: '', phone: '', position: '', experience: '', resumeFile: null });
              } catch (err: any) {
                setSubmitMessage(err?.message || 'Submission error');
              } finally {
                setSubmitting(false);
              }
            }}>
              <div className="col-span-1">
                <label className="text-xs font-tech text-slate-500">NAME *</label>
                <input value={appForm.name} onChange={(e) => setAppForm({...appForm, name: e.target.value})} className="w-full mt-1 p-3 border border-slate-200 rounded" required />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-tech text-slate-500">EMAIL *</label>
                <input type="email" value={appForm.email} onChange={(e) => setAppForm({...appForm, email: e.target.value})} className="w-full mt-1 p-3 border border-slate-200 rounded" required />
              </div>

              <div className="col-span-1">
                <label className="text-xs font-tech text-slate-500">PHONE *</label>
                <input value={appForm.phone} onChange={(e) => setAppForm({...appForm, phone: e.target.value})} className="w-full mt-1 p-3 border border-slate-200 rounded" required />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-tech text-slate-500">POSITION INTERESTED IN *</label>
                <select value={appForm.position} onChange={(e) => setAppForm({...appForm, position: e.target.value})} className="w-full mt-1 p-3 border border-slate-200 rounded" required>
                  <option value="">Select a position...</option>
                  {positions.map((p) => (<option key={p.title} value={p.title}>{p.title}</option>))}
                </select>
              </div>

              <div className="col-span-2">
                <label className="text-xs font-tech text-slate-500">RESUME UPLOAD (PDF/DOC) *</label>
                <div className="mt-2">
                  <label 
                    className={`block border-2 border-dashed rounded p-6 text-center cursor-pointer transition-colors ${
                      isDragging ? 'border-electric-blue bg-blue-50' : 'border-slate-200 hover:border-electric-blue'
                    }`}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        const file = e.dataTransfer.files[0];
                        if (file.type === "application/pdf" || file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
                           setAppForm({...appForm, resumeFile: file});
                        } else {
                           alert("Please upload a PDF or Word document.");
                        }
                      }
                    }}
                  >
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setAppForm({...appForm, resumeFile: e.target.files ? e.target.files[0] : null})} required={!appForm.resumeFile} />
                    <div className="text-electric-blue">Click to Upload Resume</div>
                    <div className="text-slate-400 text-sm">or drag and drop here</div>
                    <div className="text-xs text-slate-500 mt-2">{appForm.resumeFile?.name || ''}</div>
                  </label>
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-xs font-tech text-slate-500">TELL US ABOUT YOUR EXPERIENCE</label>
                <textarea value={appForm.experience} onChange={(e) => setAppForm({...appForm, experience: e.target.value})} rows={5} maxLength={500} className="w-full mt-1 p-3 border border-slate-200 rounded" placeholder="Briefly describe your relevant experience..."></textarea>
              </div>

              <div className="col-span-2 flex items-center justify-between">
                <button type="submit" disabled={submitting} className="bg-electric-blue text-white px-6 py-3 rounded font-bold hover:shadow-lg transition-all">{submitting ? 'Submitting…' : 'SUBMIT APPLICATION'}</button>
                <div className="text-xs text-slate-400">By submitting this form, you agree to our privacy policy.</div>
              </div>

              {submitMessage && (
                <div className="col-span-2 text-center text-sm mt-2">{submitMessage}</div>
              )}
            </form>
          </section>
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



    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEstimateModal } from "@/context/EstimateModalContext";

export default function AboutPage() {
  const { openModal } = useEstimateModal();

  return (
    <main className="min-h-screen bg-bg-main text-txt-primary font-body selection:bg-primary selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about_owners_hero.png" 
            alt="Tony and Anita Laury - Owners of Revive Renew Restore"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay - Darker gradient for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-xs font-tech tracking-[0.2em] mb-6">
            ESTABLISHED 2025
          </span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6 drop-shadow-lg">
            OUR <span className="text-primary">STORY</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light text-slate-200 leading-relaxed drop-shadow-md">
            Built on faith, precision, and a commitment to excellence. 
            Meet the team redefining collision repair in Jacksonville.
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDERS STORY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div className="prose prose-lg text-txt-secondary leading-relaxed text-lg md:text-xl font-semibold">
                <p>
                  Anthony (Tony) and Anita Laury have always believed that the best solutions come from real-world challenges. When lengthy repair times began hampering their business operations, Tony didn't just complain—he designed the solution.
                </p>
                <p>
                  That's how Revive, Renew & Restore was born.
                </p>
                <p>
                  What started as a way to solve their own vehicle efficiency problems has evolved into Jacksonville's premier destination for high-tech EV collision repair. Tony and Anita built their business on a simple principle: "Success Fosters Growth." By combining cutting-edge technology with unwavering commitment to quality and service, they've created more than just a repair shop—they've built a trusted partner for businesses and individuals who demand excellence.
                </p>
                <p>
                  Today, Revive, Renew & Restore stands as proof that when you identify a real need and commit to solving it the right way, success naturally follows.
                </p>
              </div>

              <div className="mt-8">
                <Image 
                  src="/tony_consult.webp" 
                  alt="Tony Consulting - Revive Renew Restore"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

            </div>

            {/* Image / Quote Side */}
            <div className="relative">
              <div className="mb-6">
                <Image 
                  src="/chad_van.webp" 
                  alt="Chad Van - Revive Renew Restore"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="relative z-10 bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-xl">
                <svg className="w-12 h-12 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.017 12 12.017 9 12.017 9V7C7.017 7 5 12 5 16V21H14.017ZM20.017 21V18C20.017 16.8954 19.1216 16 18.017 16H15C15.017 12 18.017 9 18.017 9V7C13.017 7 11 12 11 16V21H20.017Z" />
                </svg>
                <blockquote className="font-heading text-2xl md:text-3xl text-slate-800 leading-tight mb-8">
                  "Luke 1:37. For with God nothing shall be impossible."
                </blockquote>
                <div className="space-y-4 text-txt-secondary text-sm leading-relaxed">
                  <p>
                    This is the verse on our company tow truck, and it's the foundation of everything we do.
                  </p>
                  <p>
                    We've seen teammates walk away from accidents unharmed, and we believe our role 
                    goes beyond business. We strive to make a difference as business owners and charitable donors.
                  </p>
                  <p className="font-bold text-primary">
                    Tony and Anita are excited to have God write a page or two of His story using them 
                    in their history-making roles at Revive, Renew, & Restore!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 CERTIFICATIONS */}
      <section className="py-20 bg-white border-b border-border-theme">
        <div className="container mx-auto px-6">
          <h3 className="text-center font-heading text-2xl text-txt-primary mb-12">
            PROUD PARTNER OF <span className="text-primary">RIVIAN</span>
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-border-theme shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image 
                src="/Rivian_CFC_Logo_1.png" 
                alt="Rivian CFC Certification"
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-theme shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image 
                src="/Rivian_CCC_White_background.png" 
                alt="Rivian CCC Certification"
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VALUES */}
      <section className="py-24 bg-bg-section border-y border-border-theme">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-heading text-4xl text-txt-primary mb-8">
            OUR <span className="text-primary">MISSION</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed mb-12">
            "To provide top-notch auto body repair services that exceed our customers' expectations. 
            We believe in quality workmanship and exceptional customer service to get you back on the road safely."
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl border border-border-theme shadow-sm hover:border-primary/50 transition-colors">
              <h3 className="font-bg-body font-bold text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Precision
              </h3>
              <p className="text-txt-secondary text-sm">
                Factory-trained technicians using Rivian-certified jigs and laser measuring systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-theme shadow-sm hover:border-primary/50 transition-colors">
              <h3 className="font-bg-body font-bold text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Faith
              </h3>
              <p className="text-txt-secondary text-sm">
                Guided by strong values, integrity, and a desire to serve our community and team.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border-theme shadow-sm hover:border-primary/50 transition-colors">
              <h3 className="font-bg-body font-bold text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Innovation
              </h3>
              <p className="text-txt-secondary text-sm">
                Born from the high-pressure world of logistics, optimized for the electric future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-txt-primary mb-6">
            EXPERIENCE THE <span className="text-primary">DIFFERENCE</span>
          </h2>
          <p className="text-txt-secondary max-w-2xl mx-auto mb-10">
            Whether you need a structural repair on your R1T or just need to get back on the road 
            after a minor accident, Tony and Anita's team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openModal}
              className="px-10 py-4 bg-primary text-white font-tech font-bold tracking-widest hover:bg-primary-hover shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded"
            >
              START YOUR ESTIMATE
            </button>
            <Link 
              href="/careers"
              className="px-10 py-4 border-2 border-slate-200 text-slate-700 font-tech font-bold tracking-widest hover:border-primary hover:text-primary transition-all duration-300 rounded"
            >
              JOIN OUR TEAM
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

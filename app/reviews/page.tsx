"use client";

import Image from "next/image";
import { useState } from "react";
import { useEstimateModal } from "@/context/EstimateModalContext";

// --- Types ---
type Review = {
  id: string;
  author: string;
  role: string; // e.g., "Rivian R1S Owner"
  location: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  hasMedia: "photo" | "video" | "none";
  mediaSrc?: string;
};

// --- Mock Data ---
const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Andrew Collins",
    role: "Rivian Owner",
    location: "Jacksonville, FL",
    date: "Google Review",
    rating: 5,
    title: "Rivian Service Center Recommended",
    content: "I damaged my Rivian truck and was looking for a local repair shop... After contacting the service center in Orlando, they recommended Revive, Renew and Restore. From start to finish, Tony and his entire team were a pleasure to deal with and kept me up to date... The quality of the workmanship... and the customer service were top notch. To anyone with a Rivian... this is the place to go – you will not be disappointed.",
    hasMedia: "photo",
    mediaSrc: "/review_repaired_rivian.png" 
  },
  {
    id: "2",
    author: "James McGovern",
    role: "Rivian Owner",
    location: "Jacksonville, FL",
    date: "Google Review",
    rating: 5,
    title: "Rivian Exclusive Collision Center!",
    content: "When I heard that we had a new Rivian-certified Collision Center in Jax... I had to check it out. Everyone on the team that I spoke with was great... and the best part, their Collision Center ONLY services Rivians. No other consumer brands, period. Wild.",
    hasMedia: "none"
  },
  {
    id: "3",
    author: "Gary Moreau",
    role: "Rivian Owner",
    location: "Jacksonville, FL",
    date: "Google Review",
    rating: 5,
    title: "Secure & Professional Service",
    content: "Had Rivian serviced and recall completed. Shop is not in a great part of town but very secure I would not hesitate sending my wife there. Office/ waiting room was very nice along with people working there. Repair & service was on time. I highly recommend them",
    hasMedia: "none"
  },
  {
    id: "4",
    author: "Harold Riley",
    role: "Truck Owner",
    location: "Jacksonville, FL",
    date: "Google Review",
    rating: 5,
    title: "Perfect Paint Match",
    content: "Took my truck in to have the fuel door fixed ended up having it replaced. The paint and body work that was performed around the fuel door and the fuel door paint matched perfectly. Very satisfied, very professional people.",
    hasMedia: "none"
  },
  {
    id: "5",
    author: "Scott Hurst",
    role: "Rivian Owner",
    location: "Jacksonville, FL",
    date: "Google Review",
    rating: 5,
    title: "Professional Insurance Handling",
    content: "Had my Rivian Windshield replaced. They were professional and dealt with a number of insurance issues to get my work done!",
    hasMedia: "none"
  }
];

// --- Components ---

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const { openModal } = useEstimateModal();
  const [filter, setFilter] = useState("All");

  return (
    <main className="min-h-screen bg-bg-main text-txt-primary font-body selection:bg-primary selection:text-white pt-20">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-xs font-tech tracking-[0.2em] mb-6 text-electric-blue">
            CLIENT STORIES
          </span>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">
            TRUSTED BY <span className="text-white">DRIVERS</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
             Don't just take our word for it. See why Rivian, Tesla, and Lucid owners 
             trust RRR with their vehicles.
          </p>
          
          <div className="mt-12 flex justify-center gap-8 text-center">
            <div>
              <div className="font-heading text-4xl text-white">5.0</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Average Rating</div>
            </div>
            <div className="w-px bg-slate-700"></div>
            <div>
              <div className="font-heading text-4xl text-white">500+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">EVs Restored</div>
            </div>
            <div className="w-px bg-slate-700"></div>
            <div>
              <div className="font-heading text-4xl text-white">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reviews Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          
          {/* Mock filters (visual only for now) */}
          <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
            {["All", "Collision Repair", "Paint Work", "PDR", "Restoration"].map((f) => (
              <button 
                key={f}
                className={`px-6 py-2 rounded-full text-sm font-tech tracking-wider transition-all ${
                  filter === (f === "All" ? "All" : f) // Simplified logic for demo
                  ? "bg-primary text-white shadow-lg" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-primary/50"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                
                {/* Media Section */}
                {review.hasMedia === "photo" && review.mediaSrc && (
                  <div className="relative h-56 w-full bg-slate-100 group cursor-pointer">
                    <Image 
                      src={review.mediaSrc} 
                      alt="Vehicle Repair Result" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs py-1 px-3 rounded-full font-tech">
                      XYZ-123 • RIVIAN
                    </div>
                  </div>
                )}
                
                {review.hasMedia === "video" && (
                  <div className="relative h-56 w-full bg-slate-900 flex items-center justify-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                      Watch Testimonial
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{review.author}</h3>
                      <p className="text-xs text-primary font-medium uppercase tracking-wide">{review.role}</p>
                    </div>
                    <span className="text-xs text-slate-400">{review.date}</span>
                  </div>

                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  <h4 className="font-heading text-xl mb-3">{review.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    "{review.content}"
                  </p>

                  <div className="pt-6 border-t border-slate-100 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-slate-500">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <h3 className="font-heading text-3xl mb-6">READY TO RESTORE YOUR EV?</h3>
             <button 
               onClick={openModal}
               className="px-8 py-4 bg-primary text-white font-tech font-bold tracking-widest hover:bg-primary-hover shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded"
              >
                GET YOUR ESTIMATE
              </button>
          </div>

        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              {/* Huge Footer Logo (160px) */}
              <div className="h-32 w-32 md:h-40 md:w-40 shrink-0 rounded-full border-[6px] border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,163,224,0.15)] transition-shadow duration-500">
                 <img src="/Revive_renew_restore_logo.png" alt="Revive Renew Restore" className="w-full h-full object-contain p-2" />
              </div>
              
              <div className="text-center md:text-left pt-4">
                <span className="font-heading text-3xl md:text-5xl tracking-wide text-slate-900 block mb-4 drop-shadow-sm">
                  REVIVE<span className="text-electric-blue">.</span> RENEW<span className="text-slate-400">.</span><br/>
                  RESTORE<span className="text-electric-blue">.</span>
                </span>
                <p className="font-body text-slate-600 max-w-sm leading-relaxed mx-auto md:mx-0 font-medium">
                  Jacksonville's premier Rivian-Certified collision center. 
                  Where precision engineering meets master craftsmanship.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-tech text-slate-900 mb-6 tracking-widest font-bold">CONTACT</h4>
            <ul className="space-y-4 font-body text-slate-600 text-sm font-medium">
              <li className="hover:text-electric-blue cursor-pointer transition-colors">4150 Springrove St<br/>Jacksonville, FL 32209</li>
              <li className="hover:text-electric-blue cursor-pointer transition-colors">(904) 512-2688</li>
              <li className="hover:text-electric-blue cursor-pointer transition-colors">reviverenewrestorebodyshop@gmail.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-tech text-slate-900 mb-6 tracking-widest font-bold">HOURS</h4>
            <ul className="space-y-4 font-body text-slate-600 text-sm font-medium">
              <li className="flex justify-between border-b border-slate-200/50 pb-2"><span>Mon - Fri</span> <span className="text-slate-900 font-bold">8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between border-b border-slate-200/50 pb-2"><span>Saturday</span> <span className="text-slate-900 font-bold">By Appt Only</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-slate-500 bg-slate-200 border border-slate-300 px-2 rounded-full text-xs py-0.5 tracking-wider font-bold">CLOSED</span></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-tech font-bold uppercase tracking-wider">
          <p>&copy; 2026 REVIVE RENEW RESTORE INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-electric-blue cursor-pointer transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-electric-blue cursor-pointer transition-colors">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
              <div className="h-32 w-32 md:h-40 md:w-40 shrink-0 rounded-full border-4 border-slate-200 bg-white shadow-2xl">
                 <img src="/Revive_renew_restore_logo.png" alt="Revive Renew Restore" className="w-full h-full object-contain" />
              </div>
              
              <div className="text-center md:text-left pt-4">
                <span className="font-heading text-3xl md:text-5xl tracking-wide text-slate-900 block mb-4">
                  REVIVE<span className="text-electric-blue">.</span> RENEW<span className="text-metallic-silver">.</span><br/>
                  RESTORE<span className="text-electric-blue">.</span>
                </span>
                <p className="font-body text-slate-600 max-w-sm leading-relaxed mx-auto md:mx-0">
                  Jacksonville's premier Rivian-Certified collision center. 
                  Where precision engineering meets master craftsmanship.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-tech text-slate-900 mb-6 tracking-widest">CONTACT</h4>
            <ul className="space-y-4 font-body text-slate-600 text-sm">
              <li className="hover:text-electric-blue cursor-pointer transition-colors">4150 Springrove St<br/>Jacksonville, FL 32209</li>
              <li className="hover:text-electric-blue cursor-pointer transition-colors">(904) 555-0123</li>
              <li className="hover:text-electric-blue cursor-pointer transition-colors">estimates@revive.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-tech text-slate-900 mb-6 tracking-widest">HOURS</h4>
            <ul className="space-y-4 font-body text-slate-600 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-slate-900">8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="text-slate-900">By Appt Only</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-white bg-slate-800 px-2 rounded text-xs py-0.5">CLOSED</span></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-tech">
          <p>&copy; 2026 REVIVE RENEW RESTORE INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-slate-900 cursor-pointer">PRIVACY</span>
            <span className="hover:text-slate-900 cursor-pointer">TERMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

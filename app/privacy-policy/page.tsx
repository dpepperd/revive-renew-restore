"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-body selection:bg-electric-blue selection:text-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
          
          <h1 className="font-heading text-4xl md:text-5xl text-slate-900 mb-4 drop-shadow-sm">PRIVACY <span className="text-electric-blue">POLICY</span></h1>
          <p className="text-slate-500 font-tech tracking-widest text-sm uppercase mb-12 border-b border-slate-100 pb-8">
            Effective Date: {currentDate}
          </p>

          <div className="prose prose-lg text-slate-600 font-medium leading-relaxed prose-headings:font-heading prose-headings:text-slate-900 prose-a:text-electric-blue hover:prose-a:text-blue-700 mx-auto w-full max-w-none">
            
            <p>
              <strong>Revive Renew Restore Inc.</strong> (“we,” “our,” or “us”) respects your privacy and is committed to protecting the information you provide through our website.
            </p>
            <p>
              This Privacy Policy explains what information we collect and how we use it.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Information We Collect</h2>
            <p>When you visit our website or submit information through our forms or chatbot, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Vehicle or service details submitted through our estimate form</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <p>
              We may also collect limited technical information such as browser type, device type, IP address, and pages visited for website performance and security purposes.
            </p>

            <h2 className="text-2xl mt-12 mb-6">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Respond to inquiries</li>
              <li>Provide service estimates</li>
              <li>Schedule appointments</li>
              <li>Communicate about services</li>
              <li>Improve our website and customer experience</li>
            </ul>
            <p className="font-bold text-slate-800 bg-slate-100 p-4 rounded-lg border-l-4 border-electric-blue my-8">
              We do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Website Analytics</h2>
            <p>
              We may use analytics tools (such as Google Analytics or similar services) to understand how visitors use our website. These tools collect non-personal information such as pages visited, time on site, and general location data.
            </p>
            <p>
              This information is used solely to improve website performance and marketing effectiveness.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Data Security</h2>
            <p>
              We take reasonable technical and administrative measures to protect your information. However, no method of internet transmission or electronic storage is completely secure.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Your Choices</h2>
            <p>
              You may contact us at any time to request access to, correction of, or deletion of your personal information that we have collected through this website.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Contact Information</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <address className="not-italic bg-slate-50 border border-slate-200 p-6 rounded-xl mt-6 inline-block w-full sm:w-auto overflow-hidden">
              <strong className="text-slate-900 block mb-2 font-heading text-xl">Revive Renew Restore Inc.</strong>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <div>
                   <span className="block text-slate-500 font-tech text-xs tracking-widest mt-2 uppercase">Email</span>
                   <a href="mailto:reviverenewrestorebodyshop@gmail.com" className="hover:underline">reviverenewrestorebodyshop@gmail.com</a>
                </div>
                <div>
                   <span className="block text-slate-500 font-tech text-xs tracking-widest mt-2 uppercase">Phone</span>
                   <a href="tel:+19045122688" className="hover:underline">(904) 512-2688</a>
                </div>
                <div>
                   <span className="block text-slate-500 font-tech text-xs tracking-widest mt-2 uppercase">Address</span>
                   4150 Springrove St<br />
                   Jacksonville, FL 32209
                </div>
              </div>
            </address>

          </div>
        </div>
      </div>
    </main>
  );
}

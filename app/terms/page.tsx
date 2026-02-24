"use client";

import Link from "next/link";

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-body selection:bg-electric-blue selection:text-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
          
          <h1 className="font-heading text-4xl md:text-5xl text-slate-900 mb-4 drop-shadow-sm">TERMS OF <span className="text-electric-blue">USE</span></h1>
          <p className="text-slate-500 font-tech tracking-widest text-sm uppercase mb-12 border-b border-slate-100 pb-8">
            Effective Date: {currentDate}
          </p>

          <div className="prose prose-lg text-slate-600 font-medium leading-relaxed prose-headings:font-heading prose-headings:text-slate-900 prose-a:text-electric-blue hover:prose-a:text-blue-700 mx-auto w-full max-w-none">
            
            <p>
              Welcome to <strong>Revive Renew Restore Inc.</strong> (“we,” “our,” or “us”). By accessing or using our website, you agree to the following terms and conditions.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Website Use</h2>
            <p>
              This website is provided for informational purposes and to allow users to request service estimates, contact us, or learn about our services.
            </p>
            <p>You agree to use this website only for lawful purposes and not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorized access to the website</li>
              <li>Interfere with website functionality</li>
              <li>Use the website for spam or abusive purposes</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-6">No Professional Advice</h2>
            <p>
              Information provided on this website is for general informational purposes only and does not constitute professional, legal, or financial advice.
            </p>
            <p className="font-bold text-slate-800 bg-slate-100 p-4 rounded-lg border-l-4 border-slate-300 my-8">
              Service estimates provided through the website are preliminary and subject to inspection and confirmation.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Estimates and Pricing</h2>
            <p>
              Any pricing or estimates provided through this website, contact forms, or chatbot are non-binding and subject to change based on inspection, materials, labor, and other relevant factors.
            </p>
            <p>
              Final pricing will be confirmed directly by <strong>Revive Renew Restore Inc.</strong>
            </p>

            <h2 className="text-2xl mt-12 mb-6">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, graphics, logos, and design elements, is the property of Revive Renew Restore Inc. and may not be copied, reproduced, or distributed without written permission.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Limitation of Liability</h2>
            <p>
              Revive Renew Restore Inc. is not liable for any damages arising from the use or inability to use this website.
            </p>
            <p>
              We do not guarantee that the website will always be available, secure, or free of errors.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Privacy</h2>
            <p>
              Your use of this website is also governed by our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Use at any time. Updates will be posted on this page with a revised effective date.
            </p>

            <h2 className="text-2xl mt-12 mb-6">Contact Information</h2>
            <p>If you have questions regarding these Terms of Use, please contact:</p>
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
              </div>
            </address>

          </div>
        </div>
      </div>
    </main>
  );
}

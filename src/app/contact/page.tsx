"use client";
import companyData from '@/data/company.json';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 bg-[#0A1128] text-white relative overflow-hidden">
        {/* Subtle noise/texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        {/* Crimson Accent Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8B0000]/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 border-l-2 border-[#D4AF37] pl-4 mb-6"
          >
            <span className="text-slate-300 font-mono text-sm tracking-widest uppercase">Connect</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Contact <span className="text-[#D4AF37]">Us</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Ready to secure your assets? Reach out to our operations team today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#0A1128] mb-8 tracking-tight">Headquarters</h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <div>
                      <strong className="block text-[#0A1128] mb-1 font-mono uppercase tracking-widest text-sm">Address</strong>
                      {companyData.headquarters.address.line1}<br />{companyData.headquarters.address.line2}
                    </div>
                    <div>
                      <strong className="block text-[#0A1128] mb-1 font-mono uppercase tracking-widest text-sm">Phone</strong>
                      {companyData.headquarters.contact.cell}<br />{companyData.headquarters.contact.cell2}<br />{companyData.headquarters.contact.tel}
                    </div>
                    <div>
                      <strong className="block text-[#0A1128] mb-1 font-mono uppercase tracking-widest text-sm">Email</strong>
                      {companyData.headquarters.contact.email}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h2 className="text-3xl font-bold text-[#0A1128] mb-8 tracking-tight">Branches</h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <div>
                      <strong className="block text-[#0A1128] mb-1 font-mono uppercase tracking-widest text-sm">Address</strong>
                      {companyData.address.line1}<br />{companyData.address.line2}
                    </div>
                    <div>
                      <strong className="block text-[#0A1128] mb-1 font-mono uppercase tracking-widest text-sm">Phone</strong>
                      {companyData.contact.cell1}<br />{companyData.contact.tel}
                    </div>
                    <div>
                      <strong className="block text-[#0A1128] mb-1 font-mono uppercase tracking-widest text-sm">Email</strong>
                      {companyData.contact.email}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 bg-white p-10 lg:p-16 border border-[#D4AF37]/30 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-[#0A1128] mb-10 tracking-tight">Send a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0A1128]">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0A1128]">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0A1128]">Message</label>
                  <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors"></textarea>
                </div>
                <button className="w-full bg-[#0A1128] text-[#D4AF37] py-4 font-semibold hover:bg-[#8B0000] hover:text-white transition-all active:scale-95 active:translate-y-[1px]">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Visiting Cards Section */}
      <section className="py-20 bg-[#0A1128] relative overflow-hidden border-t border-[#D4AF37]/20">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-3 border-l-2 border-[#8B0000] pl-4 mb-6">
            <span className="text-[#8B0000] font-mono text-sm tracking-widest uppercase">Executive Team</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">Leadership & Contact Cards</h2>
          <div className="max-w-5xl mx-auto">
            {/* User will drop the visiting cards image here */}
            <div className="relative w-full overflow-hidden border border-[#D4AF37]/30 bg-[#0A1128]/50 shadow-2xl p-2 rounded-none">
              <img
                src="/images/visiting-cards.jpg"
                alt="Akshara Security Visiting Cards"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML += `
                    <div class="py-24 text-center">
                      <p class="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-2">Image Not Found</p>
                      <p class="text-slate-400">Please save your 3-card image as <strong class="text-white">public/images/visiting-cards.jpg</strong></p>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-32 bg-[#0A1128] relative overflow-hidden">
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
            <span className="text-slate-300 font-mono text-sm tracking-widest uppercase">The Foundation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8"
          >
            About <span className="text-[#D4AF37]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed"
          >
            We are Akshara Security Facilities Management. A force dedicated to uncompromised safety and operational excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0A1128] mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              To provide world-class security solutions that empower businesses to operate without fear. We believe that true security is invisible—it operates flawlessly in the background, ensuring peace of mind.
            </p>
            <div className="h-px w-full bg-slate-200 mb-8" />
            <h2 className="text-4xl font-bold text-[#0A1128] mb-6 tracking-tight">Our Approach</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We combine elite human intelligence with rigorous training. Our personnel are not just guards; they are strategic assets trained to de-escalate, protect, and secure.
            </p>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3] bg-[#0A1128] border border-[#D4AF37]/30 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37] z-30 pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37] z-30 pointer-events-none"></div>

            {/* About brand image */}
            <img
              src="/images/about/about-brand.png"
              alt="Akshara Security Brand"
              className="w-full h-full object-cover grayscale mix-blend-lighten opacity-80"
              onError={(e) => {
                // Fallback
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += `
                  <div class="absolute inset-0 opacity-10 bg-[#0A1128]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"></div>
                  <span class="text-[#D4AF37] tracking-widest uppercase font-mono text-sm relative z-10">Add /images/about/about-brand.jpg</span>
                `;
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

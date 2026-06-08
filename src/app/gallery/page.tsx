"use client";
import { motion } from 'framer-motion';
import galleryImages from '@/data/gallery.json';

export default function GalleryPage() {
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
            <span className="text-slate-300 font-mono text-sm tracking-widest uppercase">Portfolio</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Our <span className="text-[#D4AF37]">Gallery</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            A glimpse into our professional security operations and deployment.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {galleryImages.map((filename, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % 12) * 0.05 }} // Stagger up to 12 items
                key={filename}
                className="aspect-square bg-slate-100 border border-[#D4AF37]/20 relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`/images/gallery/${filename}`}
                  alt={`Security Operation ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 md:grayscale md:mix-blend-multiply md:group-hover:grayscale-0 md:group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

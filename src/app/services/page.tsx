"use client";
import services from '@/data/services.json';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target, Eye, Building2, Home as HomeIcon, Factory, Star, UserCheck, Flame, Car, Shield } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "security-guards": ShieldCheck,
  "armed-security": Target,
  "unarmed-security": Eye,
  "event-security": Users,
  "corporate-security": Building2,
  "residential-security": HomeIcon,
  "industrial-security": Factory,
  "vip-protection": Star,
  "bouncer-services": UserCheck,
  "patrol-services": Car,
  "fire-safety": Flame,
};

export default function ServicesPage() {
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
            <span className="text-slate-300 font-mono text-sm tracking-widest uppercase">Expertise</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Our <span className="text-[#D4AF37]">Services</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Comprehensive security solutions tailored to your operational environment.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.id] || Shield;
              return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                key={service.id} 
                className="bg-white p-10 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
              >
                <div className="mb-6 p-4 bg-[#0A1128] inline-flex rounded-none self-start text-[#D4AF37] group-hover:bg-[#8B0000] transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1128] mb-4 group-hover:text-[#8B0000] transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{service.description}</p>
                <ul className="text-sm text-[#0A1128] space-y-3 pt-6 border-t border-slate-100">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#D4AF37] shrink-0 group-hover:bg-[#8B0000] transition-colors" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}

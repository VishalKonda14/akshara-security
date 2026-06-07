"use client";

import Link from "next/link";
import { ShieldCheck, Users, Target, ArrowRight, Eye, Building2, Home as HomeIcon, Factory, Star, UserCheck, Flame, Car, Crosshair } from "lucide-react";
import servicesData from "@/data/services.json";
import { motion } from "framer-motion";

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

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: springTransition }
};

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-[#0A1128] overflow-hidden">
        {/* Subtle noise/texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Crimson Accent Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8B0000]/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-10"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 border-l-2 border-[#D4AF37] pl-4">
              <span className="text-slate-300 font-mono text-sm tracking-widest uppercase">Premium Security Force</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Protecting <br />
              <span className="text-[#D4AF37]">What Matters.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
              We deploy elite, highly-trained security personnel and comprehensive facility management solutions to ensure absolute operational safety.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/services" className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0A1128] px-8 py-4 rounded-none font-semibold text-lg hover:bg-[#B5952F] transition-all active:scale-95 active:translate-y-[1px]">
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-transparent text-white border border-slate-500 px-8 py-4 rounded-none font-semibold text-lg hover:bg-white/5 transition-all active:scale-95 active:translate-y-[1px]">
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <div className="absolute inset-0 bg-[#0A1128] mix-blend-multiply opacity-20 z-10" />
              <img
                src="/images/hero/guard.png"
                alt="Security Professional"
                className="object-cover w-full h-full grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0A1128] to-transparent z-20"></div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37] z-30"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37] z-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators / Stats (High Density, Mono Numbers) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { label: "Years Excellence", value: "15", icon: Target },
              { label: "Active Clients", value: "500", icon: Users },
              { label: "Security Personnel", value: "1,200", icon: ShieldCheck },
              { label: "Sites Secured", value: "850", icon: Crosshair },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col border-t border-[#0A1128]/10 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <stat.icon className="h-5 w-5 text-[#8B0000]" />
                  <h3 className="text-4xl md:text-5xl font-mono font-medium text-[#0A1128] tracking-tight">{stat.value}</h3>
                </div>
                <p className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview (Waterfall Reveals, Clean Layout) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 border-l-2 border-[#8B0000] pl-4 mb-6">
                <span className="text-[#8B0000] font-mono text-sm tracking-widest uppercase">Our Expertise</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-5xl font-bold text-[#0A1128] mb-6 tracking-tight">Capabilities</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 leading-relaxed">
                Comprehensive security architecture tailored to your precise operational environment. We don&apos;t just provide guards; we provide strategic safety.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/services" className="inline-flex items-center gap-2 text-[#0A1128] font-semibold hover:text-[#D4AF37] transition-colors pb-1 border-b-2 border-[#0A1128] hover:border-[#D4AF37]">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {servicesData.slice(0, 6).map((service) => {
              const Icon = iconMap[service.id] || Shield;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  className="group relative bg-white p-10 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-6 p-4 bg-[#0A1128] inline-block rounded-none text-[#D4AF37] group-hover:bg-[#8B0000] transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1128] mb-4 group-hover:text-[#8B0000] transition-colors">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mt-auto">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#0A1128]">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-none bg-[#D4AF37] shrink-0 group-hover:bg-[#8B0000] transition-colors" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

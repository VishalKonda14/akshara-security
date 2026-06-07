"use client";
import careers from '@/data/careers.json';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Join <span className="text-[#F59E0B]">Akshara</span></h1>
          <p className="text-xl text-[#64748B] max-w-2xl font-light">
            We are always looking for committed, high-caliber individuals to enhance our security forces.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="space-y-4">
            {careers.map((job, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                key={job.id} 
                className="p-8 border border-[rgba(226,232,240,0.5)] bg-[#F8FAFC] flex flex-col md:flex-row md:items-start justify-between gap-8 hover:border-[#0F172A] transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-[#64748B] font-mono mb-6 uppercase tracking-widest">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <p className="text-[#64748B] leading-relaxed max-w-2xl">{job.description}</p>
                </div>
                <button className="shrink-0 bg-[#0F172A] text-white px-8 py-4 font-semibold hover:bg-[#F59E0B] transition-all active:scale-95 active:translate-y-[1px] flex items-center justify-center gap-2">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import companyData from '@/data/company.json';

export function Footer() {
  return (
    <footer className="bg-[var(--color-asfm-navy)] text-slate-300 pt-20 pb-10 border-t-4 border-[var(--color-asfm-red)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-asfm-gold)] opacity-5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative h-16 w-14 overflow-hidden flex items-center justify-center bg-white rounded p-1">
                <img 
                  src="/images/logo.png" 
                  alt="ASFM Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/100x120/0B1120/D4AF37?text=ASFM';
                  }}
                />
              </div>
              <div className="flex flex-col border-l-2 border-[var(--color-asfm-gold)] pl-4">
                <span className="font-extrabold text-2xl leading-none text-white tracking-tight">AKSHARA</span>
                <span className="text-[10px] font-bold text-[var(--color-asfm-gold)] uppercase tracking-[0.2em] mt-1">Security Facilities</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              {companyData.name} {companyData.subtitle}. Providing premium, reliable, and professional security solutions for residential, commercial, and industrial sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-400 hover:text-[var(--color-asfm-gold)] transition-colors flex items-center gap-3 group font-medium">
                    <ChevronRight className="h-4 w-4 text-[var(--color-asfm-red)] group-hover:translate-x-1 transition-transform" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-4">
              {['Security Guards', 'Corporate Security', 'Event Security', 'VIP Protection'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-slate-400 hover:text-[var(--color-asfm-gold)] transition-colors flex items-center gap-3 group font-medium">
                    <ChevronRight className="h-4 w-4 text-[var(--color-asfm-red)] group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[var(--color-asfm-gold)] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-slate-300 font-medium">
                  {companyData.headquarters.address.line1}<br />
                  {companyData.headquarters.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[var(--color-asfm-gold)] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-300">{companyData.headquarters.contact.cell}</span>
                  <span className="text-sm font-medium text-slate-300">{companyData.headquarters.contact.cell2}</span>
                  <span className="text-sm font-medium text-slate-300">{companyData.headquarters.contact.tel}</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[var(--color-asfm-gold)] shrink-0" />
                <span className="text-sm font-medium text-slate-300">{companyData.headquarters.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-asfm-navy-light)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-slate-500 hover:text-[var(--color-asfm-gold)] transition-colors cursor-pointer font-medium">Privacy Policy</span>
            <span className="text-sm text-slate-500 hover:text-[var(--color-asfm-gold)] transition-colors cursor-pointer font-medium">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <>
      <div className="bg-[var(--color-asfm-navy)] text-[var(--color-asfm-gold)] py-2 px-4 text-center text-sm font-medium tracking-wide border-b border-[var(--color-asfm-gold)]/20">
        Akshara Facility Management is now <strong className="text-white">Akshara Security Facilities Management</strong>
      </div>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--color-asfm-navy-light)]/10 shadow-sm">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-16 w-14 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <img 
                src="/images/logo.png" 
                alt="ASFM Logo" 
                className="w-full h-full object-contain drop-shadow-md"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/100x120/0B1120/D4AF37?text=ASFM';
                }}
              />
            </div>
            <div className="flex flex-col border-l-2 border-[var(--color-asfm-gold)] pl-4">
              <span className="font-extrabold text-2xl leading-none text-[var(--color-asfm-navy)] tracking-tight">AKSHARA</span>
              <span className="text-[10px] font-bold text-[var(--color-asfm-red)] uppercase tracking-[0.2em] mt-1">Security Facilities</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-[var(--color-asfm-navy-light)] hover:text-[var(--color-asfm-red)] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-[var(--color-asfm-navy)] text-[var(--color-asfm-gold)] border border-[var(--color-asfm-gold)]/30 px-6 py-2.5 rounded text-sm font-bold hover:bg-[var(--color-asfm-gold)] hover:text-white transition-all shadow-lg hover:shadow-xl active:scale-95 uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-[var(--color-asfm-navy)]" onClick={toggleMenu}>
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--color-asfm-navy-light)]/10 p-6 bg-white shadow-inner">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-[var(--color-asfm-navy)] hover:text-[var(--color-asfm-red)] uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[var(--color-asfm-navy)] text-[var(--color-asfm-gold)] px-6 py-4 rounded text-center font-bold mt-4 shadow-md active:scale-95 transition-all uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

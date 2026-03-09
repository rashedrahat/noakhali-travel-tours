"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-black/82 border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-black/42"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[138px] lg:min-h-[112px] py-4 lg:py-4">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-[0.75rem] sm:gap-4 lg:gap-5 group shrink-0"
          >
            <div className="relative flex h-[5.05rem] w-[5.05rem] sm:h-[5.35rem] sm:w-[5.35rem] lg:h-[4.85rem] lg:w-[4.85rem] items-center justify-center rounded-full bg-white/95 shrink-0 transition-transform duration-200 group-hover:scale-[1.02] shadow-[0_16px_40px_rgba(0,0,0,0.34)] ring-1 ring-white/35">
              <Image
                src="/logo-icon.png"
                alt="Noakhali Travel & Tours"
                width={86}
                height={86}
                className="object-contain block"
                priority
                unoptimized
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading block text-white font-extrabold text-[2.08rem] sm:text-[2.26rem] lg:text-[2.2rem] leading-none tracking-tight drop-shadow">
                Noakhali
              </span>
              <span className="font-heading block text-gold text-[0.88rem] sm:text-[0.96rem] lg:text-[0.96rem] font-bold tracking-[0.3em] uppercase leading-none mt-2.5">
                Travel &amp; Tours
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/85 hover:text-white text-base font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+8801740919659"
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-white/80 hover:text-white text-base transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>+880 1740-919659</span>
            </a>
            <a
              href="https://wa.me/8801740919659"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-base px-5 py-3 rounded-xl transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden bg-[#080f1e]/98 border-t border-white/8 shadow-2xl shadow-black/60"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/60 hover:text-white text-base font-medium py-2.5 border-b border-white/8 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="tel:+8801740919659"
                  className="flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm py-2.5 rounded-xl hover:border-gold/60 hover:text-gold transition-colors duration-150"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/8801740919659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm py-2.5 rounded-xl transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

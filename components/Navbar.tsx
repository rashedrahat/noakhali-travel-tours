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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17.5 lg:h-22">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/logo-icon.png"
                alt="Noakhali Travel & Tours"
                width={46}
                height={46}
                className="object-contain block"
                priority
                unoptimized
              />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-extrabold text-xl leading-none tracking-tight drop-shadow">
                Noakhali
              </span>
              <span className="block text-gold text-[11px] font-bold tracking-[0.18em] uppercase leading-none mt-1">
                Travel &amp; Tours
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/85 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
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
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>+880 1740-919659</span>
            </a>
            <a
              href="https://wa.me/8801740919659"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-whatsapp/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#080f1e]/97 backdrop-blur-2xl border-t border-white/8 overflow-hidden shadow-2xl shadow-black/60"
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
                  className="flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm py-2.5 rounded-xl hover:border-gold/60 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/8801740919659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

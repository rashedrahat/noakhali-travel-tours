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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${
        scrolled
          ? "bg-navy/92 backdrop-blur-md border-b border-white/10 shadow-lg shadow-navy/20"
          : "bg-black/30"
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
            <div
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
              style={{ boxShadow: "0 0 16px 4px rgba(201,148,26,0.55), 0 0 6px 1px rgba(201,148,26,0.35)" }}
            >
              <Image
                src="/logo-icon.png"
                alt="Noakhali Travel & Tours"
                width={48}
                height={48}
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
            className="lg:hidden bg-navy/96 backdrop-blur-md border-t border-white/10 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/75 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="tel:+8801740919659"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white text-sm py-2.5 rounded-lg hover:border-gold hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/8801740919659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
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

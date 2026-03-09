"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, MessageCircle, ArrowUp } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Hajj & Umrah Package",
  "Visa Processing",
  "Air Ticketing",
  "Student Visa",
  "E-Passport",
  "Document Translation",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080f1e] text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,148,26,0.05) 0%, transparent 70%)" }}
      />

      {/* Gold accent divider */}
      <div className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo-icon.png"
                alt="Noakhali Travel & Tours"
                width={51}
                height={51}
                className="object-contain"
                unoptimized
              />
              <div className="leading-tight">
                <span className="font-heading block text-white font-bold text-[1.24rem] leading-none">Noakhali</span>
                <span className="font-heading block text-gold text-[12px] font-semibold tracking-widest uppercase leading-none mt-0.5">Travel &amp; Tours</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your Trusted Partner for Visa, Travel, and Official Documentation.
              Serving clients from Noakhali and beyond.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=61588365380686"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-gold hover:text-navy text-white/45 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801740919659"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-gold hover:text-navy text-white/45 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+8801740919659"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-gold hover:text-navy text-white/45 flex items-center justify-center transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white/30 mb-5 text-xs tracking-[0.18em] uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/50 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/25 group-hover:bg-gold group-hover:w-6 transition-all duration-300 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white/30 mb-5 text-xs tracking-[0.18em] uppercase">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="text-white/50 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/25 group-hover:bg-gold group-hover:w-6 transition-all duration-300 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white/30 mb-5 text-xs tracking-[0.18em] uppercase">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+8801740919659"
                className="flex items-start gap-3 text-white/50 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-sm">+880 1740-919659</span>
              </a>
              <a
                href="mailto:noakhalitraveltours@gmail.com"
                className="flex items-start gap-3 text-white/50 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-sm break-all">noakhalitraveltours@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/35">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Baitul Aman Court Masjid Market, 3rd Floor, Room No-427,
                  D.C. Office Road, Maijdee Court-3800, Noakhali
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Noakhali Travel &amp; Tours. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 text-white/30 hover:text-gold text-sm transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg bg-white/8 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

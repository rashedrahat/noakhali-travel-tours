"use client";

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
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo-icon.png"
                alt="Noakhali Travel & Tours"
                width={48}
                height={48}
                className="object-contain drop-shadow-md"
                unoptimized
              />
              <div className="leading-tight">
                <span className="block text-white font-bold text-lg leading-none">Noakhali</span>
                <span className="block text-gold text-[11px] font-semibold tracking-widest uppercase leading-none mt-0.5">Travel &amp; Tours</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your Trusted Partner for Visa, Travel, and Official Documentation.
              Serving clients from Noakhali and beyond.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61588365380686"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-navy text-white/70 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801740919659"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-navy text-white/70 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+8801740919659"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-navy text-white/70 flex items-center justify-center transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-gold/40 group-hover:bg-gold group-hover:w-6 transition-all duration-300 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-gold/40 group-hover:bg-gold group-hover:w-6 transition-all duration-300 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+8801740919659"
                className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-gold" />
                <span className="text-sm">+880 1740-919659</span>
              </a>
              <a
                href="mailto:noakhalitraveltours@gmail.com"
                className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-gold" />
                <span className="text-sm break-all">noakhalitraveltours@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Noakhali Travel &amp; Tours. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

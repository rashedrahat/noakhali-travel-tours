"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, CheckCircle2, Star } from "lucide-react";

const highlights = [
  "Licensed & registered travel agency in Noakhali",
  "Expert team with years of experience",
  "Trusted by hundreds of satisfied clients",
  "Full-service documentation & visa support",
  "Transparent pricing — no hidden charges",
  "Quick turnaround for all document services",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute -top-40 -left-40 w-md h-112 rounded-full bg-navy/3 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gold/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-gold/10 text-gold-dark text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-6 border border-gold/15">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight tracking-tight">
              Your Trusted Gateway to{" "}
              <span className="gradient-text">the World</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Noakhali Travel &amp; Tours is a professional travel and documentation agency
              located in the heart of Noakhali, Bangladesh. We are committed to making
              your travel and visa journey as smooth and stress-free as possible.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Whether you&apos;re planning a spiritual journey for Hajj or Umrah, applying
              for an international visa, or need official document processing — our
              experienced team is here to guide you every step of the way.
            </p>

            {/* Highlights — staggered */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.5, ease: "easeOut" }}
              className="mt-10 p-5 bg-surface rounded-2xl border border-navy/8 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-navy mb-1 text-sm">Our Office Location</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Baitul Aman Court Masjid Market, 3rd Floor (Lift-3), Room No-427
                  <br />
                  D.C. Office Road, Maijdee Court-3800
                  <br />
                  Sadar, Noakhali, Bangladesh
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative flex items-center justify-center pt-8 pb-8 px-8 md:px-0"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-navy/8 blur-3xl" />
            </div>

            {/* Main card */}
            <div className="relative w-full max-w-sm">
              <div
                className="rounded-3xl p-8 text-white shadow-2xl shadow-navy/30"
                style={{
                  background: "linear-gradient(135deg, #1B3B6F 0%, #0a1628 100%)",
                }}
              >
                {/* Top border accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent rounded-full" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center">
                    <span className="text-3xl">🕌</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg leading-tight">Noakhali</p>
                    <p className="text-gold text-sm font-medium">Travel &amp; Tours</p>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-8 italic border-l-2 border-gold/50 pl-4">
                  &ldquo;We believe every journey begins with trust. Our mission is to be
                  your most reliable partner — from your first inquiry to your destination.&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/45 text-xs">Trusted by 500+ clients across Bangladesh</p>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-0 right-2 -translate-y-1/2 bg-gold rounded-2xl shadow-xl shadow-gold/40 px-4 py-3"
              >
                <p className="text-navy font-black text-2xl leading-none">15+</p>
                <p className="text-navy/70 text-xs font-semibold mt-0.5">Services</p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-2 translate-y-1/2 bg-white rounded-2xl shadow-xl shadow-navy/15 px-4 py-3 border border-navy/8"
              >
                <p className="text-navy font-black text-2xl leading-none">20+</p>
                <p className="text-gray-400 text-xs font-semibold mt-0.5">Countries</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

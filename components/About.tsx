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
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-gold/10 text-gold-dark text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Your Trusted Gateway to{" "}
              <span className="gradient-text">the World</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Noakhali Travel &amp; Tours is a professional travel and documentation agency
              located in the heart of Noakhali, Bangladesh. We are committed to making
              your travel and visa journey as smooth and stress-free as possible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re planning a spiritual journey for Hajj or Umrah, applying
              for an international visa, or need official document processing — our
              experienced team is here to guide you every step of the way.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="mt-10 p-5 bg-surface rounded-2xl border border-navy/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-navy mb-1">Our Office Location</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Baitul Aman Court Masjid Market, 3rd Floor (Lift-3), Room No-427
                  <br />
                  D.C. Office Road, Maijdee Court-3800
                  <br />
                  Sadar, Noakhali, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual card stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center pt-8 pb-8 px-8 md:px-0"
          >
            {/* Main card */}
            <div className="relative w-full max-w-sm">
              <div
                className="rounded-3xl p-8 text-white shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #1B3B6F 0%, #0f2347 100%)",
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <span className="text-3xl">🕌</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg leading-tight">Noakhali</p>
                    <p className="text-gold text-sm font-medium">Travel &amp; Tours</p>
                  </div>
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-8 italic border-l-2 border-gold pl-4">
                  &ldquo;We believe every journey begins with trust. Our mission is to be
                  your most reliable partner — from your first inquiry to your destination.&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/60 text-xs">Trusted by 500+ clients across Bangladesh</p>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-0 right-2 -translate-y-1/2 bg-gold rounded-2xl shadow-xl shadow-gold/30 px-4 py-3"
              >
                <p className="text-navy font-black text-2xl">15+</p>
                <p className="text-navy/80 text-xs font-semibold">Services</p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-2 translate-y-1/2 bg-white rounded-2xl shadow-xl px-4 py-3 border border-navy/10"
              >
                <p className="text-navy font-black text-2xl">20+</p>
                <p className="text-gray-500 text-xs font-semibold">Countries</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

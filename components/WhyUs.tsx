"use client";

import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Users, Layers, HeadphonesIcon, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Licensed & Trusted",
    desc: "Officially registered agency with years of proven track record in visa and travel services.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "We understand your urgency. Our streamlined process ensures minimal delays for all services.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our professionals have deep expertise in immigration, documentation, and travel planning.",
  },
  {
    icon: Layers,
    title: "All-in-One Service",
    desc: "From visa to hotel bookings — we handle every aspect of your travel needs under one roof.",
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    desc: "Your personal documents and information are handled with strict confidentiality and care.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "We stay with you throughout the process — always available on call or WhatsApp for help.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2347 0%, #1B3B6F 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Noakhali Travel{" "}
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We go beyond just processing paperwork — we build lasting relationships
            through trust, expertise, and exceptional service.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 rounded-2xl p-7 transition-all duration-300 hover:bg-white/10 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-all duration-500 blur-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 group-hover:bg-gold/25 flex items-center justify-center mb-5 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gold/10 border border-gold/30 rounded-2xl px-8 py-6">
            <p className="text-white text-lg font-semibold">
              Ready to start your journey?
            </p>
            <a
              href="https://wa.me/8801740919659"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              Get Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

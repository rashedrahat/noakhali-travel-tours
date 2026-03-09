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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-16 sm:py-24 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #1B3B6F 60%, #0f2347 100%)" }}
    >
      {/* Central radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,148,26,0.05) 0%, transparent 70%)" }}
      />
      {/* Top fade from surface */}
      <div className="absolute top-0 inset-x-0 h-16 bg-linear-to-b from-surface/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-gold/15 text-gold text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-4 border border-gold/20">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            The Noakhali Travel{" "}
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            We go beyond just processing paperwork — we build lasting relationships
            through trust, expertise, and exceptional service.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 rounded-2xl p-7 transition-colors duration-300 hover:bg-white/8 overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gold/6 group-hover:bg-gold/12 transition-all duration-500 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-13 h-13 rounded-2xl bg-gold/12 group-hover:bg-gold/22 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20">
                  <reason.icon className="w-6 h-6 text-gold" strokeWidth={1.7} />
                </div>
                <h3 className="font-bold text-white text-base mb-2.5 tracking-tight">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 bg-white/5 border border-white/12 backdrop-blur-sm rounded-3xl px-10 py-7">
            <div>
              <p className="text-white font-semibold text-lg leading-tight">Ready to start your journey?</p>
              <p className="text-white/40 text-sm mt-1">Get in touch — consultation is always free.</p>
            </div>
            <motion.a
              href="https://wa.me/8801740919659"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="bg-gold hover:bg-gold-light text-navy font-bold px-7 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-gold/25 hover:shadow-gold/40 text-sm whitespace-nowrap shrink-0"
            >
              Get Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

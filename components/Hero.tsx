"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Plane, FileText, Users, Globe } from "lucide-react";

const pills = [
  { icon: "🕌", label: "Hajj & Umrah" },
  { icon: "🛂", label: "Visa Processing" },
  { icon: "✈️", label: "Air Ticketing" },
  { icon: "🎓", label: "Student Visa" },
  { icon: "📄", label: "Documentation" },
];

const stats = [
  { icon: Plane, value: "15+", label: "Services" },
  { icon: Globe, value: "20+", label: "Countries" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: FileText, value: "100%", label: "Trusted" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const handleScroll = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0f2347 0%, #1B3B6F 50%, #1a3060 100%)",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements — all clipped inside the section */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: "hidden" }}>
        <div
          className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
          style={{ background: "radial-gradient(circle, #C9941A, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(circle, #C9941A, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #2a5298, transparent)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-28 sm:pb-28 lg:pb-24 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Noakhali&apos;s Most Trusted Travel Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
          >
            Your Trusted Partner for{" "}
            <span className="gradient-text">Visa, Travel</span>
            <br className="hidden sm:block" />
            {" "}&amp; Documentation
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            From Hajj &amp; Umrah packages to international visa processing — we handle
            everything with professionalism and care, right from Noakhali.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-3 mt-2 w-full justify-center"
          >
            <a
              href="tel:+8801740919659"
              className="flex items-center justify-center gap-2 bg-white text-navy font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 text-sm sm:text-base whitespace-nowrap"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/8801740919659"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-navy font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 text-sm sm:text-base whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Service pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 mt-2 max-w-sm sm:max-w-none"
          >
            {pills.map((pill, i) => (
              <motion.span
                key={pill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4, type: "spring" }}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:border-gold/50 hover:bg-white/15 transition-all cursor-default"
              >
                <span>{pill.icon}</span>
                {pill.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 w-full max-w-3xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-6 hover:border-gold/30 transition-all"
            >
              <stat.icon className="w-6 h-6 text-gold" />
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-white/60 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors cursor-pointer"
        aria-label="Scroll to services"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}

"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronDown, Plane, FileText, Users, Globe } from "lucide-react";
import Image from "next/image";

const desktopImages = [
  { src: "/hero/haram-aerial-desktop.png",    pos: "center 35%",    overlay: "medium" },
  { src: "/hero/kaaba-tawaf-desktop.png",     pos: "center center", overlay: "medium" },
  { src: "/hero/madinah-bluehour-desktop.png",pos: "center 40%",    overlay: "light"  },
];

const mobileImages = [
  { src: "/hero/kaaba-arch-mobile.png",       pos: "center center", overlay: "medium" },
  { src: "/hero/kaaba-moon-mobile.png",       pos: "center center", overlay: "medium" },
  { src: "/hero/madinah-minaret-mobile.png",  pos: "center center", overlay: "medium" },
];

const overlayStyles: Record<string, string> = {
  light:  "linear-gradient(to bottom, rgba(10,25,50,0.50) 0%, rgba(10,25,50,0.25) 40%, rgba(10,25,50,0.55) 75%, rgba(10,25,50,0.88) 100%)",
  medium: "linear-gradient(to bottom, rgba(10,25,50,0.62) 0%, rgba(10,25,50,0.38) 40%, rgba(10,25,50,0.62) 75%, rgba(10,25,50,0.90) 100%)",
};

const pills = [
  { icon: "🕌", label: "Hajj & Umrah" },
  { icon: "🛂", label: "Visa Processing" },
  { icon: "✈️", label: "Air Ticketing" },
  { icon: "🎓", label: "Student Visa" },
  { icon: "📄", label: "Documentation" },
];

const stats = [
  { icon: Plane,    value: "15+",  label: "Services" },
  { icon: Globe,    value: "20+",  label: "Countries" },
  { icon: Users,    value: "500+", label: "Clients" },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  const handleScroll = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-svh md:h-svh flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt="Sacred mosque background"
              fill
              className="object-cover"
              style={{ objectPosition: images[currentIndex].pos }}
              priority={currentIndex === 0}
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="sync">
          <motion.div
            key={`overlay-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: overlayStyles[images[currentIndex].overlay] }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(10,25,50,0.30) 0%, transparent 25%, transparent 75%, rgba(10,25,50,0.30) 100%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-14 sm:pb-20 lg:pb-16 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2.5 sm:gap-4 lg:gap-3 w-full"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[1.9rem] leading-[1.1] sm:text-[2.75rem] lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl drop-shadow-lg"
          >
            Your Trusted Partner for
            <br className="hidden sm:block" />
            {" "}<span className="gradient-text whitespace-nowrap">Visa, Travel</span>
            {" "}&amp; Documentation
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-sm sm:text-lg max-w-xl leading-relaxed drop-shadow"
          >
            From Hajj &amp; Umrah packages to international visa processing — we handle
            everything with professionalism and care, right from Noakhali.
          </motion.p>

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Noakhali&apos;s Most Trusted Travel Agency
            </span>
          </motion.div>

          {/* Service pills — infinite marquee */}
          <motion.div
            variants={itemVariants}
            className="w-full overflow-hidden"
          >
            <div className="flex w-max animate-marquee gap-3">
              {[...pills, ...pills].map((pill, i) => (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:border-gold/50 hover:bg-white/15 transition-all cursor-default"
                >
                  <span>{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats — always 4 columns, compact on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-8 lg:mt-6 w-full max-w-3xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 sm:gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl sm:rounded-2xl px-1 py-3 sm:px-4 sm:py-6 hover:border-gold/40 transition-all"
            >
              <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              <span className="text-lg sm:text-3xl font-bold text-white drop-shadow leading-none">{stat.value}</span>
              <span className="text-white/70 text-[10px] sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Slideshow dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex items-center gap-2 mt-3 sm:mt-6 lg:mt-4"
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 h-2 bg-gold"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={handleScroll}
        className="absolute bottom-5 sm:bottom-8 left-0 right-0 flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors cursor-pointer"
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

"use client";

import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Plane,
  Globe,
  GraduationCap,
  Hotel,
  FileText,
  CreditCard,
  Shield,
  BookOpen,
  Building2,
  ScrollText,
  Languages,
  Heart,
  Briefcase,
  FileCheck,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Hajj & Umrah Package",
    desc: "Complete Hajj and Umrah package services with expert guidance and support.",
  },
  {
    icon: MapPin,
    title: "Middle East Visa Processing",
    desc: "Professional Middle East visa application and processing services.",
  },
  {
    icon: Plane,
    title: "Air Ticketing & Hotel Booking",
    desc: "Best-price air tickets and hotel bookings for all destinations worldwide.",
  },
  {
    icon: Globe,
    title: "Package Tours & Travel",
    desc: "Curated domestic and international travel packages for every budget.",
  },
  {
    icon: CreditCard,
    title: "USA/Canada/Europe Visa",
    desc: "Visit and multiple visa applications for USA, Canada, and Europe.",
  },
  {
    icon: Building2,
    title: "China & Thailand Visa",
    desc: "Visit visa file processing for China and Thailand destinations.",
  },
  {
    icon: GraduationCap,
    title: "Student Visa Processing",
    desc: "Complete student visa application support for international universities.",
  },
  {
    icon: FileText,
    title: "E-Passport Processing",
    desc: "Hassle-free e-passport application and renewal processing.",
  },
  {
    icon: Shield,
    title: "Police Clearance Certificate",
    desc: "Quick and reliable PCC processing for all purposes.",
  },
  {
    icon: CreditCard,
    title: "NID Card Processing Support",
    desc: "Assistance with National ID card application and correction services.",
  },
  {
    icon: ScrollText,
    title: "Ministry Attestation",
    desc: "Official Ministry attestation services for all types of documents.",
  },
  {
    icon: Languages,
    title: "Document Translation",
    desc: "Certified translation of personal and official documents in all languages.",
  },
  {
    icon: Heart,
    title: "Nikah Nama Attestation",
    desc: "Professional Nikah Nama attestation and verification services.",
  },
  {
    icon: Briefcase,
    title: "Company Profile Creation",
    desc: "Professional company profile creation for business purposes.",
  },
  {
    icon: FileCheck,
    title: "Ministry License Processing",
    desc: "All types of Ministry license file processing and documentation.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Our Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We provide complete travel, visa, and document support services with
            reliability and care — your one-stop solution in Noakhali.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-6 border-2 border-transparent hover:border-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover gradient bg */}
              <div className="absolute inset-0 bg-linear-to-br from-navy/6 to-navy/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-navy group-hover:text-gold-dark transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-navy text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-4">
            Need a service not listed above? We handle custom documentation too.
          </p>
          <a
            href="https://wa.me/8801740919659"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-whatsapp/30 hover:-translate-y-1"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

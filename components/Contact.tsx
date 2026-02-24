"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Clock } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1740-919659",
    href: "tel:+8801740919659",
    desc: "Click to call us directly",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+880 1740-919659",
    href: "https://wa.me/8801740919659",
    desc: "Chat with us on WhatsApp",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "noakhalitraveltours@gmail.com",
    href: "mailto:noakhalitraveltours@gmail.com",
    desc: "Send us an email anytime",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "noakhali travel & toures service",
    href: "https://www.facebook.com/profile.php?id=61588365380686",
    desc: "Follow us on Facebook",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have questions? Our team is ready to assist you. Reach out via phone,
            WhatsApp, email, or visit our office in Noakhali.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-5 bg-white rounded-2xl p-5 border-2 border-transparent hover:border-gold/30 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-bold text-navy text-sm sm:text-base break-all">
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                </div>
                <div className="text-gray-300 group-hover:text-gold transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}

            {/* Office hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-navy rounded-2xl p-5 flex items-start gap-4 mt-2"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-gold" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Office Hours</p>
                <p className="text-white/60 text-sm">Saturday – Thursday: 9:00 AM – 8:00 PM</p>
                <p className="text-white/60 text-sm">Friday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Map + address */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-navy/10 flex-1 min-h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3!2d91.0990!3d22.8338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUwJzAxLjciTiA5McKwMDUnNTYuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noakhali Travel & Tours Location"
              />
            </div>

            {/* Address card */}
            <div className="bg-white rounded-2xl p-6 border border-navy/10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-bold text-navy text-lg mb-1">Visit Our Office</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Baitul Aman Court Masjid Market
                    <br />
                    3rd Floor (Lift-3), Room No-427
                    <br />
                    D.C. Office Road, Maijdee Court-3800
                    <br />
                    Sadar, Noakhali, Bangladesh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Maijdee+Court+Noakhali+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-navy hover:text-gold font-semibold text-sm transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801740919659"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

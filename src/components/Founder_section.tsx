"use client";

import { motion } from "framer-motion";
import FounderCard from "@/components/FounderCard";
import { ExternalLink, Instagram, Zap, Users, Award } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-20 bg-black relative text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl floating-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Meet The Founder
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="holographic-text">Manish Kumawat</span>
          </h2>
        </motion.div>

        <FounderCard />
      </div>
    </section>
  );
}
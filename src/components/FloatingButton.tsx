"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Rocket } from "lucide-react";

export default function FloatingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full blur-2xl animate-pulse" />
        <a href="tel:8851529420">
          <Button
          size="lg"
          className="relative bg-black/50 backdrop-blur-xl border-2 border-blue-400/50 text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-110 transition-all duration-500 neon-glow pulse-glow"
        >
          <span className="holographic-text flex items-center gap-3">
            <Rocket className="w-8 h-8" />
            Let's Go Viral
          </span>
        </Button></a>
        
      </div>
    </motion.div>
  );
}

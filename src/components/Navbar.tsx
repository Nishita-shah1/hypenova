"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

// Scroll function
const scrollToSection = (sectionId: string) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/80 backdrop-blur-xl border-b border-blue-400/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold"
        >
          <span className="text-white">Hype</span>
          <span className="text-blue-400 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Nova</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <button onClick={() => scrollToSection('results')} className="text-white hover:text-blue-400 transition-colors font-medium">Results</button>
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-400 transition-colors font-medium">Services</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-blue-400 transition-colors font-medium">Pricing</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 transition-colors font-medium">Contact</button>
        </motion.div>
      </div>
    </nav>
  );
}
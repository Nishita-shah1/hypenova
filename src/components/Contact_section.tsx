"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FloatingButton from "@/components/FloatingButton";
import { Instagram, Linkedin, Youtube, Rocket, Zap, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden text-white">
      {/* Floating Holographic Button (as a separate component) */}
      <FloatingButton />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl floating-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to <span className="holographic-text">Transform</span><br/>
            Your Brand?
          </h2>
          
          <p className="text-gray-300 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Join the future of content marketing. Let's create viral content that builds 
            authentic connections and drives exponential growth for your brand.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Button 
                size="lg"
                className="group w-full bg-blue-500 hover:bg-purple-600 text-white px-8 py-6 rounded-2xl text-xl font-bold transition-all duration-500 neon-glow relative overflow-hidden"
                data-testid="button-book-call"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Book Strategy Call
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="perspective-1000"
            >
              <Button 
                size="lg"
                className="group w-full bg-purple-500 hover:bg-cyan-400 text-white px-8 py-6 rounded-2xl text-xl font-bold transition-all duration-500 neon-glow-purple relative overflow-hidden"
                data-testid="button-chat-whatsapp"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Zap className="w-6 h-6" />
                  Start Creating Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Connect with Hype Nova</h3>
            <div className="flex justify-center">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors group"
                data-testid="link-instagram"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-12 h-12 group-hover:drop-shadow-[0_0_15px_rgb(6,182,212)]" />
              </motion.a>
            </div>
          </motion.div>
          
          <div className="border-t border-blue-400/20 pt-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-white font-bold text-lg">Hype</span>
              <span className="holographic-text font-bold text-lg">Nova</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Hype Nova. Powered by Bawal Tech. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ExternalLink, Instagram, Zap, Users, Award } from "lucide-react";
import { ReactNode } from "react";

// In-line Card component to avoid external imports
const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`glass-card rounded-2xl p-4 border-2 border-blue-400/50 hover:border-blue-400/70 transition-all duration-300 relative z-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default function FounderCard() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* 3D Glowing Frame */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-cyan-400/30 rounded-3xl blur-2xl transform rotate-3 scale-105" />
          <Card className="neon-glow">
            <img
              src="https://i.postimg.cc/pdyBggRt/Hypenova-cofounder-image.jpg"
              alt="Manish Kumawat - Founder of Hype Nova"
              className="rounded-2xl w-full object-cover aspect-[3/4]"
              data-testid="founder-image"
            />
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full text-sm font-semibold neon-glow">
              <span className="holographic-text">215K+</span>
            </div>
          </Card>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl text-center neon-glow">
              <Instagram className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">215K+</div>
              <div className="text-sm text-gray-300">Followers</div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center neon-glow-purple">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10M+</div>
              <div className="text-sm text-gray-300">Reach</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Tech & AI Expert</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Founder of <span className="text-blue-400 font-semibold">Bawal Tech</span>, a popular Instagram page 
                focused on cutting-edge technology and AI innovations, reaching millions of tech enthusiasts.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-bold text-white">Content Visionary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building the future of content marketing with AI-powered strategies and futuristic 
                design approaches that make brands go viral.
              </p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
  <a href="https://www.instagram.com/bawal_techh/" target="_blank" rel="noopener noreferrer">
  <button
    className="group w-full bg-blue-500 hover:bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 neon-glow inline-flex items-center justify-center gap-3 relative overflow-hidden"
    data-testid="button-follow-founder"
  >
    <span className="relative z-10 flex items-center gap-3">
      <Instagram className="w-6 h-6" />
      Follow Bawal Tech
      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </button>
</a>
            
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

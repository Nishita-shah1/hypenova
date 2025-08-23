"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { Zap, Rocket, Crown } from "lucide-react";

// Data for the pricing plans
const pricingPlans = [
  {
    name: "Silver",
    price: "₹67,000",
    period: "per month",
    icon: Rocket,
    description: "Perfect for growing brands",
    color: "neon-blue",
    popular: false,
    delay: 0,
    features: [
      { name: "10 Reels", included: true },
      { name: "1 Influencer", included: true },
      { name: "Carousels", included: false },
      { name: "Personalized Branding", included: true },
      { name: "Video Editing", included: true },
      { name: "Production", included: true },
      { name: "Script Writing", included: true },
      { name: "Content Research", included: true },
      { name: "Content Strategy", included: false },
      { name: "Graphic Designing", included: false },
      { name: "Account Manager", included: false },
      { name: "Dedicated Team", included: false },
      { name: "Meme Marketing", included: false },
      { name: "Daily Stories", included: false }
    ]
  },
  {
    name: "Gold",
    price: "₹1,00,000",
    period: "per month",
    icon: Crown,
    description: "Best for growing brands",
    color: "neon-purple",
    popular: true,
    delay: 0.2,
    features: [
      { name: "15 Reels", included: true },
      { name: "2 Influencers", included: true },
      { name: "Carousels", included: false },
      { name: "Personalized Branding", included: true },
      { name: "Video Editing", included: true },
      { name: "Production", included: true },
      { name: "Script Writing", included: true },
      { name: "Content Research", included: true },
      { name: "Content Strategy", included: true },
      { name: "Graphic Designing", included: true },
      { name: "Account Manager", included: true },
      { name: "Dedicated Team", included: true },
      { name: "Meme Marketing", included: false },
      { name: "Daily Stories", included: false }
    ]
  },
  {
    name: "Diamond",
    price: "₹1,67,000",
    period: "per month",
    icon: Zap,
    description: "Best for big brands",
    color: "neon-cyan",
    popular: false,
    delay: 0.4,
    features: [
      { name: "25 Reels", included: true },
      { name: "2 Influencers", included: true },
      { name: "4 Carousels", included: true },
      { name: "Personalized Branding", included: true },
      { name: "Video Editing", included: true },
      { name: "Production", included: true },
      { name: "Script Writing", included: true },
      { name: "Content Research", included: true },
      { name: "Content Strategy", included: true },
      { name: "Graphic Designing", included: true },
      { name: "Account Manager", included: true },
      { name: "Dedicated Team", included: true },
      { name: "Meme Marketing", included: true },
      { name: "Daily Stories", included: true }
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-purple/5 rounded-full blur-3xl floating-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="glass-card rounded-2xl p-6 max-w-4xl mx-auto holographic">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Full Refund If We Don't Beat Your Current Views
            </h2>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-4">
            Select Your Package To Build A <span className="holographic-text">Viral Brand</span>
          </h3>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need something <span className="holographic-text">different</span>?
            </h3>
            <p className="text-gray-300 mb-6">
              Every brand is unique. Let's create a custom package that perfectly fits your goals and budget.
            </p>
            <button className="bg-neon-cyan hover:bg-neon-blue text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 neon-glow">
              Request Custom Package
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floating-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes holographic-animation {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        .floating { animation: floating 6s ease-in-out infinite; }
        .floating-slow { animation: floating-slow 8s ease-in-out infinite; }
        .holographic-text {
          background: linear-gradient(120deg, #4F46E5, #8B5CF6, #EC4899, #10B981, #3B82F6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: holographic-animation 5s infinite;
        }
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background-color: rgba(255, 255, 255, 0.05);
        }
        .neon-glow-purple {
            box-shadow: 0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6, 0 0 20px #8B5CF6;
        }
      `}</style>
    </section>
  );
}
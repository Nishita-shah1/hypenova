"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Check, X, Zap, Rocket, Crown } from "lucide-react";

// In-line Card component to avoid external imports
const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 ${className}`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

// In-line CardContent component
const CardContent = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return <div className={`${className}`}>{children}</div>;
};

// Data structures
interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  icon: React.ElementType;
  description: string;
  color: string;
  popular: boolean;
  features: Feature[];
  delay: number;
}

interface PricingCardProps {
  plan: Plan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: plan.delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        rotateY: plan.popular ? 0 : 3
      }}
      className="perspective-1000 relative"
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-purple-500 px-4 py-2 rounded-full text-white font-bold text-sm neon-glow-purple">
            Best For Growing Brands
          </div>
        </div>
      )}

      <Card 
        className={`glass-card border-2 ${
          plan.popular 
            ? 'border-purple-500/50 neon-glow-purple' 
            : `border-blue-400/20 hover:border-blue-400/50`
        } transition-all duration-500 h-full relative overflow-hidden group`}
        data-testid={`pricing-card-${plan.name}`}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <CardContent className="p-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`w-20 h-20 bg-${plan.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <plan.icon className={`w-10 h-10 text-${plan.color}`} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {plan.name}
            </h3>
            <p className={`text-${plan.color} font-medium mb-4`}>
              {plan.description}
            </p>
            <div className="mb-6">
              <span className="text-4xl font-black text-white">
                {plan.price}
              </span>
              <span className="text-gray-400 ml-2">
                {plan.period}
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center">
                {feature.included ? (
                  <Check className={`w-5 h-5 text-${plan.color} mr-3 flex-shrink-0`} />
                ) : (
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                )}
                <span className={`text-sm ${
                  feature.included ? 'text-white' : 'text-gray-500'
                }`}>
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className={`w-full text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn ${
              plan.popular ? 'bg-purple-500 neon-glow-purple' : `bg-blue-500 hover:bg-blue-600`
            }`}
          >
            <span className="relative z-10">Book Call</span>
            {plan.popular && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            )}
          </button>
        </CardContent>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${plan.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
      </Card>
    </motion.div>
  );
}
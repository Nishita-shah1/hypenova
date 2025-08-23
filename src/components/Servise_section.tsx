"use client";

import { motion } from "framer-motion";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";

import { 
  Video, 
  Image, 
  FileText, 
  Palette, 
  Smile, 
  BarChart3,
  Zap,
  Sparkles
} from "lucide-react";

// Data for the services cards
const services = [
  {
    icon: Video,
    title: "Reels Creation",
    description: "High-impact vertical videos optimized for maximum engagement and viral potential.",
    color: "neon-blue"
  },
  {
    icon: Image,
    title: "Carousel Posts",
    description: "Interactive multi-slide content that tells your brand story with visual impact.",
    color: "neon-purple"
  },
  {
    icon: Zap,
    title: "AI-Driven Content",
    description: "Cutting-edge AI tools to create content that resonates with your audience.",
    color: "neon-cyan"
  },
  {
    icon: Sparkles,
    title: "Branding Solutions",
    description: "Complete brand identity and visual systems that make you stand out.",
    color: "electric-blue"
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Data-driven content strategies that build engagement and drive growth.",
    color: "neon-purple"
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description: "Performance tracking and optimization to scale your social presence.",
    color: "neon-blue"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black relative text-white">
      {/* Background elements with animations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-32 h-32 bg-neon-blue rounded-full blur-3xl floating"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-neon-purple rounded-full blur-3xl floating-slow"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Storytelling Element 1: Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="holographic-text">Futuristic Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Advanced content solutions powered by cutting-edge technology and creative expertise
          </p>
        </motion.div>

        {/* Storytelling Element 2: Grid of Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02
              }}
              className="group perspective-1000"
            >
              <Card 
                className="glass-card border-2 border-white/10 hover:border-blue-400/50 transition-all duration-500 h-full relative overflow-hidden transform-gpu"
                data-testid={`service-card-${index}`}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-10 h-10 text-${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* 3D accent line */}
                  <div className={`h-1 w-full bg-gradient-to-r from-blue-400/50 to-transparent rounded-full`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        /* Custom Keyframes */
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

        /* Utility classes */
        .floating {
          animation: floating 6s ease-in-out infinite;
        }
        .floating-slow {
          animation: floating-slow 8s ease-in-out infinite;
        }
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
        }
      `}</style>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { Quote, Star } from "lucide-react";

// Data for the testimonials
const testimonials = [
  {
    name: "Arjun Mehta",
    title: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "Working with Hype Nova completely transformed our social media presence. Their creative approach and strategic content planning helped us reach audiences we never thought possible. The team's dedication to quality is unmatched.",
    rating: 5,
    gradient: "from-blue-400/20 to-purple-500/20"
  },
  {
    name: "Priya Sharma", 
    title: "",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2ad6c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "The content created by Hype Nova exceeded all our expectations. Their understanding of current trends and ability to create viral content is exceptional. Our engagement rates have skyrocketed since partnering with them.",
    rating: 5,
    gradient: "from-purple-500/20 to-cyan-400/20"
  },
  {
    name: "Rohit Gupta",
    title: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "Hype Nova's innovative approach to content marketing is incredible. They helped us build a strong brand presence with their futuristic design concepts and engaging video content. Highly recommend their services.",
    rating: 5,
    gradient: "from-cyan-400/20 to-blue-400/20"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black relative text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl floating-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hear from our <span className="holographic-text">Happy Clients</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Real stories from brands we've helped achieve viral success and exponential growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join our <span className="holographic-text">success stories</span>?
            </h3>
            <div className="w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full holographic" />
          </div>
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
      `}</style>
    </section>
  );
}
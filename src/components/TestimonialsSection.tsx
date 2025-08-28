"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { Quote, Star } from "lucide-react";

// Data for the testimonials
const testimonials = [
  {
    name: "Arjun Mehta",
    title: "",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFxNO_qpb37LQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679521956884?e=1759363200&v=beta&t=sv-Myo-I1_L-SS4JN4by6PmyqQnljTM8EVqmr47NxIk",
    quote: "Working with Hype Nova completely transformed our social media presence. Their creative approach and strategic content planning helped us reach audiences we never thought possible. The team's dedication to quality is unmatched.",
    rating: 5,
    gradient: "from-blue-400/20 to-purple-500/20"
  },
  {
    name: "Priya Sharma", 
    title: "",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Priya_Sharma_%28fictional_character%29.jpg/250px-Priya_Sharma_%28fictional_character%29.jpg",
    quote: "The content created by Hype Nova exceeded all our expectations. Their understanding of current trends and ability to create viral content is exceptional. Our engagement rates have skyrocketed since partnering with them.",
    rating: 5,
    gradient: "from-purple-500/20 to-cyan-400/20"
  },
  {
    name: "Rohit Gupta",
    title: "",
    image: "data:image/jpeg;base64,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",
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

"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Eye } from "lucide-react";
import Card from "@/components/Card"; // Import the new Card component
import CardContent from "@/components/CardContent"; // Import the new CardContent component

const results = [
  {
    icon: Eye,
    number: "25M+",
    label: "Views",
    description: "Total video views generated",
    color: "from-blue-400 to-cyan-400",
    delay: 0.1
  },
  {
    icon: TrendingUp,
    number: "200K+",
    label: "Watch Hours",
    description: "Hours of content consumed",
    color: "from-purple-400 to-pink-400",
    delay: 0.2
  },
  {
    icon: Users,
    number: "10M+",
    label: "Audience",
    description: "People reached across platforms",
    color: "from-green-400 to-teal-400",
    delay: 0.3
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements for storytelling */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10% w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-40 right-20% w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with storytelling animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Numbers that speak </span>
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-200% animate-gradient-x"
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              louder than words
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Real results that transform brands and drive meaningful engagement
          </motion.p>
        </motion.div>

        {/* Results Cards with sequential storytelling animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: result.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Connecting line for storytelling (visible on larger screens) */}
                {index < results.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform translate-x-1/2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: result.delay + 0.3 }}
                    viewport={{ once: true }}
                  />
                )}

                <Card className="h-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-500">
                  <CardContent className="text-center">
                    {/* Icon with gradient background */}
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${result.color} mx-auto mb-6 flex items-center justify-center`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: result.delay + 0.1,
                        type: "spring",
                        stiffness: 150
                      }}
                      viewport={{ once: true }}
                    >
                      <result.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Animated number counter */}
                    <motion.div
                      className="text-5xl md:text-6xl font-black text-white mb-2 font-mono"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: result.delay + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {result.number}
                    </motion.div>

                    {/* Label with fade-in */}
                    <motion.div
                      className="text-xl font-semibold text-white mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: result.delay + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {result.label}
                    </motion.div>

                    {/* Description with subtle animation */}
                    <motion.p
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: result.delay + 0.8 }}
                      viewport={{ once: true }}
                    >
                      {result.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action with final storytelling element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to achieve similar results for your brand?
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      `}</style>
    </section>
  );
}
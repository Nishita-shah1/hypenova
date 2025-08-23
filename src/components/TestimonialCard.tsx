"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
  gradient: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        rotateY: 5
      }}
      className="perspective-1000"
    >
      <Card 
        className="glass-card border-2 border-blue-400/20 hover:border-purple-500/50 transition-all duration-500 h-full relative overflow-hidden group"
        data-testid={`testimonial-card-${index}`}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <CardContent className="p-8 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <Quote className="w-10 h-10 text-blue-400" />
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            "{testimonial.quote}"
          </p>
          
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400/50 relative z-10"
                data-testid={`testimonial-avatar-${index}`}
              />
            </div>
            <div>
              <div className="font-bold text-white text-lg" data-testid={`testimonial-name-${index}`}>
                {testimonial.name}
              </div>
              {testimonial.title && (
                <div className="text-sm text-blue-400 font-medium mt-1" data-testid={`testimonial-title-${index}`}>
                  {testimonial.title}
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
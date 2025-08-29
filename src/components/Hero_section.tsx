"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { ReactNode } from "react";

// Button Component
interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  "data-testid"?: string;
}

const Button = ({ 
  children, 
  size = "md", 
  className = "", 
  onClick,
  "data-testid": testId 
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center 
        font-medium rounded-full transition-all 
        duration-300 ease-out 
        ${sizeClasses[size]} 
        ${className}
      `}
      data-testid={testId}
    >
      {children}
    </motion.button>
  );
};

// Scroll function
const scrollToSection = (sectionId: string) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Main HeroSection Component
export default function HeroSection() {
  const videoUrl = "https://images.unsplash.com/photo-1517439160566-6b22c7a38753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-6xl mx-auto relative z-10 text-white"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight tracking-tighter"
        >
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Create
          </motion.span>
          <br/>
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Content That
          </motion.span>
          <br/>
          <motion.span 
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-200% animate-gradient-x"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
          >
            Builds Brand
          </motion.span>
        </motion.h1>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
        >
          <a href="tel:8851529420">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 hover:scale-110 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 relative overflow-hidden"
              data-testid="button-go-viral"
            >
              <span className="relative z-10 flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Zap className="w-6 h-6" />
                </motion.span>
                Go Viral
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Add custom styles for animations */}
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
      `}</style>
    </section>
  );
}

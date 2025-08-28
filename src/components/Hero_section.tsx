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
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Floating 3D Elements - Storytelling elements that appear sequentially */}
      <div className="absolute inset-0 pointer-events-none">
        {/* First wave of elements - establishing the scene */}
        <motion.div 
          className="absolute top-32 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.6, 0.3] }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        
        <motion.div 
          className="absolute top-48 right-32 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.3, 1], opacity: [0, 0.5, 0.2] }}
          transition={{ duration: 6, delay: 1, repeat: Infinity, repeatDelay: 3 }}
        />
        
        {/* Second wave - building the narrative */}
        <motion.div 
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.1, 1], opacity: [0, 0.3, 0.1] }}
          transition={{ duration: 5, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
        />
        
        {/* Holographic Shapes - adding depth to the story */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400/50 rotate-45"
          initial={{ rotateZ: 0, opacity: 0 }}
          animate={{ rotateZ: [0, 90, 180, 270, 360], opacity: [0, 1, 0.5, 1, 0] }}
          transition={{ duration: 12, delay: 2, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-purple-500/40 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.4] }}
          transition={{ duration: 8, delay: 2.5, repeat: Infinity, repeatDelay: 2 }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Floating Profile Images - The characters in our story */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="absolute top-0 right-0 hidden lg:block"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-lg shadow-blue-400/30 animate-float">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="absolute top-20 right-32 hidden lg:block"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/30 animate-float-slow">
            
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/50 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-200% animate-gradient-x">
            
          </div>
        </motion.div>
        
        {/* Main headline - The core message of our story */}
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
        
        {/* Call to action - The climax of our story */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}

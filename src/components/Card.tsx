"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
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

export default Card;
import { ReactNode } from "react";
import { motion } from "framer-motion";

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

export default Button;
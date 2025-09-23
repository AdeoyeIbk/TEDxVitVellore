import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "outline",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "rounded-full font-medium transition-all cursor-pointer border-2 focus:outline-none focus:ring-2 focus:ring-tedx-red focus:ring-opacity-50";

  const variants = {
    primary:
      "bg-red-500 text-tedx-white border-red-500 hover:bg-red-700 hover:border-red-700",
    outline:
      "bg-transparent text-red-500 border-red-500 hover:bg-tedx-red hover:text-tedx-white",
    ghost:
      "bg-transparent text-tedx-red border-transparent hover:bg-tedx-red/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${
        sizes[size]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}

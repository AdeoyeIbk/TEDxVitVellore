import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined" | "ghost" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  hoverable = true,
  onClick,
  delay = 0.2,
  direction = "up",
}: CardProps) {
  const baseClasses = "rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300";

  const variants = {
    default: "bg-white shadow-lg border border-gray-100",
    elevated: "bg-white shadow-xl shadow-tedx-red/10",
    outlined: "bg-white border-2 border-tedx-red/20 shadow-sm",
    ghost: "bg-white/5 backdrop-blur-sm border border-white/10",
    gradient: "bg-tedx-gradient text-white shadow-lg",
  };

  const paddings = {
    sm: "p-3 sm:p-4",
    md: "p-4 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-8 sm:p-12",
  };

  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
  };

  const hoverEffects = hoverable
    ? {
        scale: 1.02,
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(230, 43, 30, 0.15)",
        transition: { duration: 0.3 },
      }
    : {};

  const clickableStyles = onClick ? "cursor-pointer" : "";

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${clickableStyles} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95, ...directions[direction] }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffects}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
  label: string;
  className?: string;
}

export default function SocialIcon({
  href,
  children,
  label,
  className = "",
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center hover:bg-tedx-red  bg-none transition-colors duration-200 p-2 ${className}`}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

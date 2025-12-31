import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const CyberCard = ({ children, className, glowOnHover = true }: CyberCardProps) => {
  return (
    <motion.div
      whileHover={glowOnHover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative rounded-lg border border-border bg-card p-6 overflow-hidden transition-all duration-300",
        glowOnHover && "hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]",
        className
      )}
    >
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

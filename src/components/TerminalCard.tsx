import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TerminalCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalCard = ({ title, children, className }: TerminalCardProps) => {
  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        {title && (
          <span className="ml-4 text-sm font-mono text-muted-foreground">
            {title}
          </span>
        )}
      </div>
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
};

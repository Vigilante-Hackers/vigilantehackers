import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text?: string;
  children?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export const GlitchText = ({ text, children, className, as: Component = "span" }: GlitchTextProps) => {
  const content = text || children || "";
  return (
    <Component
      className={cn("glitch text-gradient", className)}
      data-text={content}
    >
      {content}
    </Component>
  );
};

export default GlitchText;

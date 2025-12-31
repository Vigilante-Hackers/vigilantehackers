import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-foreground hover:bg-muted hover:text-primary",
        link:
          "text-primary underline-offset-4 hover:underline",
        cyber:
          "relative bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-primary before:to-secondary before:opacity-0 before:transition-opacity hover:before:opacity-20",
        hero:
          "bg-primary text-primary-foreground font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300",
        "hero-outline":
          "border-2 border-primary/70 bg-transparent text-primary font-semibold text-base px-8 py-6 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300",
        terminal:
          "bg-muted border border-border text-primary font-mono hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

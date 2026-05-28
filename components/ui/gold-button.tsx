import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ className, fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-gold text-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] rounded-md uppercase transition-colors duration-250 hover:bg-gold-hover disabled:opacity-50 disabled:pointer-events-none",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

GoldButton.displayName = "GoldButton";

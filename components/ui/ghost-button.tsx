import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const GhostButton = React.forwardRef<HTMLButtonElement, GhostButtonProps>(
  ({ className, fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'bg-transparent border border-border-strong text-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] uppercase transition-all duration-250 hover:border-gold hover:text-gold disabled:opacity-50 disabled:pointer-events-none',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GhostButton.displayName = 'GhostButton';

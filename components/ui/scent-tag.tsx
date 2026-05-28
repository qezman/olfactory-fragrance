import { cn } from '@/lib/utils/cn';
import { ScentFamily } from '@/types/fragrance';

interface ScentTagProps {
  family: ScentFamily | string;
  className?: string;
  active?: boolean;
}

export function ScentTag({ family, className, active }: ScentTagProps) {
  return (
    <span
      className={cn(
        'type-small uppercase text-ink-tertiary',
        active && 'text-gold font-medium',
        className
      )}
    >
      {family}
    </span>
  );
}

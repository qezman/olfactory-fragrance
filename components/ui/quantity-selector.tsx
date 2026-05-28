import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  className,
}: QuantitySelectorProps) {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <button
        type="button"
        onClick={onDecrease}
        className="p-1 text-ink-secondary hover:text-ink transition-colors disabled:opacity-50"
        disabled={quantity <= 0}
      >
        <Minus size={16} strokeWidth={1.5} />
      </button>
      <span className="font-body text-[14px] w-4 text-center">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="p-1 text-ink-secondary hover:text-ink transition-colors"
      >
        <Plus size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}

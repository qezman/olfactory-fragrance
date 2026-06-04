import { useCheckout } from '@/hooks/use-checkout';
import { cn } from '@/lib/utils/cn';
import { CheckoutStep } from '@/types/checkout';

export function CheckoutProgress() {
  const { step, setStep } = useCheckout();

  const steps: { num: CheckoutStep; label: string }[] = [
    { num: 1, label: 'Contact' },
    { num: 2, label: 'Delivery' },
    { num: 3, label: 'Payment' },
    { num: 4, label: 'Review' },
  ];

  return (
    <div className="flex items-center justify-between w-full mb-12 relative">
      {/* Background Line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-border-strong -z-10" />

      {steps.map((s, i) => {
        const isCompleted = step > s.num;
        const isActive = step === s.num;
        
        // Progress Line (Gold)
        const isLineActive = step > s.num && i < steps.length - 1;

        return (
          <div key={s.num} className="flex flex-col items-center relative bg-off-white px-2 md:px-4">
            
            <button
              onClick={() => {
                // Only allow navigating back to completed steps
                if (isCompleted) setStep(s.num);
              }}
              disabled={!isCompleted && !isActive}
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-250 mb-2',
                isCompleted ? 'bg-gold text-white' : 
                isActive ? 'border-2 border-gold text-gold bg-off-white' : 
                'bg-surface-deep text-ink-tertiary cursor-not-allowed'
              )}
            >
              {isCompleted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <span className="type-small font-medium">{s.num}</span>
              )}
            </button>

            <span className={cn(
              'type-small uppercase tracking-widest hidden md:block',
              isActive || isCompleted ? 'text-ink' : 'text-ink-tertiary'
            )}>
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

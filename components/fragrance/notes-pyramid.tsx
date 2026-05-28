import { Fragrance } from '@/types/fragrance';

interface NotesPyramidProps {
  fragrance: Fragrance;
}

export function NotesPyramid({ fragrance }: NotesPyramidProps) {
  return (
    <div className="py-section-y bg-surface">
      <div className="max-w-narrow mx-auto px-section-x flex flex-col items-center">
        <h3 className="type-sub text-ink-tertiary mb-16 text-center">THE ARCHITECTURE</h3>
        
        <div className="relative w-full max-w-sm flex flex-col items-center">
          {/* Top Notes */}
          <div className="text-center mb-12 relative z-10">
            <span className="block type-small text-ink-tertiary uppercase tracking-widest mb-2">Top Notes</span>
            <p className="type-body font-medium">{fragrance.topNotes.join(' · ')}</p>
          </div>

          {/* Heart Notes */}
          <div className="text-center mb-12 relative z-10 w-[120%]">
            <span className="block type-small text-ink-tertiary uppercase tracking-widest mb-2">Heart Notes</span>
            <p className="type-body font-medium">{fragrance.heartNotes.join(' · ')}</p>
          </div>

          {/* Base Notes */}
          <div className="text-center relative z-10 w-[140%]">
            <span className="block type-small text-ink-tertiary uppercase tracking-widest mb-2">Base Notes</span>
            <p className="type-body font-medium">{fragrance.baseNotes.join(' · ')}</p>
          </div>

          {/* Background Triangle SVG */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center top-4 bottom-4">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-border-strong" fill="none" preserveAspectRatio="none">
              <polygon points="50,0 100,100 0,100" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="25" y1="50" x2="75" y2="50" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

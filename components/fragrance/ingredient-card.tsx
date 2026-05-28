import { Ingredient } from "@/types/fragrance";

interface IngredientCardProps {
  ingredient: Ingredient;
  index: number;
}

export function IngredientCard({ ingredient, index }: IngredientCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center max-w-[280px] mx-auto animate-on-scroll is-visible"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Botanical Illustration Placeholder */}
      <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center mb-6 bg-white">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink-tertiary"
        >
          <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
          <path d="M12 22V12" />
          <path d="M12 12L16 8" />
          <path d="M12 12L8 8" />
        </svg>
      </div>

      <h4 className="font-display italic text-[22px] mb-2">
        {ingredient.name}
      </h4>
      <p className="type-sub text-ink-tertiary mb-4 tracking-widest">
        {ingredient.origin}
      </p>
      <p className="type-body text-ink-secondary">{ingredient.description}</p>
    </div>
  );
}

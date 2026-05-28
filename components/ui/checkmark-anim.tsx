export function CheckmarkAnim() {
  return (
    <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-8 mx-auto">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="#9a7c4f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="100"
          className="animate-draw-check"
        />
      </svg>
    </div>
  );
}

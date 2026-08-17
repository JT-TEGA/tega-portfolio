/**
 * Concentric line-art circles used purely as background texture. Positioned by
 * the caller via `className` (the element is absolute, so the parent needs
 * `relative` — and usually `overflow-hidden` to keep it off the page gutter).
 */
export function CircleDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      fill="none"
      strokeWidth={1}
      className={`pointer-events-none absolute -z-10 stroke-gray-100 opacity-30 dark:stroke-gray-800 ${className}`}
    >
      <circle cx="200" cy="200" r="199" />
      <circle cx="200" cy="200" r="152" />
      <circle cx="200" cy="200" r="105" />
      <circle cx="200" cy="200" r="58" />
    </svg>
  );
}

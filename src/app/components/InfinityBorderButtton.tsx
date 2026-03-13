import { ArrowRight } from "lucide-react";

// Add this to your global CSS (e.g. globals.css or index.css):
//
// @keyframes dash-trail {
//   from { stroke-dashoffset: 120; }
//   to   { stroke-dashoffset: -480; }
// }
// @keyframes dash-dot-1 {
//   from { stroke-dashoffset: 115; }
//   to   { stroke-dashoffset: -485; }
// }
// @keyframes dash-dot-2 {
//   from { stroke-dashoffset: 110; }
//   to   { stroke-dashoffset: -490; }
// }
// @keyframes dash-dot-3 {
//   from { stroke-dashoffset: 105; }
//   to   { stroke-dashoffset: -495; }
// }
// @keyframes dash-dot-4 {
//   from { stroke-dashoffset: 100; }
//   to   { stroke-dashoffset: -500; }
// }

const RECTS = [
  { cls: "animate-[dash-trail_2.35s_linear_infinite]", dashArray: "40 560", strokeWidth: 2.3,  opacity: 0.85, filter: false },
  { cls: "animate-[dash-dot-1_2.35s_linear_infinite]", dashArray:  "5 595", strokeWidth: 2,    opacity: 0.75, filter: true  },
  { cls: "animate-[dash-dot-2_2.35s_linear_infinite]", dashArray:  "5 595", strokeWidth: 1.7,  opacity: 0.65, filter: false },
  { cls: "animate-[dash-dot-3_2.35s_linear_infinite]", dashArray:  "5 595", strokeWidth: 1.5,  opacity: 0.58, filter: true  },
  { cls: "animate-[dash-dot-4_2.35s_linear_infinite]", dashArray:  "5 595", strokeWidth: 1.4,  opacity: 0.50, filter: false },
];

export default function InfinityBorderButton({ children = "Apply for Next Cohort" }) {
  return (
    <button
      onClick={() => {}}
      className="
        group relative inline-flex w-full items-center justify-center gap-2
        overflow-hidden rounded-[14px] border-0 bg-transparent
        px-4 md:px-6 py-3
        text-lg sm:text-xl text-white font-medium md:font-light
        tracking-normal outline-none ring-0
        hover:cursor-pointer focus:outline-none focus:ring-0
        transition-transform duration-150 ease-out
        hover:-translate-y-0.5 active:scale-[0.98]
      "
    >
      {/* Animated SVG border */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 248 64"
        fill="none"
        className="pointer-events-none absolute inset-0 z-0"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="softGlowWhite" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {RECTS.map((r, i) => (
          <rect
            key={i}
            x="1" y="1"
            width="245" height="61"
            rx="12.5"
            stroke="#fff"
            strokeWidth={r.strokeWidth}
            strokeDasharray={r.dashArray}
            className={r.cls}
            opacity={r.opacity}
            filter={r.filter ? "url(#softGlowWhite)" : undefined}
          />
        ))}
      </svg>

      {/* Label */}
      <span className="relative z-10 flex items-center gap-2">
        <span className="font-medium">{children}</span>
        <ArrowRight size={18} />
      </span>
    </button>
  );
}
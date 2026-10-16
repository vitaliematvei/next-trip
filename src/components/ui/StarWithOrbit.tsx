interface StarWithOrbitProps {
  className?: string;
}

export function StarWithOrbit({
  className = 'w-24 h-32 text-golden-400',
}: StarWithOrbitProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 1. Elipsa / Orbita ovală */}
      <ellipse
        cx="50"
        cy="70"
        rx="36"
        ry="60"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* 2. Cele 4 puncte de pe orbită (Sus, Jos, Stânga, Dreapta) */}
      <circle cx="50" cy="10" r="3" fill="currentColor" />
      <circle cx="50" cy="130" r="3" fill="currentColor" />
      <circle cx="14" cy="70" r="3" fill="currentColor" />
      <circle cx="86" cy="70" r="3" fill="currentColor" />

      {/* 3. Steluța ascuțită cu laturi concave din centru */}
      <path
        d="M 50 35 C 50 58, 42 66, 14 70 C 42 74, 50 82, 50 105 C 50 82, 58 74, 86 70 C 58 66, 50 58, 50 35 Z"
        fill="currentColor"
      />
    </svg>
  );
}

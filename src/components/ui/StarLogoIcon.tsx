export default function StarLogoIcon({
  className = 'w-14 h-8 text-[#F3E6BD]',
}) {
  return (
    <svg
      viewBox="0 0 100 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 50 0 L 53 18 L 65 11 L 58 20 L 100 22.5 L 58 25 L 65 34 L 53 27 L 50 45 L 47 27 L 35 34 L 42 25 L 0 22.5 L 42 20 L 35 11 L 47 18 Z M 50 19.5 C 50 21.1569 48.6569 22.5 47 22.5 C 48.6569 22.5 50 23.8431 50 25.5 C 50 23.8431 51.3431 22.5 53 22.5 C 51.3431 22.5 50 21.1569 50 19.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

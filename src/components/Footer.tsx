import Link from 'next/link';
import { Music2 } from 'lucide-react';
import StarLogoIcon from './ui/StarLogoIcon';

function Instagram({
  size = 18,
  strokeWidth = 1.5,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const navLink =
    'font-sans font-normal text-xs sm:text-[14px] leading-5 tracking-[0.5px] hover:text-[#E1C88F] transition-colors';
  const legalLink =
    'font-sans font-normal text-[14px] leading-5 tracking-[0.5px] hover:text-[#F9F8F5] transition-colors';

  return (
    <footer className="w-full max-w-[1440px] mx-auto bg-[#282828] px-6 sm:px-10 lg:px-[64px] text-charcoal-300 pt-12 pb-10">
      <div className="w-full flex flex-col">
        {/* Top: Brand + Navigation */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:max-w-[439px]">
            <Link
              href="/"
              className="flex flex-col items-center w-fit text-[#F8F0D8] focus:outline-none focus:ring-2 focus:ring-[#DFA966] rounded-md"
              aria-label="Next Trip Home"
            >
              <StarLogoIcon className="w-[57.26px] h-[33.98px] self-center" />
              <span className="font-cormorant text-[44px] font-semibold leading-[48.4px] tracking-[-0.5px]">
                Next Trip
              </span>
            </Link>
            <p className="font-sans font-normal text-xs sm:text-[14px] leading-6 tracking-0">
              Des expériences immersives en petit groupe, imaginées avec celles
              et ceux qui font vivre chaque territoire.
            </p>
          </div>

          {/* Nav + Social */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link href="#prochaine-experience" className={navLink}>
                Prochaine expérience
              </Link>
              <Link href="#approche" className={navLink}>
                L’approche
              </Link>
              <Link href="#journal" className={navLink}>
                Journal
              </Link>
              <Link href="#contact" className={navLink}>
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E1C88F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E1C88F] transition-colors"
                aria-label="TikTok"
              >
                <Music2 size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E1C88F]/20 mt-10 mb-6" />

        {/* Bottom: Copyright + Legal */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left gap-4">
          <p className="font-sans font-normal text-[12px] leading-4 tracking-0">
            © 2026. Tous droits réservés
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <Link href="/politique-de-confidentialite" className={legalLink}>
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className={legalLink}>
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

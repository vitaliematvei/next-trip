import Link from 'next/link';
import StarLogoIcon from './ui/StarLogoIcon';

export default function Navbar() {
  const navLinks = [
    { label: "L'approche", href: '#' },
    { label: 'Prochaine expérience', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] bg-navbar-gradient text-white py-6 z-50">
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-1 group leading-none"
        >
          <StarLogoIcon className="text-[#F3E6BD] w-[58px] transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-serif text-[44px] font-semibold tracking-[-0.5px] text-[#F3E6BD] leading-12 mt-1">
            Logo
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-10 text-[15px] font-normal text-white/90">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div>
          <Link
            href="#"
            className="inline-block bg-[#D4BC8F] hover:bg-[#c4a979] text-[#282828] text-[15px] font-medium px-7 py-3 rounded-full transition-colors duration-200 shadow-sm"
          >
            Rejoindre l'expérience
          </Link>
        </div>
      </div>
    </header>
  );
}

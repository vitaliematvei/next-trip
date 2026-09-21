'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StarLogoIcon from './ui/StarLogoIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { label: "L'approche", href: '#' },
    { label: 'Prochaine expérience', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-1/2 w-full z-20 text-[#F8F0D8] max-w-[1440px] bg-[#2B2B2B] -translate-x-1/2">
      <div className="w-full max-w-[1200px] my-5 px-4 mx-auto flex items-center justify-between">
        {/* 1. LOGO - Învelit în Link semantic */}
        <div className="flex-1 flex flex-col items-start">
          <Link
            href="/"
            className="flex flex-col items-center w-fit focus:outline-none focus:ring-2 focus:ring-[#DFA966] rounded-md"
            aria-label="Next Trip Home"
            data-testid="navbar-logo"
          >
            <StarLogoIcon className="w-[57.26px] h-[33.98px] self-center" />
            <span className="font-cormorant text-[44px] font-semibold leading-[48.4px] tracking-[-0.5px]">
              Next Trip
            </span>
          </Link>
        </div>

        {/* 2. NAV (DESKTOP) - Mutat la lg: pentru siguranță pe tablete */}
        <nav
          className="hidden lg:flex justify-center shrink-0"
          aria-label="Main Navigation"
        >
          <ul
            className="flex items-center gap-x-8 relative"
            onMouseLeave={() => setHoveredIndex(null)}
            data-testid="desktop-nav-list"
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative py-2 px-1"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="pointer-events-none absolute left-1/2 top-full -mt-1 flex -translate-x-1/2 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-[#F3E6BD]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C11.5 5.2 10.5 8.5 9.2 9.2C8.5 10.5 5.2 11.5 0 12C5.2 12.5 8.5 13.5 9.2 14.8C10.5 15.5 11.5 18.8 12 24C12.5 18.8 13.5 15.5 14.8 14.8C15.5 13.5 18.8 12.5 24 12C18.8 11.5 15.5 10.5 14.8 9.2C13.5 8.5 12.5 5.2 12 0Z" />
                    </svg>
                  </motion.div>
                )}
                <Link
                  href={link.href}
                  className="relative z-10 font-sans text-[16px] leading-6 tracking-normal hover:text-[#F3E6BD] text-sand-50 hover:opacity-80 transition-opacity focus:outline-none focus:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. BUTTON CTA & TOGGLE */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            type="button"
            className="hidden lg:block text-[#282828] bg-[#DFA966] hover:bg-[#D4882C] font-sans text-[16px] font-normal leading-none tracking-normal px-7 py-4 rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white"
          >
            Rejoindre l&apos;expérience
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#F8F0D8] focus:outline-none focus:ring-2 focus:ring-[#DFA966] rounded-md z-50"
            aria-label={isOpen ? 'Ferme le menu' : 'Ouvre le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            data-testid="mobile-toggle-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE MENU OVERLAY & DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 bg-[#121212] bg-opacity-95 backdrop-blur-md flex flex-col justify-between px-6 pt-24 pb-12 z-40 lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center gap-y-8 my-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-[22px] leading-relaxed text-[#F8F0D8] hover:text-[#DFA966] transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full flex justify-center"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                data-testid="cta-button-mobile"
                className="w-full max-w-xs text-[#282828] bg-[#DFA966] hover:bg-[#D4882C] font-sans text-[16px] font-normal px-7 py-4 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                Rejoindre l&apos;expérience
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

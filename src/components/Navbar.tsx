'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StarLogoIcon from './ui/StarLogoIcon';
// import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { label: "L'approche", href: '#' },
    { label: 'Prochaine expérience', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] bg-navbar-gradient text-white py-4 z-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO WITH HOVER ANIMATION */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <Link
            href="/"
            className="flex flex-col items-center justify-center group leading-none z-50"
          >
            <StarLogoIcon className="text-[#F3E6BD] w-12 sm:w-12 lg:w-[66px] transition-transform duration-500 ease-out group-hover:rotate-45" />
            <span className="font-serif text-2xl sm:text-3xl lg:text-[44px] font-semibold tracking-[-0.5px] text-[#F3E6BD] leading-tight">
              Logo
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP NAVIGATION WITH FLUID HOVER UNDERLINE */}
        <nav
          className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm lg:text-[16px] leading-6 font-sans text-sand-75/50"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative py-1 text-white/80 hover:text-[#F3E6BD] transition-colors duration-200 tracking-wide"
            >
              {link.label}

              {/* FLUID UNDERLINE (SHARED LAYOUT ANIMATION) */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="desktop-navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F3E6BD] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA BUTTON WITH MICRO-INTERACTION */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div
                // asChild
                className="py-2.5 px-4 sm:py-3 sm:px-6 rounded-xl text-sm sm:text-[16px] font-medium tracking-normal leading-none"
              >
                <Link href="/register">Rejoindre l'expérience</Link>
              </div>
            </motion.div>
          </div>

          {/* TOGGLE BUTTON MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#F3E6BD] focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY WITH STAGGERED LINKS */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden z-40 px-6"
          >
            <nav className="flex flex-col items-center space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-sans text-white hover:text-[#F3E6BD] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="w-full max-w-xs"
            >
              <Button
                asChild
                onClick={() => setIsOpen(false)}
                className="w-full rounded-xl text-base font-medium tracking-normal "
              >
                <Link
                  href="/register"
                  className="font-sans font-medium text-[16px] tracking-normal leading-6 px-24"
                >
                  Rejoindre l'expérience
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

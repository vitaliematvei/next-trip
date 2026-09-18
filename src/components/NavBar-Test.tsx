'use client';

import { useState } from 'react';
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

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] bg-navbar-gradient text-white py-4 z-50">
      {/* gap-4 asigură că zonele nu se lipesc niciodată una de alta */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* 1. LOGO */}
        <div className="flex-1 flex items-center justify-start min-w-max">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link
              href="/"
              className="flex flex-col items-center justify-center group leading-none"
            >
              <StarLogoIcon className="text-[#F3E6BD] w-10 sm:w-12 lg:w-[50px] transition-transform duration-500 ease-out group-hover:rotate-45" />
              <span className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-[-0.5px] text-[#F3E6BD] leading-tight mt-1">
                Logo
              </span>
            </Link>
          </motion.div>
        </div>

        {/* 2. NAVIGAȚIE - Schimbat breakpoint-ul la lg: (ecrane mai mari de 1024px) */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-center space-x-6 xl:space-x-10 text-sm xl:text-[16px] font-sans text-white/80 shrink-0"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative py-2 text-white/80 hover:text-[#F3E6BD] transition-colors duration-200 tracking-wide whitespace-nowrap"
            >
              {link.label}

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

        {/* 3. BUTTON CTA & TOGGLE */}
        <div className="flex-1 flex items-center justify-end gap-3 min-w-max">
          <div className="hidden sm:block">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/register"
                className="inline-flex h-[45px] px-5 xl:px-6 items-center justify-center rounded-[10px] bg-[#DFA966] font-sans font-medium text-[14px] xl:text-[15px] text-[#282828] transition-colors hover:bg-[#D4882C] focus:outline-none leading-none whitespace-nowrap"
              >
                Rejoindre l&apos;expérience
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#F3E6BD] focus:outline-none z-50 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 lg:hidden z-40 px-6"
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
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex h-[48px] w-full items-center justify-center rounded-xl bg-[#DFA966] text-[#282828] font-sans font-medium text-[16px]"
              >
                Rejoindre l&apos;expérience
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

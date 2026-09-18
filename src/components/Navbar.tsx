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
    <header className="absolute top-0 left-0 w-full z-20 text-[#F8F0D8] px-4 sm:px-8">
      <div className="w-full max-w-[1200px] my-5 mx-auto flex items-center justify-between">
        {/* 1. LOGO */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex flex-col items-center w-fit">
            <StarLogoIcon className="w-[57.26px] h-[33.98px] self-center" />
            <span className="font-cormorant text-[44px] font-semibold leading-[48.4px] tracking-[-0.5px]">
              Logo
            </span>
          </div>
        </div>

        {/* 2. NAV (DESKTOP) */}
        <nav className="hidden md:flex justify-center shrink-0">
          <ul
            className="flex items-center gap-x-11 relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative py-2 px-3"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Animation Hover Background (Pill effect) */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-[#F3E6BD]/10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Link
                  href={link.href}
                  className="relative z-10 font-sans text-[16px] leading-6 tracking-normal hover:text-[#F3E6BD] text-sand-50 hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. BUTTON CTA & TOGGLE */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button className="hidden md:block text-[#282828] bg-[#DFA966] hover:bg-[#D4882C] font-sans text-[16px] font-normal leading-none tracking-normal px-7 py-4 rounded-md hover:opacity-90 transition-opacity">
            Rejoindre l'expérience
          </button>

          {/* Hamburger Icon pentru Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#F8F0D8] focus:outline-none z-50"
            aria-label="Toggle menu"
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
            className="fixed inset-0 bg-[#121212] bg-opacity-95 backdrop-blur-md flex flex-col justify-between px-6 pt-24 pb-12 z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center gap-y-8 my-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-[22px] leading-relaxed text-[#F8F0D8] hover:text-[#DFA966] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full flex justify-center"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="w-full max-w-xs text-[#282828] bg-[#DFA966] hover:bg-[#D4882C] font-sans text-[16px] font-normal px-7 py-4 rounded-md text-center"
              >
                Rejoindre l'expérience
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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
    <header className="absolute top-0 left-0 w-full z-20 text-[#F8F0D8]">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* 1. LOGO */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex flex-col items-center w-fit">
            <StarLogoIcon className="w-[57.26px] h-[33.98px] self-center" />
            <span className="font-cormorant text-[44px] font-semibold leading-[48.4px] tracking-[-0.5px]">
              Logo
            </span>
          </div>
        </div>

        {/* 2. NAV */}
        <nav className="flex justify-center shrink-0">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="font-sans  text-[16px] font-thin leading-6 tracking-normal text-sand-50 hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. BUTTON CTA & TOGGLE */}
        <div className="flex-1 flex justify-end">
          <button className="text-[#282828] bg-[#DFA966] hover:bg-[#D4882C] font-sans text-[16px] font-medium leading-none tracking-normal px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
            Rejoindre l'expérience
          </button>
        </div>
      </div>
    </header>
  );
}

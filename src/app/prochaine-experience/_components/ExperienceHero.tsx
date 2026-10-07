'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

export default function ExperienceHero() {
  const ref = useRef<HTMLElement>(null);
  // Scroll tracking for background parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-5%', '20%']);

  return (
    <section
      ref={ref}
      aria-labelledby="experience-hero-title"
      className="relative isolate mx-auto flex min-h-[75svh] w-full max-w-[1440px] items-center justify-center overflow-hidden text-sand-50 sm:min-h-[80svh] sm:px-6 sm:py-72"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        style={{ y: backgroundY }}
        aria-hidden="true"
        className="absolute inset-x-0 -inset-y-[35%] z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/img/landscape-mountains.jpg')` }}
        />
      </motion.div>

      {/* Dark Overlay for Text Readability */}
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/45" />

      {/* Hero Content Container */}
      <div className="relative z-20 mx-auto flex w-full flex-col items-center gap-4 text-center sm:gap-6 px-4">
        {/* Subtitle / Prochain départ */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-cormorant text-lg font-medium italic leading-tight tracking-[-0.5px] sm:text-xl sm:leading-9 lg:text-2xl"
        >
          Prochain départ :
        </motion.p>

        {/* Main Title */}
        <motion.h1
          id="experience-hero-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: 'easeOut',
          }}
          className="font-cormorant font-normal italic leading-none tracking-[-2px] text-[#F3E6BD] text-5xl sm:text-7xl lg:text-[140px]"
        >
          Next trip
        </motion.h1>

        {/* Details List (Badges) */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
          aria-label="Detalii despre sejur"
          className="flex list-none flex-wrap items-center justify-center gap-2 pt-1 sm:gap-3 sm:pt-2"
        >
          <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-sans text-xs leading-5 tracking-0 text-[#F8F0D8] backdrop-blur-md sm:px-4 sm:py-2 sm:text-[14px] sm:leading-6">
            <Clock size={15} aria-hidden="true" className="text-[#E1C88F]" />
            <span>10 jours / 9 nuits</span>
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-sans text-xs leading-5 tracking-0 text-[#F8F0D8] backdrop-blur-md sm:px-4 sm:py-2 sm:text-[14px] sm:leading-6">
            <Users size={15} aria-hidden="true" className="text-[#E1C88F]" />
            <span>4 à 10 participants</span>
          </li>
        </motion.ul>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: 'easeOut',
          }}
          className="mt-6 max-w-[550px] text-center font-sans text-sm font-normal leading-relaxed tracking-0 text-sand-50 sm:mt-10 sm:text-[18px] sm:leading-[1.75] lg:mt-[10svh]"
        >
          Une expérience immersive en petit groupe, imaginée avec des
          partenaires locaux pour découvrir le territoire à travers celles et
          ceux qui le font vivre.
        </motion.p>
      </div>
    </section>
  );
}

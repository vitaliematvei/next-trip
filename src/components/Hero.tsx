'use client';

import Link from 'next/link';
import ReactPlayer from 'react-player';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function Hero() {
  const valueProps = [
    {
      title: 'En petits groupes',
      desc: '4 à 10 participants, pour préserver la qualité des échanges',
    },
    {
      title: 'Partenaires locaux',
      desc: 'Guides, lieux et hébergements choisis au plus près du territoire.',
    },
    {
      title: 'Une destination à la fois',
      desc: 'Chaque expérience est explorée en amont avant d’être proposée',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-hero-gradient mx-auto max-w-[1440px] text-[#E8E2D5] flex flex-col justify-between overflow-hidden">
      {/* BACKGROUND VIDEO INTEGRAT CU GRADIENTUL */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=zaEoS2ymoQI"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="opacity-25 mix-blend-overlay scale-125"
        />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-12 flex flex-col items-center justify-between flex-grow">
        {/* CENTER CONTENT */}
        <div className="max-w-3xl text-center flex flex-col items-center my-auto">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 font-sans-400 text-[16px] leading-6 tracking-normal text-xs sm:text-sm text-charcoal-75 mb-6"
          >
            <MapPin size={14} />
            <span>
              Prochaine expérience : <strong>Next trip</strong>
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light leading-[1.1] text-[#F3E6BD] mb-6"
          >
            Une autre manière de <br className="hidden sm:inline" />
            <span className="italic font-normal">découvrir un pays.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-white/70 font-sans max-w-xl mb-8 leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Sem in metus vel mauris sed
            feugiat. Etiam id sed imperdiet nunc. Auctor nisl mollis nisi ut
            aliquet.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <Button
              asChild
              className="bg-[#7A3E2A] hover:bg-[#633222] text-[#F3E6BD] px-7 py-3.5 rounded-lg text-base font-medium transition-colors shadow-lg"
            >
              <Link href="/discover">
                Découvrir <span className="ml-1 text-xs">✦</span>
              </Link>
            </Button>

            <Link
              href="/next-experience"
              className="text-sm sm:text-base text-[#E8E2D5] hover:text-[#F3E6BD] flex items-center gap-2 transition-colors py-2"
            >
              Voir la prochaine expérience <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* 3 COLUMNS VALUE PROPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 text-center"
        >
          {valueProps.map((prop, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F3E6BD] mb-2">
                {prop.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-xs leading-relaxed">
                {prop.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

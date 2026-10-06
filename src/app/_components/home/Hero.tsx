'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Prevenim randarea animațiilor înainte de montare doar dacă e absolut necesar,
  // dar pentru Framer Motion simplu, dacă serverul și clientul folosesc aceleași valori inițiale,
  // erorile de hidratare dispar de la sine.
  // Soluția ideală pentru a nu bloca vizual conținutul la server-side rendering este să lăsăm `initial` stabil.

  return (
    <section className="relative min-h-screen w-full bg-hero-gradient mx-auto max-w-[1440px] pt-24 xs:pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-10 sm:pb-14 lg:pb-16 text-[#E6DEC9] flex flex-col justify-between overflow-hidden">
      {/* 1. VIDEO FULL-COVER */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40 mix-blend-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]">
          <ReactPlayer
            src="https://www.youtube.com/watch?v=zaEoS2ymoQI"
            playing
            loop
            muted
            playsInline
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            config={{
              youtube: {
                cc_load_policy: 0,
                cc_lang_pref: 'none',
                iv_load_policy: 3,
                rel: 0,
                disablekb: 1,
                playlist: 'zaEoS2ymoQI',
              },
            }}
          />
        </div>
      </div>

      {/* 2. CONȚINUT HERO */}
      <div className="flex flex-col relative z-10 w-full max-w-[1200px] my-auto px-4 sm:px-6 md:px-8 mx-auto items-center justify-between">
        <div className="py-2 sm:py-6 md:py-10 lg:py-12 text-center flex flex-col items-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 md:mb-8 text-[#E8E2D5]/80 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          >
            <MapPin
              size={14}
              className="text-[#D6D0BC] shrink-0 sm:w-4 sm:h-4"
            />
            <span className="font-sans text-[#D6D0BC] text-xs sm:text-sm md:text-base font-normal tracking-wide">
              Prochaine expérience :{' '}
              <strong className="font-semibold text-[#D6D0BC]">
                Next trip
              </strong>
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: 'easeOut',
            }}
            className="font-cormorant font-semibold relative z-10 leading-[1.12] sm:leading-[1.08] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] mb-4 sm:mb-6 md:mb-8 tracking-tight text-center max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl"
          >
            Une autre manière de <br className="hidden sm:inline" />
            <span className="italic">découvrir un pays.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: 'easeOut',
            }}
            className="relative z-10 font-normal text-xs xs:text-sm sm:text-base md:text-lg text-[#E8E2D5]/70 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 text-center"
          >
            Lorem ipsum dolor sit amet consectetur. Sem in metus vel mauris sed
            feugiat. Etiam id sed imperdiet nunc. Auctor nisl mollis nisi ut
            aliquet. Dictum vel arcu sit dolor viverra dictum nulla scelerisque
            aliquet.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 w-full max-w-xs sm:max-w-none"
          >
            <Link
              href="/discover"
              className="inline-flex items-center justify-center bg-[#74321A] hover:bg-[#602915] text-[#F3E6BD] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all shadow-md gap-2.5 w-full sm:w-auto"
            >
              <span>Découvrir</span>
              <span className="text-xs">✦</span>
            </Link>

            <Link
              href="/next-experience"
              className="inline-flex items-center justify-center text-xs sm:text-sm md:text-base text-[#E8E2D5] hover:text-[#F3E6BD] gap-2 transition-colors py-2 group w-full sm:w-auto"
            >
              <span>Voir la prochaine expérience</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* VALUE PROPOSITIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
          className="relative z-10 grid w-full grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-12 text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20"
        >
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col items-center mx-auto w-full max-w-[260px] xs:max-w-[300px] sm:max-w-none px-2"
            >
              <h3 className="font-cormorant font-semibold text-2xl xs:text-3xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.15] text-[#F3E6BD] mb-1.5 sm:mb-2">
                {prop.title}
              </h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#E8E2D5]/60 leading-relaxed max-w-[260px] sm:max-w-none">
                {prop.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

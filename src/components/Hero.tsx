'use client';

import Link from 'next/link';
import ReactPlayer from 'react-player';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="relative min-h-screen w-full bg-hero-gradient mx-auto max-w-[1440px] pt-32 sm:pt-36 md:pt-40 pb-16 text-[#E6DEC9] flex flex-col justify-between overflow-hidden">
      {/* 1. VIDEO FULL-COVER FĂRĂ BĂNDI STRUCTURALE */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40 mix-blend-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]">
          <ReactPlayer
            src="https://www.youtube.com/watch?v=zaEoS2ymoQI"
            playing
            loop
            muted
            playsinline
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            config={{
              youtube: {
                cc_load_policy: 0,
                cc_lang_pref: 'none',
                iv_load_policy: 3,
                rel: 0,
                controls: 0,
                disablekb: 1,
                playlist: 'zaEoS2ymoQI',
              },
            }}
          />
        </div>
      </div>

      {/* 2. CONȚINUT HERO */}
      <div className="flex flex-col relative z-10 w-full max-w-[1200px] my-auto px-4 mx-auto items-center justify-between">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-[#E8E2D5]/80"
        >
          <MapPin size={16} className="text-[#D6D0BC]" />
          <span className="font-sans text-[#D6D0BC] text-sm sm:text-base font-normal tracking-wide">
            Prochaine expérience :{' '}
            <strong className="font-semibold text-[#D6D0BC]">Next trip</strong>
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-cormorant font-semibold relative z-10 leading-[1.08] text-4xl sm:text-6xl md:text-7xl lg:text-[86px] mb-6 tracking-tight text-center"
        >
          Une autre manière de <br />
          <span className="italic">découvrir un pays.</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 font-normal text-xs sm:text-sm text-[#E8E2D5]/70 max-w-xl mb-10 leading-relaxed px-2 text-center"
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
          transition={{ delay: 0.3 }}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full"
        >
          <Link
            href="/discover"
            className="inline-flex items-center justify-center bg-[#74321A] hover:bg-[#602915] text-[#F3E6BD] px-6 py-3 rounded-md text-sm font-medium transition-all shadow-md gap-2.5 w-full sm:w-auto"
          >
            <span>Découvrir</span>
            <span className="text-xs">✦</span>
          </Link>

          <Link
            href="/next-experience"
            className="inline-flex items-center justify-center text-sm text-[#E8E2D5] hover:text-[#F3E6BD] gap-2 transition-colors py-2 group w-full sm:w-auto"
          >
            <span>Voir la prochaine expérience</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* VALUE PROPOSITIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 grid w-full grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-12 mt-16 sm:mt-24"
        >
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col items-center mx-auto max-w-[280px]"
            >
              <h3 className="font-cormorant font-normal text-2xl sm:text-3xl lg:text-4xl leading-[1.15] text-[#F3E6BD] mb-2">
                {prop.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E2D5]/60 leading-relaxed">
                {prop.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
        <div className="relative w-full h-full scale-150 md:scale-150">
          <ReactPlayer
            src="https://www.youtube.com/watch?v=zaEoS2ymoQI"
            playing
            loop
            muted
            playsinline
            width="100%"
            height="100%"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 mix-blend-overlay object-cover"
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                  rel: 0,
                  modestbranding: 1,
                  loop: 1,
                  playlist: 'zaEoS2ymoQI',
                },
              },
            }}
          />
        </div>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-[344px] pb-12 flex flex-col items-center justify-between grow">
        {/* CENTER CONTENT */}
        <div className="text-center flex flex-col items-center my-auto">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3"
          >
            <MapPin size={20} />
            <span className="text-charcoal-75 text-[16px] font-sans font-normal leading-6 tracking-normal">
              Prochaine expérience : <strong>Next trip</strong>
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="leading-[0.95] font-cormorant text-4xl sm:text-6xl md:text-[92px] font-semibold text-[#F3E6BD] mb-7"
          >
            Une autre manière de <br className="hidden sm:inline" />
            <span className="italic">découvrir un pays.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-normal text-xs sm:text-sm md:text-base text-white/70 max-w-xl mb-8 leading-6 tracking-normal"
          >
            Lorem ipsum dolor sit amet consectetur. Sem in metus vel mauris sed
            feugiat. Etiam id sed imperdiet nunc. Auctor nisl mollis nisi ut
            aliquet. Dictum vel arcu sit dolor viverra dictum nulla scelerisque
            aliquet. Eget id ac fringilla convallis aliquet ut proin eget
            viverra. Felis placerat etiam id purus egestas.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 md:gap-16"
          >
            <Button
              asChild
              className="font-sans font-normal bg-[#74321A] hover:bg-[#633222] text-[#F3E6BD] px-5 py-2 rounded-lg text-base transition-colors shadow-lg"
            >
              <Link href="/discover">
                Découvrir <span className="ml-4 text-2xl">✦</span>
              </Link>
            </Button>

            <Link
              href="/next-experience"
              className="font-sans font-normal leading-6 tracking-normal text-sm sm:text-base text-[#E8E2D5] hover:text-[#F3E6BD] flex items-center gap-2 transition-colors py-2"
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
          className="w-full grid grid-cols-1 md:grid-cols-3 pt-12 mt-32 text-center"
        >
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center max-w-[288px] mx-auto"
            >
              <h3 className="font-cormorant font-semibold tracking-[-2.4px] leading-[1.1] max-w-xs text-2xl md:text-[48px] text-[#F3E6BD] mb-2 px-2">
                {prop.title}
              </h3>
              <p className="text-[16px] font-sans text-white/60 leading-6 tracking-normal">
                {prop.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

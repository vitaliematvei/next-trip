'use client';

import Link from 'next/link';
import ReactPlayer from 'react-player';
import { MapPin, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroTest() {
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
    <section className="relative min-h-screen w-full bg-[#383736] mx-auto max-w-[1440px] text-[#E8E2D5] flex flex-col justify-between overflow-hidden font-sans">
      {/* MAIN HERO CONTENT */}
      <div className="bg-hero-gradient relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 flex flex-col items-center justify-center grow">
        {/* CENTER CONTENT */}
        <div className="text-center flex flex-col items-center my-auto w-full max-w-4xl relative">
          {/* CARD VIDEO CENTRAL DIN FIGMA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden pointer-events-none z-0 opacity-40 mix-blend-screen shadow-2xl border border-white/10">
            <ReactPlayer
              src="https://www.youtube.com/watch?v=zaEoS2ymoQI"
              playing
              loop
              muted
              playsinline
              width="100%"
              height="100%"
              className="object-cover scale-125"
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
            {/* Play Icon Centrat */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pl-1 border border-white/30">
                <Play className="text-white fill-white" size={24} />
              </div>
            </div>
          </div>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-[#E8E2D5]/80"
          >
            <MapPin size={16} className="text-[#D6D0BC]" />
            <span className="font-sans text-[#D6D0BC] text-base font-normal tracking-wide">
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
            transition={{ delay: 0.1 }}
            className="font-cormorant font-semibold text-[92px] relative z-10 leading-[1.05]  text-5xl sm:text-7xl md:text-[86px] font-sand-75  mb-6 tracking-tight"
          >
            Une autre manière de <br />
            <span className="italic font-serif">découvrir un pays.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 font-normal text-xs sm:text-sm text-[#E8E2D5]/70 max-w-xl mb-10 leading-relaxed px-2"
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
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full"
          >
            <Link
              href="/discover"
              className="inline-flex items-center justify-center bg-[#74321A] hover:bg-[#602915] text-[#F3E6BD] px-6 py-3 rounded-md text-sm font-medium transition-all shadow-md gap-2.5"
            >
              <span>Découvrir</span>
              <span className="text-xs">✦</span>
            </Link>

            <Link
              href="/next-experience"
              className="inline-flex items-center text-sm text-[#E8E2D5] hover:text-[#F3E6BD] gap-2 transition-colors py-2 group"
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
            className="relative z-10 grid w-full grid-cols-1 gap-8 mb-10 text-center md:grid-cols-3 md:gap-12 mt-24"
          >
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="flex flex-col items-center mx-auto max-w-[280px]"
              >
                <h3 className="font-cormorant font-normal text-3xl sm:text-4xl leading-[1.15] text-[#F3E6BD] mb-2">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8E2D5]/60 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

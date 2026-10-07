'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

// SVG Icons - adăugat aria-hidden="true" deoarece sunt pur decorative
const BedIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
  </svg>
);

const HikingIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="13" cy="4" r="1.5" />
    <path d="M11 20l1.5-6 2.5 3M9 11l3-2 3 3M7 14l2-3" />
    <path d="M6 20l2-5" />
  </svg>
);

const BowlIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 11h16a8 8 0 0 1-16 0z" />
    <path d="M8 5.5s1-1 1-2M12 5.5s1-1 1-2M16 5.5s1-1 1-2" />
  </svg>
);

const LotusIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 5c-2 3.5-5 5.5-8 5.5 3 3.5 6.5 6.5 8 8 1.5-1.5 5-4.5 8-8-3 0-6-2-8-5.5z" />
    <path d="M12 10.5c-1.5 1.5-3 2.5-4.5 3 1.2 1.5 3 2.8 4.5 3.5 1.5-.7 3.3-2 4.5-3.5-1.5-.5-3-1.5-4.5-3z" />
  </svg>
);

interface HighlightItem {
  id: number;
  icon: React.ReactNode;
  text: string;
}

const highlights: HighlightItem[] = [
  {
    id: 1,
    icon: <BedIcon />,
    text: 'Lorem ipsum dolor sit amet consectetur. Neque ultrices.',
  },
  {
    id: 2,
    icon: <HikingIcon />,
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae.',
  },
  {
    id: 3,
    icon: <BowlIcon />,
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi eget mi.',
  },
  {
    id: 4,
    icon: <LotusIcon />,
    text: 'Lorem ipsum dolor sit amet consectetur. Justo.',
  },
];

export default function ExperienceHighlights() {
  // Definirea variantelor pentru animația secvențială (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="experience-highlights-title"
        className="w-full max-w-[1440px] mx-auto bg-[#282828] py-10 md:py-14 px-6 md:px-12 text-sand-75"
      >
        <div className="max-w-6xl mx-auto">
          {/* Titlul secțiunii legat de <section> prin aria-labelledby */}
          <motion.h2
            id="experience-highlights-title"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-sans font-normal text-center text-xs md:text-[14px] uppercase tracking-[3px] leading-5 mb-8 md:mb-12"
          >
            Quelques temps forts de l'expérience
          </motion.h2>

          {/* Lista de elemente */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 lg:grid-cols-4 divide-y divide-[#F8F0D833] lg:divide-y-0 lg:divide-x list-none p-0 m-0"
          >
            {highlights.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start text-center lg:text-left py-6 lg:py-0 lg:px-8 first:pt-0 lg:first:pl-0 last:pb-0 lg:last:pr-0 space-y-3 md:space-y-4"
              >
                <div className="text-golden-400" aria-hidden="true">
                  {item.icon}
                </div>
                <p className="font-cormorant font-semibold text-[18px] md:text-[20px] leading-7 md:leading-8 tracking-0">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}

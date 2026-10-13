'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

// Componentă pentru steluța ascuțită cu colțuri concave (folosită ca bullet point)
const ListSparkle = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#C6A378] shrink-0"
    aria-hidden="true"
  >
    <path d="M12 2 C12 7.5 7.5 12 2 12 C7.5 12 12 16.5 12 22 C12 16.5 16.5 12 22 12 C16.5 12 12 7.5 12 2 Z" />
  </svg>
);

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices in in ac magna duis varius. Libero sit diam lobortis ut maecenas eo lorem vulputate sapien.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Habitant mattis imperdiet mattis phasellus. Rhoncus posuere purus vestibulum feugiat. Ornare.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nullam sapien ridiculus eu ipsum mauris placerat nunc diam mi. Volutpat vitae ultrices at nunc.',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur. Urna in at sapien arcu varius vitae amet. Platea id ipsum tellus pulvinar. Vestibulum nisl nulla morbi.',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur. In netus nec nullam nunc. Cursus eget sed commodo massa amet non dis pulvinar massa. Mattis.',
  },
];

export default function UniqueParenthesisSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="unique-section-title"
      className="w-full max-w-[1440px] mx-auto bg-[#282828] text-charcoal-50 py-16 px-6 sm:px-10 lg:px-16 font-cormorant"
    >
      <div className="w-full mx-auto space-y-12">
        {/* 1. Titlul Principal Centrat */}
        <motion.h2
          id="unique-section-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-center text-charcoal-50"
        >
          Ce qui rend cette parenthèse unique
        </motion.h2>

        {/* 2. Cardul principal cu fundal închis și chenar subtil */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-[#333333] p-6 sm:p-10 xl:p-12 shadow-2xl grid grid-cols-1 xl:grid-cols-[600px_1fr] gap-8 xl:gap-12 items-center"
        >
          {/* Coloana Stânga: Imagine mare (Placeholder) */}
          <div className="relative aspect-square sm:aspect-4/3 xl:aspect-[600/536] w-full xl:w-[600px] overflow-hidden">
            <Image
              src="/img/landscape-mountains.jpg"
              alt="Illustration unique de l'expérience"
              fill
              sizes="(max-width: 1280px) 100vw, 600px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Coloana Dreapta: Lista de elemente */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="space-y-1"
              >
                <div className="flex items-center gap-3.5">
                  <ListSparkle />
                  <h3 className="font-caveat text-lg sm:text-[28px] font-normal leading-none text-charcoal-50">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-7 text-xs sm:text-base text-charcoal-300 font-normal font-sans leading-6 tracking-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JournalSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#282828] text-charcoal-50 pt-20 pb-10 sm:pt-28 sm:pb-12 lg:pt-30 px-6 sm:px-10 lg:px-16 flex justify-center items-center">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-[64px] mb-3 tracking-[-1px] leading-16">
            Journal
          </h2>
          <p className="font-caveat font-normal text-xl sm:text-2xl text-golden-400 italic">
            Des histoires de lieux, de rencontres et de chemins parcourus
          </p>
        </motion.div>

        {/* Journal Article Card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[1096px] flex flex-col gap-6 group cursor-pointer"
        >
          {/* Article Image Container */}
          <div className="relative w-full aspect-video overflow-hidden rounded-[16px] shadow-2xl bg-[#3A3532]">
            <Image
              src="/img/journal-arrival.jpg" // Replace with your actual image path
              alt="Une arrivée en douceur"
              fill
              sizes="(max-width: 1096px) 100vw, 1100px"
              className="object-cover"
            />
          </div>

          {/* Article Content Details */}
          <div className="flex flex-col gap-2 pt-2">
            {/* Category Tag */}
            <span className="font-sans text-xs uppercase tracking-[3.5px] leading-6 text-golden-400 font-normal">
              TRIP
            </span>

            {/* Article Title */}
            <h3 className="font-cormorant font-semibold text-2xl sm:text-3xl lg:text-[44px] text-charcoal-50 transition-colors group-hover:text-golden-400">
              Une arrivée en douceur
            </h3>

            {/* Article Excerpt */}
            <p className="font-sans font-normal text-sm sm:text-base text-charcoal-300 leading-6 tracking-0">
              Lorem ipsum dolor sit amet consectetur. Blandit donec amet
              bibendum dui purus varius magna.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

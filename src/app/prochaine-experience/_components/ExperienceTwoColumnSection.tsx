'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ExperienceTwoColumnSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="content-section-title"
      className="w-full max-w-[1440px] mx-auto bg-[#282828] text-charcoal-75 py-16       px-6 sm:px-10 lg:px-16"
    >
            <div className="w-full mx-auto space-y-10 md:space-y-12">
        {/* 1. Titlul principal cu font Serif */}
        <motion.h2
          id="content-section-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-cormorant font-semibold text-3xl sm:text-4xl md:text-[50px] leading-12 text-charcoal-50 tracking-0"
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.h2>

        {/* 2. Conținut text împărțit în 2 coloane responsive */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 font-sans text-xs sm:text-sm md:text-[18px] font-normal leading-8 text-charcoal-300 tracking-0"
        >
          {/* Coloana Stânga */}
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Id proin non et potenti
              quam eget. Odio leo elementum id nibh in pellentesque tincidunt.
              Odio eget pellentesque cursus mi ridiculus amet at. Nibh quis sed
              vitae congue adipiscing quam. Tincidunt suspendisse dictum
              pulvinar ut dolor sed pellentesque accumsan.
            </p>
            <p>
              Id nunc vivamus mattis nunc sodales at nam quis. Ornare viverra
              blandit dignissim amet nibh urna est. At quis nascetur amet sed.
              Egestas vitae libero in congue habitasse venenatis. Interdum odio
              tortor quis aenean penatibus sit tempor sed pellentesque. Vitae
              sed at ultrices commodo at.
            </p>
          </div>

          {/* Coloana Dreapta */}
          <div className="md:mt-32">
            <p>
              Lorem ipsum dolor sit amet consectetur. Venenatis id elementum
              quis ultrices habitasse pretium nec est. Ornare vitae enim ipsum
              ultrices egestas nulla. Ut ut et tempus turpis arcu. Duis aliquam
              varius nibh elit donec amet ultrices. Commodo dui volutpat nulla
              ut quis ac commodo. Non orci pulvinar dui viverra. Tempus in id
              tempor sit tortor feugiat. Lacus felis odio convallis facilisis
              placerat duis faucibus laoreet suscipit.
            </p>
            <p>
              Faucibus morbi quis dictum in vestibulum sed commodo feugiat
              sagittis. A ut ut placerat malesuada imperdiet congue augue nec.
              Mollis ac ut pretium hac suspendisse sed augue. Ac vestibulum
              interdum massa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

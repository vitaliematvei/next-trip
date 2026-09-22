'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImageSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Urmărim scroll-ul standard pentru un parallax fin
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Am redus ușor plaja de la ['-10%', '10%'] pentru un efect elegant și controlat
  const yImage = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden flex justify-center items-center"
    >
      {/* Containerul strict la 1440px lățime, centrat */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Aspect ratio adaptat pentru a semăna perfect cu randarea cinematică din Figma */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[2.35/1] overflow-hidden shadow-xl">
          {/* Wrapper-ul animat pentru efectul de parallax */}
          <motion.div
            style={{ y: yImage }}
            className="absolute -top-[15%] -bottom-[15%] left-0 right-0 w-full h-[130%]"
          >
            <Image
              src="/img/landscape-village.jpg"
              alt="Peisaj montan cu case tradiționale și natură"
              fill
              sizes="1440px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

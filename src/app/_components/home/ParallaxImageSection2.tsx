'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImageSection2() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Urmărim scroll-ul standard pentru un parallax fin
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 30%'],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ['-22%', '22%']);

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden flex justify-center items-center"
    >
      {/* Containerul strict la 1440px lățime, centrat */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Aspect ratio adaptat pentru a semăna perfect cu randarea cinematică din Figma */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[2.35/1] overflow-hidden shadow-xl">
          {/* Overscan-ul păstrează cadrul umplut pe toată durata mișcării. */}
          <motion.div
            style={{ y: yImage }}
            className="absolute -top-[50%] -bottom-[50%] left-0 right-0 w-full h-[200%]"
          >
            <Image
              src="/img/landscape-mountains.jpg"
              alt="Peisaj montan cu vârfuri stâncoase și natură"
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

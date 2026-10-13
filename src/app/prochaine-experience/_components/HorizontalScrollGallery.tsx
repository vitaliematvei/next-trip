'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/img/landscape-mountains.jpg',
    alt: 'Maimuțe privind panorama orașului',
  },
  {
    id: 2,
    src: '/img/landscape-mountains.jpg',
    alt: 'Terase de orez în trepte',
  },
  {
    id: 3,
    src: '/img/landscape-mountains.jpg',
    alt: 'Peisaj montan spectaculos',
  },
  {
    id: 4,
    src: '/img/landscape-mountains.jpg',
    alt: 'Vedere panoramică locală',
  },
];

export default function HorizontalScrollGallery() {
  const targetRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);

  // Distanța exactă de derulare = lățimea pistei minus lățimea vizibilă
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const update = () =>
      setMaxShift(Math.max(0, track.scrollWidth - viewport.clientWidth));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  // Urmărim progresul scroll-ului în cadrul acestei secțiuni
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Scroll-ul vertical al mouse-ului (0 la 1) devine mișcare orizontală.
  // Mișcarea este comandată de utilizator, deci nu este dezactivată de reduced-motion.
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  return (
    <section
      ref={targetRef}
      aria-labelledby="horizontal-gallery-title"
      className="relative h-[300vh] w-full max-w-[1440px] mx-auto bg-[#F8F0D8]"
    >
      {/* Titlu ascuns pentru screen readere / accesibilitate */}
      <h2 id="horizontal-gallery-title" className="sr-only">
        Galerie foto cu defilare orizontală
      </h2>

      {/* Containerul fixat pe ecran; padding-ul lasă conținutului 1440px - 2 x 64px = 1312px */}
      <div className="sticky top-0 flex h-screen items-center px-6 sm:px-10 lg:px-16">
        <div ref={viewportRef} className="@container w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-6 sm:gap-8 will-change-transform"
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh] w-[80cqw] sm:w-[55cqw] lg:w-[45cqw] shrink-0 overflow-hidden  bg-[#333333] shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 590px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

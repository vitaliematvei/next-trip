'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionConfig } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
}

// Imagine individuala din stratul de galerie
function FloatingImageItem({ src, alt, className }: FloatingImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`absolute overflow-hidden shadow-2xl bg-[#333333] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 30vw, 20vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}

export default function ScatteredGalleryHeader() {
  const containerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Panoul se fixează când își atinge marginea de sus sau de jos față de viewport,
  // oricare vine prima (pe mobil panoul poate fi mai înalt decât ecranul)
  const [pinTop, setPinTop] = useState(0);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const update = () =>
      setPinTop(Math.min(0, window.innerHeight - panel.offsetHeight));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(panel);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Progresul (0-1) al imaginilor rulează doar cât timp panoul este fixat
  const { scrollY } = useScroll();
  const layerProgress = useTransform(scrollY, () => {
    const section = containerRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return 0;
    const pinnedDistance = section.offsetHeight - panel.offsetHeight;
    const top = Math.min(0, window.innerHeight - panel.offsetHeight);
    const scrolled = top - section.getBoundingClientRect().top;
    return Math.min(1, Math.max(0, scrolled / pinnedDistance));
  });

  // Configurația imaginilor amestecate / flotante
  const images = [
    // Stânga Sus
    {
      id: 1,
      src: '/img/landscape-mountains.jpg',
      alt: 'Peisaj montan',
      className:
        'top-[10%] left-[4%] w-[7.7rem] h-[8.855rem] sm:w-[12.1rem] sm:h-[13.915rem] md:w-[15.4rem] md:h-[17.71rem] lg:w-[17.6rem] lg:h-[20.24rem]',
      depth: -0.4,
    },
    // Dreapta Sus 1
    {
      id: 2,
      src: '/img/landscape-mountains.jpg',
      alt: 'Detalii cazare',
      className:
        'top-[16%] right-[10%] w-[7.7rem] h-[8.855rem] sm:w-[11rem] sm:h-[12.65rem] md:w-[14.3rem] md:h-[16.445rem] lg:w-[16.5rem] lg:h-[18.975rem]',
      depth: 0.3,
    },
    // Dreapta Sus 2 (Suprapus / Eșalonat)
    {
      id: 3,
      src: '/img/landscape-mountains.jpg',
      alt: 'Experiență culinară',
      className:
        'top-[26%] right-[3%] w-[6.6rem] h-[7.59rem] sm:w-[9.9rem] sm:h-[11.385rem] md:w-[13.2rem] md:h-[15.18rem] lg:w-[14.3rem] lg:h-[16.445rem]',
      depth: -0.2,
    },
    // Mijloc Stânga 1
    {
      id: 4,
      src: '/img/landscape-mountains.jpg',
      alt: 'Traseu montan',
      className:
        'top-[42%] left-[10%] w-[6.6rem] h-[7.59rem] sm:w-[9.9rem] sm:h-[11.385rem] md:w-[12.1rem] md:h-[13.915rem] lg:w-[13.2rem] lg:h-[15.18rem]',
      depth: 0.5,
    },
    // Mijloc Stânga 2 (Imagini gastronomie din mockup)
    {
      id: 5,
      src: '/img/landscape-mountains.jpg',
      alt: 'Mâncare tradițională',
      className:
        'top-[48%] left-[3%] w-[7.7rem] h-[8.855rem] sm:w-[11rem] sm:h-[12.65rem] md:w-[14.3rem] md:h-[16.445rem] lg:w-[15.4rem] lg:h-[17.71rem]',
      depth: -0.3,
    },
    // Mijloc Dreapta
    {
      id: 6,
      src: '/img/landscape-mountains.jpg',
      alt: 'Activități în aer liber',
      className:
        'top-[58%] right-[12%] w-[6.6rem] h-[7.59rem] sm:w-[9.9rem] sm:h-[11.385rem] md:w-[12.1rem] md:h-[13.915rem] lg:w-[13.2rem] lg:h-[15.18rem]',
      depth: 0.4,
    },
    // Jos Stânga
    {
      id: 7,
      src: '/img/landscape-mountains.jpg',
      alt: 'Momente de relaxare',
      className:
        'bottom-[1%] left-[5%] w-[8.8rem] h-[10.12rem] sm:w-[13.2rem] sm:h-[15.18rem] md:w-[15.4rem] md:h-[17.71rem] lg:w-[17.6rem] lg:h-[20.24rem]',
      depth: -0.5,
    },
    // Jos Dreapta
    {
      id: 8,
      src: '/img/landscape-mountains.jpg',
      alt: 'Grup în excursie',
      className:
        'bottom-[4%] right-[7%] w-[7.7rem] h-[8.855rem] sm:w-[12.1rem] sm:h-[13.915rem] md:w-[14.3rem] md:h-[16.445rem] lg:w-[15.4rem] lg:h-[17.71rem]',
      depth: 0.2,
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={containerRef}
        aria-labelledby="scattered-header-title"
        className="relative h-[65vh] sm:h-[330vh] w-full max-w-[1440px] mx-auto bg-[#282828] text-sand-75"
      >
        <div
          ref={panelRef}
          style={{ top: pinTop }}
          className="sticky flex pt-8 min-[480px]:pt-4 pb-10 sm:py-0 lg:pb-[5%] sm:h-screen w-full flex-col items-center justify-center sm:justify-start lg:justify-center sm:pt-6 lg:pt-0 overflow-hidden px-4"
        >
          {/* 1. Text centrat; se derulează normal împreună cu pagina */}
          <div className="relative z-20 max-w-3xl text-center flex flex-col items-center gap-10 px-4 pt-8 pb-8 min-[480px]:pt-4 sm:py-8">
            <motion.h1
              id="scattered-header-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-cormorant text-3xl sm:text-5xl md:text-6xl  font-bold leading-[57px] tracking-[-1.2px]"
            >
              Lorem ipsum dolor sit amet consectetur. Cras nec.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="font-sans text-xs sm:text-sm md:text-[18px] font-normal leading-[150%]  max-w-[650px]"
            >
              Lorem ipsum dolor sit amet consectetur. At proin sed erat risus
              augue praesent. Id suscipit pellentesque amet scelerisque sit
              massa duis turpis diam. Ut arcu ac varius ut elit augue.
              Vestibulum lectus massa fringilla lobortis amet montes ridiculus
              etiam. In euismod tortor accumsan nulla blandit dolor ac
              malesuada. Bibendum tincidunt tortor tellus nec pharetra
              scelerisque tellus in nec. Commodo tellus tempor id iaculis
              euismod quam. Urna duis et scelerisque vestibulum sed. Duis ac
              aliquam sed morbi sed fermentum. Hac mattis eu ultricies eu nulla
              vitae habitant. Tellus dolor ornare ac volutpat ut. Consequat
              sagittis sem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <a
                href="#explore"
                className="inline-flex items-center gap-3 px-5 sm:px-6 sm:py-2 rounded-2xl border border-[#C6A378]/50  text-golden-50 text-base font-sans tracking-0 hover:border-[#C6A378] hover:bg-[#2f2f2f] transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A378]"
              >
                <span>Rejoindre l'expérience</span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                  className="text-[#FFFBF0]"
                >
                  {/* Calea M... C... creează 4 colțuri ascuțite și 4 laturi curbate/concave */}
                  <path d="M12 2 C12 7.5 7.5 12 2 12 C7.5 12 12 16.5 12 22 C12 16.5 16.5 12 22 12 C16.5 12 12 7.5 12 2 Z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* 2. Galerie de imagini împrăștiate cu Parallax */}
          <motion.div
            style={{ '--p': layerProgress } as React.CSSProperties}
            className="absolute inset-x-0 top-72 z-10 h-[135%] sm:h-[200%] [--end:calc(-33.333%-18rem-90px)] sm:[--end:calc(-50%-18rem-90px)] translate-y-[calc(var(--p)*var(--end))] pointer-events-none"
            aria-hidden="true"
          >
            {images.map((img) => (
              <FloatingImageItem
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={img.className}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

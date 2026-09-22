'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#ECE5C9] text-[#2C2825] py-16 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      {/* Container principal centrat cu spațiere corectă pe ambele părți */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* COLOANA STÂNGA: TITLU + PARAGRAF (470x571) */}
        <div className="lg:col-span-5 flex flex-col justify-between w-full max-w-[470px] aspect-auto lg:aspect-[470/571] gap-6 sm:gap-8 lg:gap-[80px] mx-auto lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] font-semibold leading-[1.08] tracking-tight"
          >
            Des expériences immersives, loin des circuits habituels.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-xs sm:text-sm md:text-[17px] leading-relaxed text-[#2C2825]/80"
          >
            <strong className="font-bold text-[#2C2825]">
              On s’adresse à celles et ceux qui recherchent une autre manière de
              voyager.
            </strong>{' '}
            Imaginée par son fondateur et construite avec des partenaires locaux
            soigneusement sélectionnés, chaque expérience se vit en petit groupe
            de 10 personnes maximum pour privilégier les rencontres de manière
            plus authentique et prendre le temps de s’ancrer dans un territoire,
            sa culture et ses habitants.
          </motion.p>
        </div>

        {/* COLOANA DREAPTA: GRUPUL DE IMAGINI ȘI CARDUL CU CITAT (PĂSTRAT LA DISTANȚĂ DE MARGINE) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row items-center justify-between w-full max-w-[776px] aspect-auto lg:aspect-[776/622] gap-8 lg:gap-[40px] mx-auto lg:ml-auto lg:mr-0">
          {/* WRAPPER PENTRU CELE DOUĂ IMAGINI SUPRAPUSE (444x622) */}
          <div className="relative w-full max-w-[444px] aspect-[444/622] flex-shrink-0">
            {/* Imaginea mare de jos (Drumeție) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 bottom-0 w-[72%] h-[74%] rounded-sm overflow-hidden shadow-md z-0"
            >
              <Image
                src="/img/hiking.jpg"
                alt="Grup în drumeție pe traseu montan"
                fill
                sizes="(max-width: 768px) 80vw, 35vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Imaginea mică de sus (Cafea la nisip) - împinsă mai mult spre dreapta */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute right-[-10px] md:right-[-20px] top-0 w-[65%] h-[65%] rounded-sm overflow-hidden shadow-xl border-4 border-[#ECE5C9] z-10"
            >
              <Image
                src="/img/coffee.jpg"
                alt="Preparare tradițională cafea"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* CARD-UL CU CITAT: CU MARGINI SIGURE ȘI DIMENSIUNI FIXE PE DESKTOP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-[292px] md:aspect-[292/355] bg-[#E1C88F] p-6 sm:p-8 md:pt-[40px] md:pb-[40px] md:px-[44px] rounded-sm flex flex-col justify-between shrink-0 self-center shadow-md gap-4 md:gap-0 mx-auto md:mx-0"
          >
            {/* Ghilimelele */}
            <span className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-[#8C3A23] leading-none select-none">
              “
            </span>
            <blockquote className="font-cormorant italic text-base sm:text-lg md:text-[22px] leading-snug text-[#2C2825] font-normal">
              L’important n’est pas seulement où l’on va, mais la manière dont
              on se connecte au territoire.
            </blockquote>
            <div className="hidden md:block h-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

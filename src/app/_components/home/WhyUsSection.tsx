'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyUsSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#F8F0D8] text-[#2C2825] py-16 sm:py-24 lg:py-[120px] px-6 sm:px-10 lg:px-[64px] overflow-hidden flex justify-center items-center">
      {/* Containerul imediat: gap adaptiv și max-width corect */}
      <div className="w-full max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[107px] items-center">
        {/* COLOANA STÂNGA: TITLU, DESCRIERE, BUTON ȘI CITAT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col w-full gap-6 sm:gap-8 text-center lg:text-left items-center lg:items-start"
        >
          {/* Titlu și paragraf */}
          <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.08] tracking-tight text-[#2C2825]">
              Pourquoi nous ?
            </h2>
            <p className="font-sans font-normal text-sm sm:text-base leading-relaxed text-[#2C2825]/80 max-w-[540px]">
              Lorem ipsum dolor sit amet consectetur. Rhoncus in ultricies
              adipiscing porttitor nibh nulla nec sit. Purus id sollicitudin
              aliquet urna arcu. Nibh adipiscing in mattis quis aliquet nisl
              risus. Diam faucibus id mauris faucibus lorem et. Cras ultrices
              malesuada eget mauris. Nec porta ultrices laoreet.
            </p>
          </div>

          {/* Buton */}
          <div>
            <a
              href="#approche"
              className="inline-flex items-center justify-center bg-[#E1C88F] hover:bg-[#d4b97c] text-[#2C2825] font-sans text-sm font-medium px-6 py-3.5 rounded-[10px] shadow-sm transition-colors duration-200"
            >
              Découvrir l'approche
            </a>
          </div>

          {/* Citatul */}
          <div className="border-l-2 border-[#8C3A23] pl-4 sm:pl-6 my-6 sm:my-10 lg:my-16 text-left">
            <p className="max-w-[500px] font-caveat italic text-xl sm:text-2xl lg:text-[28px] leading-snug text-[#8C3A23] font-normal">
              Chaque expérience se construit au plus près du territoire, de
              celles et ceux qui l'habitent, et de ce qui mérite vraiment d'être
              vécu sur place.
            </p>
          </div>
        </motion.div>

        {/* COLOANA DREAPTA: Corectat comportamentul de aliniere și lățime pentru a nu mai sta lipit de margini */}
        <div className="lg:col-span-6 w-full max-w-[648px] mx-auto lg:mx-0 flex flex-col relative justify-self-center lg:justify-self-end">
          {/* Containerul imaginii */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-[648/679] rounded-sm overflow-hidden shadow-xl z-10"
          >
            <Image
              src="/img/guide-mountain.jpg"
              alt="Ghid local în munte"
              fill
              sizes="(max-width: 1024px) 100vw, 648px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

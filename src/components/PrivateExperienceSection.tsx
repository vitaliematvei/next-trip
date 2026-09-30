'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PrivateExperienceSection() {
  return (
    <section className="relative flex w-full max-w-[1440px] mx-auto items-center justify-center overflow-hidden bg-[#792F14] py-16 sm:py-24 lg:py-[120px] px-6 sm:px-10 lg:px-[64px]">
      <div className="group absolute inset-0">
        <Image
          src="/img/mountain-landscape.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1312px] mx-auto flex items-center justify-end">
        {/* Caseta de text poziționată în dreapta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-[560px] bg-[#2E210F]/90 p-8 sm:p-12 lg:py-24 lg:px-12 border border-[#473C2C] m-6 sm:m-10 lg:mr-16 text-saffron-200 flex flex-col gap-6"
        >
          {/* Titlu principal */}
          <h2 className="font-cormorant font-normal text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-[-1px] text-[var(--Warm-Sand-50,#F9F8F5)]">
            Des expériences en format privé et sur-mesure
          </h2>

          {/* Paragraf cu stiluri exacte pentru Inter Bold și DM Sans Regular */}
          <p className="font-sans font-normal text-[18px] leading-[26px] text-sand-50">
            <strong className="font-inter font-bold text-[18px] leading-[26px]">
              Pour une personne seule, une famille ou un groupe privé,
            </strong>{' '}
            on peut concevoir votre expérience sur mesure selon les mêmes
            exigences : partenaires locaux, rythme adapté et échanges en amont
            afin de construire le séjour qui vous ressemble.
          </p>

          {/* Buton de acțiune */}
          <div className="pt-2">
            <a
              href="#creer"
              className="inline-flex items-center justify-center bg-[#E1C88F] hover:bg-[#d4b97c] text-[#2C2825] font-sans text-[16px] leading-6 font-medium px-7 py-3.5 rounded-[10px] shadow-sm transition-colors duration-200"
            >
              Créer mon expérience
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

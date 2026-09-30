'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceGallerySection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#792F14] text-saffron-200 py-16 sm:py-24 lg:py-[120px] px-6 sm:px-10 lg:px-[64px] overflow-hidden flex justify-center items-center">
      {/* Ordinea elementelor păstrează galeria liniară pe mobil și pe rânduri pe desktop. */}
      <div className="w-full max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 w-full max-w-[450px] mx-auto lg:mx-0"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden group shadow-lg">
            <Image
              src="/img/morning-rituals.jpg"
              alt="Rituels du matin"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <span className="font-sans text-center text-xs uppercase tracking-[2px] text-saffron-200/80">
            Rituels du matin
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6 w-full max-w-[450px] mx-auto lg:mx-0 lg:max-w-[520px] lg:justify-self-end"
        >
          <div className="relative w-full aspect-4/3 overflow-hidden group shadow-lg lg:aspect-4/5">
            <Image
              src="/img/villages.jpg"
              alt="Villages traditionnels"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <span className="font-sans text-center text-xs uppercase tracking-[2px]">
            Villages traditionnels
          </span>
        </motion.div>

        {/* Ridicăm textul pe desktop ca să se alinieze cu eticheta imaginii verticale. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[480px] mx-auto py-2 sm:py-4 text-center lg:mx-0 lg:-mt-28 lg:text-left"
        >
          <h2 className="font-cormorant font-normal text-[32px] sm:text-4xl lg:text-[48px] leading-[1.12] lg:leading-[50px] tracking-normal lg:tracking-[-1.5px]">
            Certains lieux ne se traversent pas.{' '}
            <span className="italic font-caveat font-normal">
              Ils se vivent.
            </span>
          </h2>
        </motion.div>

        {/* Rândul de jos folosește o compoziție asimetrică: imagine mare și imagine îngustă. */}
        <div className="grid w-full grid-cols-1 gap-y-12 lg:col-span-2 lg:grid-cols-[2fr_1fr] lg:items-start lg:gap-x-[9.5%] lg:gap-y-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full max-w-[450px] mx-auto flex-col gap-6 lg:mx-0 lg:max-w-none"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden group shadow-lg">
              <Image
                src="/img/mouvement.jpg"
                alt="Mouvement et respiration"
                fill
                sizes="(max-width: 1023px) 450px, 67vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <span className="font-sans text-center text-xs uppercase tracking-[2px]">
              Mouvement et respiration
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex w-full max-w-[450px] mx-auto flex-col gap-6 lg:mx-0 lg:max-w-none"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden group shadow-lg lg:aspect-10/11">
              <Image
                src="/img/lieux.jpg"
                alt="Lieux"
                fill
                sizes="(max-width: 1023px) 450px, 34vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <span className="font-sans text-center text-xs uppercase tracking-[2px]">
              Lieux
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

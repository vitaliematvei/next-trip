'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JournalGridSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#282828] pb-24 px-6 sm:px-10 lg:px-16 flex justify-center items-center">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col items-center">
        {/* Articles Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full max-w-[1100px] mb-16">
          {/* Article 1 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 group cursor-pointer"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative w-full aspect-16/11 overflow-hidden shadow-xl">
              <Image
                src="/img/journal-culture.jpg" // Replace with your actual image path
                alt="Carnet culturel"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans font-normal text-xs uppercase tracking-[3.5px] leading-6 text-golden-400">
                CARNET CULTUREL
              </span>
              <h3 className="font-cormorant font-semibold text-2xl sm:text-[30px] leading-[34.5px] text-charcoal-50 transition-colors group-hover:text-golden-400">
                Lorem ipsum dolor sit amet consectetur. Sed etiam suspendisse.
              </h3>
              <p className="font-sans font-normal text-sm sm:text-[15px] text-charcoal-300 leading-6 tracking-0">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper diam
                consectetur fringilla tortor pulvinar massa sit velit. Sit
                tempor eu eu condimentum.
              </p>
            </div>
          </motion.article>

          {/* Article 2 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2 group cursor-pointer"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative w-full aspect-16/11 overflow-hidden shadow-xl">
              <Image
                src="/img/journal-trip.jpg" // Replace with your actual image path
                alt="Trip"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans font-normal text-xs uppercase tracking-[3.5px] leading-6 text-golden-400">
                TRIP
              </span>
              <h3 className="font-cormorant font-semibold text-2xl sm:text-[30px] leading-[34.5px] text-charcoal-50 transition-colors group-hover:text-golden-400">
                Lorem ipsum dolor sit amet consectetur. Arcu eu purus ipsum.
              </h3>
              <p className="font-sans font-normal text-sm sm:text-[15px] text-charcoal-300 leading-6 tracking-0">
                Lorem ipsum dolor sit amet consectetur. Eget enim egestas
                tincidunt nunc. Duis sed tellus lectus proin quis tortor. Urna
                imperdiet purus purus diam.
              </p>
            </div>
          </motion.article>
        </div>

        {/* View All Publications Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#publications"
            className="inline-flex items-center justify-center bg-[#E1C88F] hover:bg-[#d4b97c] text-[#2C2825] font-sans text-sm sm:text-[15px] font-medium px-8 py-3.5 rounded-[10px] shadow-sm transition-colors duration-200"
          >
            Toutes les publications
          </a>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

export default function NextTripSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#792F14] text-saffron-200 py-16 sm:py-24 lg:py-[120px] px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="w-full max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-[107px] items-center box-border">
        {/* COLOANA STÂNGA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center w-full min-w-0 max-w-full"
        >
          <span className="font-cormorant italic text-xl sm:text-[40px] font-medium mb-2">
            Prochaine expérience :
          </span>

          {/* Folosim min(vw) combinat cu clamp pentru ca textul să nu depășească lățimea disponibilă a ecranului */}
          <h2
            className="font-caveat font-normal tracking-[-2px] whitespace-nowrap block max-w-full"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 200px)', lineHeight: '1.1' }}
          >
            Next trip
          </h2>
        </motion.div>

        {/* COLOANA DREAPTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col w-full min-w-0 max-w-full gap-6 sm:gap-8"
        >
          {/* Badge-uri */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#542111] px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-normal">
              <Clock className="w-4 h-4" />
              <span>10 jours / 9 nuits</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#542111] px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-normal">
              <Users className="w-4 h-4" />
              <span>4 à 10 participants</span>
            </div>
          </div>

          {/* Paragrafe */}
          <div className="flex flex-col gap-4 font-sans font-normal tracking-[-0.72px] leading-[26px] text-sm sm:text-base break-words">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus aliquam integer ut
              arcu vitae venenatis neque velit lacus. Vulputate sit pellentesque
              nibh adipiscing id. Egestas eget imperdiet scelerisque ut et
              mattis netus mi dolor. Ac auctor vel massa aliquam lectus
              ultricies nibh. Consequat eget tortor mi maecenas tellus eu tortor
              sit. Enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Viverra sollicitudin sit
              aliquam scelerisque at dolor sagittis in habitasse. Amet nulla
              libero gravida faucibus habitant in commodo nunc viverra. Est enim
              odio at congue nisi elementum dictumst amet.
            </p>
          </div>

          {/* Buton */}
          <div className="pt-2">
            <a
              href="/prochaine-experience"
              className="inline-flex items-center justify-center bg-[#E1C88F] hover:bg-[#d4b97c] text-[#2C2825] font-sans text-[16px] px-6 py-3.5 rounded-[10px] shadow-sm transition-colors duration-200"
            >
              Découvrir l&apos;expérience
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

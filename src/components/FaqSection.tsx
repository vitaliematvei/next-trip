'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ items data
const faqItems = [
  {
    id: 1,
    question: "À qui s'adressent les séjours ?",
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et. Suspendisse augue sed aliquet in bibendum neque elit pulvinar. At nunc facilisi sed diam arcu. Eget dignissim nibh in turpis turpis semper morbi. F。ames elementum ultricies et sit sed.',
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet consectetur. Neque eget.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 3,
    question: 'Que comprend le séjour ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 4,
    question: 'Puis-je participer seul(e) ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 5,
    question: 'Les groupes sont-ils limités ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 6,
    question: 'Comment sont sélectionnées les expériences ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 7,
    question: 'Comment serai-je accompagné avant et pendant le voyage ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 8,
    question: 'Comment réserver ma place ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
  {
    id: 9,
    question: 'Que se passe-t-il une fois ma réservation confirmée ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Mattis velit consequat sem et. Neque enim mauris quis sit suspendisse imperdiet placerat at et.',
  },
];

export default function FaqSection() {
  // First item open by default, as shown in the image
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-saffron-800 py-20 sm:py-28 lg:py-[120px] px-6 sm:px-10 lg:px-[64px] flex justify-center items-center text-saffron-50">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Left Column: Section Title */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
          <h2 className="font-cormorant font-bold italic text-4xl sm:text-5xl lg:text-[88px] leading-[1.2] tracking-[-1.5px] text-[#F9F8F5]">
            Questions
            <br />
            Fréquentes
          </h2>
        </div>

        {/* Right Column: FAQ Accordion List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="border-b border-[#A7542C] transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="font-cormorant text-xl sm:text-2xl lg:text-[24px] leading-6 tracking-[-0.2px] font-bold pr-6 transition-colors group-hover:text-[#E1C88F]">
                    {item.question}
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-[#F9F8F5] shrink-0 w-8 h-8 flex items-center justify-center">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans font-normal text-sm sm:text-base text-saffron-200 pb-6 leading-[27.2px] tracking-0 max-w-[720px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

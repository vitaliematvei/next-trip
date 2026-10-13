'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    id: 1,
    question: 'Quel est le niveau physique requis ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Sed sollicitudin vivamus rhoncus egestas enim scelerisque egestas mi in interdum. Erat et feugiat mi nunc nisl velit semper dui nec nunc.',
  },
  {
    id: 2,
    question: "Quand se déroule l'expérience ?",
    answer:
      'Lorem ipsum dolor sit amet consectetur. Dui viverra euismod fringilla nisl nisl. Egestas sed convallis pretium viverra phasellus nibh turpis dolor.',
  },
  {
    id: 3,
    question: 'Comment rejoindre le groupe ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut cursus magna pulvinar pretium elit quam a purus ipsum. Dignissim id curabitur odio eleifend pretium convallis.',
  },
  {
    id: 4,
    question: 'Quel budget prévoir en dehors du séjour ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Dignissim maecenas fringilla dapibus ultricies non maecenas vitae te. Hendrerit pellentesque pretium quisque leo.',
  },
  {
    id: 5,
    question: 'Comment réserver ma place ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vivamus eros velit sed convallis pellentesque neque gravida scelerisque.',
  },
];

export default function ExperienceFaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      aria-labelledby="faq-section-title"
      className="w-full max-w-[1440px] mx-auto bg-[#792F14] text-sand-100 py-20 px-6 md:px-12 lg:px-20 font-cormorant"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Coloana Stânga: Titlul Secțiunii */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <motion.h2
            id="faq-section-title"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-cormorant text-4xl sm:text-5xl lg:text-[88px] font-semibold italic leading-[88px] tracking-[-1.5px]"
          >
            Questions <br /> Fréquentes
          </motion.h2>
        </div>

        {/* Coloana Dreapta: Lista Accordion */}
        <div className="lg:col-span-7 divide-y divide-[#F8F0D8]/15 border-y border-[#F8F0D8]/15">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5 sm:py-6">
                {/* Butonul de activare a întrebării */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A378] cursor-pointer"
                >
                  <span className="font-cormorant text-lg sm:text-xl md:text-[22px] font-semibold text-sand-75 group-hover:text-[#F3E6BD] transition-colors pr-4 leading-7 tracking-0">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-[#C6A378] shrink-0"
                    aria-hidden="true"
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>

                {/* Conținutul Răspunsului cu animație smooth */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: 'easeOut' },
                          opacity: { duration: 0.3, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: 'easeInOut' },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pb-2 text-xs sm:text-sm md:text-base text-[#E0DAD3]/80 font-light leading-relaxed">
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

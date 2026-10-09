'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  MotionConfig,
} from 'framer-motion';
import { MapPin } from 'lucide-react';

// Apariție la scroll, consecventă cu celelalte secțiuni (fade + translate, o singură dată)
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

// Iconiță stelare/romb pentru indicatorul de tab activ
const TabSparkle = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#FAF6F5] mx-auto"
    aria-hidden="true"
  >
    <path d="M12 2 C12 7.5 7.5 12 2 12 C7.5 12 12 16.5 12 22 C12 16.5 16.5 12 22 12 C16.5 12 12 7.5 12 2 Z" />
  </svg>
);

// Types
type TabType = 'programme' | 'hebergement' | 'pratique';

interface DayItem {
  day: string;
  subday: string;
  title: string;
  description: string;
  imageSrc: string;
  caption: string;
}

interface AccommodationItem {
  id: number;
  location: string;
  title: string;
  description: string;
  imageSrc: string;
}

// Mock Data
const programmeDays: DayItem[] = Array.from({ length: 10 }, (_, index) => ({
  day: `Jour ${index + 1}`,
  subday: 'LOREM IPSUM DOLOR SIT AMET',
  title: 'Lorem ipsum dolor sit',
  description:
    'Lorem ipsum dolor sit amet consectetur. Sed sollicitudin vivamus rhoncus egestas enim scelerisque egestas mi in interdum. Erat et feugiat mi nunc nisl velit semper dui nec nunc. Dui nec egestas in tortor morbi ultrices auctor vestibulum.',
  imageSrc: '/img/landscape-mountains.jpg',
  caption: 'Lorem ipsum dolor sit amet',
}));

const accommodations: AccommodationItem[] = [
  {
    id: 1,
    location: 'Place name',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur. Et risus elit nunc cum purus blandit amet vel est. Vitae ac mauris tempus nullam minus leo eros bibendum nisl. Eros tincidunt rim lorem a lacus diam molestie lectus. Duis diam maximus a dinissim auctor mattis adipiscing. Tincidunt auctor vehicula orci congue erat id nisl...',
    imageSrc: '/img/landscape-mountains.jpg',
  },
  {
    id: 2,
    location: 'Place name',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur. Dui viverra euismod fringilla nisl nisl. Egestas sed convallis pretium viverra phasellus nibh turpis dolor. Amet dictum ultrices id id neque morbi tempus eros scelerisque. Porttitor tellus neque sit arcu condimentum meulis facilisis vestibulum sem vitae viverra mauris id convallis id iaculis vitae.',
    imageSrc: '/img/landscape-mountains.jpg',
  },
  {
    id: 3,
    location: 'Place name',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ut cursus magna pulvinar pretium elit quam a purus ipsum. Dignissim id curabitur odio eleifend pretium convallis. Augue auctor a vel amet id eleifend. Pellentesque libero cursus ullamcorper non. Tempus cursus vitae blandit vitae. Cras viverra varius semper massa Fusce semper. Morbi netus fermentum id eleifend eget a. Vivamus finibus faucibus sollicitudin feugiat dolor.',
    imageSrc: '/img/landscape-mountains.jpg',
  },
  {
    id: 4,
    location: 'Place name',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur. Dignissim maecenas fringilla dapibus ultricies non maecenas vitae te. Hendrerit pellentesque pretium quisque leo. Ut viverra amet quis dolor porttitor in odio lacus amet feugiat vitae. Ipsum id condimentum nunc dignissim malesuada augue. Ridiculus imperdiet aliquet amet amet odio eget nec.',
    imageSrc: '/img/landscape-mountains.jpg',
  },
];

const inclusList = [
  "Hébergements dans des maisons d'hôtes locales (10 nuits)",
  'Tous les repas du séjour',
  'Transports intérieurs (vol domestique inclus)',
  'Guide local francophone tout au long du voyage',
  'Activités et visites mentionnées au programme',
  'Accompagnement avant le départ',
];

const nonInclusList = [
  'Vols internationaux (Paris <-> Katmandou)',
  'Assurance voyage (obligatoire)',
  'Dépenses personnelles',
  'Pourboires',
  'Options supplémentaires hors programme',
];

export default function ExperienceDetailsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('programme');
  const shouldReduceMotion = useReducedMotion();

  const tabs: { id: TabType; label: string }[] = [
    { id: 'programme', label: 'Programme' },
    { id: 'hebergement', label: 'Hébergement' },
    { id: 'pratique', label: 'Informations pratiques' },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full max-w-[1440px] mx-auto bg-[#5c2113] text-[#F8F0D8] py-20 px-4 sm:px-8 md:px-16 font-sans">
        <div className="max-w-5xl mx-auto">
          {/* 1. Meniu Navigare Tab-uri (A11y Compliant) */}
          <div
            role="tablist"
            aria-label="Détails du séjour"
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pb-12"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-cormorant font-bold relative text-sm sm:text-[26px] tracking-0 leading-8 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A378] py-1 ${
                    isActive
                      ? 'text-[#F8F0D8] font-medium'
                      : 'text-[#F8F0D8]/60 hover:text-[#F8F0D8]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-3 left-0 right-0"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="flex items-center w-full gap-2">
                        <div className="h-px bg-[#FAF6F5] flex-1" />
                        <TabSparkle />
                        <div className="h-px bg-[#FAF6F5] flex-1" />
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* 2. Conținut Tab-uri animate cu AnimatePresence */}
          <div className="pt-12">
            <AnimatePresence mode="wait">
              {/* --- TAB 1: PROGRAMME --- */}
              {activeTab === 'programme' && (
                <motion.div
                  key="programme"
                  id="panel-programme"
                  role="tabpanel"
                  aria-labelledby="tab-programme"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-12"
                >
                  {/* Header Tab */}
                  <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-1.2px] leading-12 text-safron-50">
                      10 jours en immersion
                    </h2>
                    <p className="font-sans text-xs sm:text-base text-safron-200 leading-[27.2px] font-normal">
                      Un rythme pensé pour laisser de la place aux rencontres,
                      aux imprévus et à ce qui ne se planifie pas.
                    </p>
                  </div>

                  {/* Lista Zilelor */}
                  <div className="divide-y divide-[#F8F0D8]/10 border-b border-[#F8F0D8]/10">
                    {programmeDays.map((item, idx) => (
                      <motion.div
                        key={idx}
                        {...reveal()}
                        className="py-10 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
                      >
                        {/* Col 1: Zua */}
                        <div className="lg:col-span-3 space-y-1">
                          <h3 className="font-cormorant text-[22px] font-semibold text-sand-50 tracking-0 leading-[33px]">
                            {item.day}
                          </h3>
                          <p className="font-sans text-[12px] font-normal uppercase tracking-[1.5px] leading-base text-[#EFCBBD]">
                            {item.subday}
                          </p>
                        </div>

                        {/* Col 2: Titlu + Descriere */}
                        <div className="lg:col-span-5 space-y-3">
                          <h4 className="font-cormorant font-semibold text-[24px] leading-[27.6px] tracking-0 text-[#FAF6F5]">
                            {item.title}
                          </h4>
                          <p className="font-sans font-normal text-xs sm:text-base leading-[27.2px] tracking-0 text-[#EFCBBD]">
                            {item.description}
                          </p>
                        </div>

                        {/* Col 3: Imagine + Legendă */}
                        <div className="lg:col-span-4 space-y-2">
                          <div className="relative aspect-16/10 w-full overflow-hidden bg-[#4a1b0d]">
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 30vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="font-sans font-normal leading-[18px] tracking-0 text-[14px] text-[#F8F0D8] text-left">
                            {item.caption}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* --- TAB 2: HÉBERGEMENT --- */}
              {activeTab === 'hebergement' && (
                <motion.div
                  key="hebergement"
                  id="panel-hebergement"
                  role="tabpanel"
                  aria-labelledby="tab-hebergement"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-12"
                >
                  {/* Header Tab */}
                  <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-1.2px] leading-12 text-safron-50">
                      Les lieux où vous séjournerez
                    </h2>
                    <p className="font-sans text-xs sm:text-base text-safron-200 leading-[27.2px] font-normal">
                      Lorem ipsum dolor sit amet consectetur. Risus nulla id
                      elementum a semper id et est. Scelerisque pellentesque
                      viverra orci sed tempor.
                    </p>
                  </div>

                  {/* Lista Cardurilor de Cazare */}
                  <div className="space-y-6">
                    {accommodations.map((acc) => (
                      <motion.div
                        key={acc.id}
                        {...reveal()}
                        className="bg-[#86432B]/80 border border-[#F8F0D8]/10 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                      >
                        {/* Imagine Stânga */}
                        <div className="md:col-span-4 relative aspect-4/3 w-full overflow-hidden bg-[#3b1309]">
                          <Image
                            src={acc.imageSrc}
                            alt={acc.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover"
                          />
                        </div>

                        {/* Detalii Dreapta */}
                        <div className="md:col-span-8 space-y-3">
                          <div className="inline-flex items-center gap-1.5 text-[#EFCBBD]">
                            <MapPin size={16} aria-hidden="true" />
                            <span className="font-sans text-base font-normal tracking-0 leading-6">
                              {acc.location}
                            </span>
                          </div>
                          <h3 className="font-sans font-medium text-[20px] leading-[30px] tracking-0  tracking-0 text-[#FAF6F5]">
                            {acc.title}
                          </h3>
                          <p className="font-sans font-normal text-xs sm:text-base leading-6 tracking-0 text-[##EFCBBD]">
                            {acc.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* --- TAB 3: INFORMATIONS PRATIQUES --- */}
              {activeTab === 'pratique' && (
                <motion.div
                  key="pratique"
                  id="panel-pratique"
                  role="tabpanel"
                  aria-labelledby="tab-pratique"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-12"
                >
                  {/* Header Tab */}
                  <div className="text-left mx-auto space-y-6 mb-8">
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-0 leading-12 text-safron-50">
                      Ce qu'il faut savoir avant de partir
                    </h2>
                    <p className="font-sans font-normal text-xs sm:text-base text-safron-200 leading-6 tracking-0">
                      Lorem ipsum dolor sit amet consectetur. Viverra in eros
                      velit sed convallis ullamcorper scelerisque scelerisque.
                      Imperdiet netus morbi augue eu mi adipiscing dolor
                      tincidunt. Lacus arcu tincidunt viverra risus vitae
                      consequat sagittis ipsum. Lectus a in gravida augue lacus.
                      Cras aenean tincidunt ullamcorper magna non in aenean
                      tempus. Risus enim non quis eleifend morbi. Vel blandit
                      sed euismod aliquam donec pulvinar diam arcu.
                    </p>
                  </div>

                  {/* Harta Traseului */}
                  <motion.div {...reveal()} className="space-y-4">
                    <h3 className="font-cormorant font-semibold text-[24px] leading-12 tracking-0 text-[#FAF6F5] text-center sm:text-left">
                      Les grandes étapes de votre expérience
                    </h3>
                    <div className="relative aspect-[16/9] w-full overflow-hidden  bg-[#4d1a0e] border border-[#F8F0D8]/10">
                      <Image
                        src="/img/landscape-mountains.jpg"
                        alt="Carte du parcours et étapes"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-80"
                      />
                    </div>
                  </motion.div>

                  {/* Inclus vs Non Inclus */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-6">
                    {/* CE QUI EST INCLUS */}
                    <motion.div {...reveal()} className="space-y-4">
                      <span className="font-sans text-[14px] font-normal uppercase tracking-[1.5px] leading-base text-[#EFCBBD] block">
                        Ce qui est inclus
                      </span>
                      <h3 className="font-cormorant font-semibold text-[40px] leading-[42px] tracking-[0.8px] text-[#FAF6F5]">
                        Nous nous occupons de
                      </h3>
                      <ul className="space-y-3 pt-2 list-none p-0">
                        {inclusList.map((item, i) => (
                          <motion.li
                            key={i}
                            {...reveal(i * 0.08)}
                            className="flex items-start gap-3 font-sans font-normal text-xs sm:text-base leading-[27.2px] tracking-0 text-[#EFCBBD]"
                          >
                            <span
                              className="text-sand-400 text-2xl shrink-0"
                              aria-hidden="true"
                            >
                              •
                            </span>
                            <span className="font-sans font-normal text-[#EFCBBD] mt-1 text-base leading-[26.4px] tracking-0">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* NON INCLUS */}
                    <motion.div
                      {...reveal(0.15)}
                      className="space-y-4 mt-6 md:mt-0"
                    >
                      <span className="font-sans text-[14px] font-normal uppercase tracking-[1.5px] leading-base text-[#EFCBBD] block">
                        Non inclus
                      </span>
                      <h3 className="font-cormorant font-semibold text-[40px] leading-[42px] tracking-[0.8px] text-[#FAF6F5]">
                        À prévoir de votre côté
                      </h3>
                      <ul className="space-y-3 pt-2 list-none p-0">
                        {nonInclusList.map((item, i) => (
                          <motion.li
                            key={i}
                            {...reveal(i * 0.08)}
                            className="flex items-start gap-3 font-sans font-normal text-xs sm:text-base leading-[27.2px] tracking-0 text-[#EFCBBD]"
                          >
                            <span
                              className="text-sand-400 text-2xl shrink-0"
                              aria-hidden="true"
                            >
                              •
                            </span>
                            <span className="font-sans font-normal text-[#EFCBBD] mt-1 text-base leading-[26.4px] tracking-0">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

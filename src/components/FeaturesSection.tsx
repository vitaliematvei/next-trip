'use client';

import { motion } from 'framer-motion';
import { Users, DoorOpen, Handshake, MapPin } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Petits groupes',
    description:
      '4 à 10 participants pour préserver la qualité des échanges et favoriser de véritables rencontres.',
  },
  {
    icon: DoorOpen,
    title: 'Immersion',
    description:
      'Prendre le temps de vivre un lieu, rencontrer ses habitants et ses cultures au-delà des incontournables.',
  },
  {
    icon: Handshake,
    title: 'Partenaires locaux',
    description:
      'Chaque expérience est construite avec des acteurs locaux soigneusement sélectionnés.',
  },
  {
    icon: MapPin,
    title: 'Un suivi continu',
    description:
      'Un accompagnement individuel avant chaque départ, pour préparer le voyage l’esprit tranquille.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#231F1D] text-[#EFECE6] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start text-left"
            >
              {/* Iconița */}
              <div className="mb-6 text-[#D4AF37]">
                <IconComponent className="w-7 h-7 stroke-[1.5]" />
              </div>

              {/* Titlul */}
              <h3 className="font-cormorant text-2xl sm:text-[26px] font-medium leading-snug mb-3 text-[#EFECE6]">
                {feature.title}
              </h3>

              {/* Descrierea */}
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#EFECE6]/70">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

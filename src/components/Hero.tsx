'use client';

import Link from 'next/link';
import ReactPlayer from 'react-player';
import { MapPin, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const valueProps = [
    {
      title: 'En petits groupes',
      desc: '4 à 10 participants, pour préserver la qualité des échanges',
    },
    {
      title: 'Partenaires locaux',
      desc: 'Guides, lieux et hébergements choisis au plus près du territoire.',
    },
    {
      title: 'Une destination à la fois',
      desc: 'Chaque expérience est explorée en amont avant d’être proposée',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-hero-gradient mx-auto max-w-[1440px] text-[#E8E2D5] flex flex-col justify-between overflow-hidden">
      {/* MAIN HERO CONTENT */}
    </section>
  );
}

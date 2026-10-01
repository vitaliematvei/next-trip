'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import FeaturesSection from '@/components/FeaturesSection';
import ParallaxImageSection1 from '@/components/ParallaxImageSection1';
import WhyUsSection from '@/components/WhyUsSection';
import ParallaxImageSection2 from '@/components/ParallaxImageSection2';
import NextTripSection from '@/components/NextTripSection';
import ExperienceGallerySection from '@/components/ExperienceGallerySection';
import PrivateExperienceSection from '@/components/PrivateExperienceSection';
import JournalSection from '@/components/JournalSection';
import JournalGridSection from '@/components/JournalGridSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <FeaturesSection />
      <ParallaxImageSection1 />
      <WhyUsSection />
      <ParallaxImageSection2 />
      <NextTripSection />
      <ExperienceGallerySection />
      <PrivateExperienceSection />
      <JournalSection />
      <JournalGridSection />
    </main>
  );
}

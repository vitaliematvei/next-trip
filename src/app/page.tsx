'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
    </main>
  );
}

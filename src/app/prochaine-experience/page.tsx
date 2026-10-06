import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExperienceHero from './_components/ExperienceHero';

export const metadata: Metadata = {
  title: 'Prochaine expérience | Next Trip',
  description:
    'Découvrez la prochaine expérience Next Trip : un séjour immersif de 10 jours en petit groupe.',
};

export default function NextExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <ExperienceHero />
        {/* <ExperienceDetails /> */}
      </main>
      <Footer />
    </>
  );
}

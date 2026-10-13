import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExperienceHero from './_components/ExperienceHero';
import ExperienceHighlights from './_components/ExperienceHighlights';
import ScatteredGalleryHeader from './_components/ScatteredGalleryHeader';
import ExperienceDetailsTabs from './_components/ExperienceDetailsTabs';
import ExperienceParalaxSection from './_components/ExperienceParalaxSection';
import ExperienceTwoColumnSection from './_components/ExperienceTwoColumnSection';
import ExperienceUniqueParenthesisSection from './_components/ExperienceUniqueParenthesisSection';
import HorizontalScrollGallery from './_components/HorizontalScrollGallery';
import SharedMemoriesSection from '../_components/home/SharedMemoriesSection';
import ExperienceFaqSection from './_components/ExperienceFaqSection';

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
        <ExperienceHighlights />
        <ScatteredGalleryHeader />
        <ExperienceDetailsTabs />
        <ExperienceParalaxSection />
        <ExperienceTwoColumnSection />
        <ExperienceUniqueParenthesisSection />
        <HorizontalScrollGallery />
        <SharedMemoriesSection />
        <ExperienceFaqSection />
      </main>
      <Footer />
    </>
  );
}

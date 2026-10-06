import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from './_components/home/Hero';
import ExperienceSection from './_components/home/ExperienceSection';
import FeaturesSection from './_components/home/FeaturesSection';
import ParallaxImageSection1 from './_components/home/ParallaxImageSection1';
import WhyUsSection from './_components/home/WhyUsSection';
import ParallaxImageSection2 from './_components/home/ParallaxImageSection2';
import NextTripSection from './_components/home/NextTripSection';
import ExperienceGallerySection from './_components/home/ExperienceGallerySection';
import PrivateExperienceSection from './_components/home/PrivateExperienceSection';
import JournalSection from './_components/home/JournalSection';
import JournalGridSection from './_components/home/JournalGridSection';
import SharedMemoriesSection from './_components/home/SharedMemoriesSection';
import FaqSection from './_components/home/FaqSection';
import ContactSection from './_components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
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
        <SharedMemoriesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

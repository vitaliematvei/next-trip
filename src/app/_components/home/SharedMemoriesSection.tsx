'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';

// Sample testimonial data for the carousel
const testimonials = [
  {
    id: 1,
    title: 'Des souvenirs partagés',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Ac et integer blandit elit pellentesque scelerisque. Ut praesent viverra praesent semper eu nunc. Amet risus cras sodales quisque. Turpis at massa commodo fermentum velit posuere odio leo felis. Tortor at commodo nunc cras donec felis sem etiam semper. Tellus nulla magna rhoncus sit ut fringilla pellentesque enim. Auctor a sed pretium diam nunc amet.',
    author: 'Johny',
    experience: 'Expérience 2025',
    image: '/img/testimonial-1.jpg', // Replace with your actual image path
  },
  {
    id: 2,
    title: 'Des souvenirs partagés',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Ac et integer blandit elit pellentesque scelerisque. Ut praesent viverra praesent semper eu nunc...',
    author: 'Marie',
    experience: 'Expérience 2024',
    image: '/img/testimonial-2.jpg', // Replace with your actual image path
  },
  {
    id: 3,
    title: 'Des souvenirs partagés',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Ac et integer blandit elit pellentesque scelerisque. Ut praesent viverra praesent semper eu nunc...',
    author: 'Paul',
    experience: 'Expérience 2023',
    image: '/img/testimonial-3.jpg', // Replace with your actual image path
  },
];

export default function SharedMemoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const currentItem = testimonials[currentIndex];

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#F3E6BD] py-20 sm:py-28 lg:py-[120px] px-6 sm:px-10 lg:px-[64px] flex justify-center items-center text-charcoal-900">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Testimonial Image Container with Zoom Effect */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[520px] aspect-4/5 overflow-hidden shadow-xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.author}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Testimonial Content & Controls */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between max-w-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              {/* Title */}
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-12 tracking-[-0.5px]">
                {currentItem.title}
              </h2>

              {/* Quote text */}
              <p className="font-sans font-normal text-sm sm:text-[20px] leading-7 tracking-0">
                {currentItem.quote}
              </p>

              {/* Author and Experience Details */}
              <div className="flex flex-col gap-1 pt-2">
                <span className="font-sans font-normal text-base leading-7 tracking-[1px]">
                  {currentItem.author}
                </span>
                <span className="font-sans text-[16px] uppercase tracking-0 leading-7 text-charcoal-700">
                  {currentItem.experience}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Arrows and Counter - Aliniate vertical */}
          <div className="flex items-center justify-center xs:justify-end gap-6 pt-10 sm:pt-12">
            <button
              onClick={handlePrev}
              className="inline-flex pt-2 h-10 w-12 items-center justify-center p-0 text-[#2C2825] hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Previous slide"
            >
              <MoveLeft size={40} strokeWidth={0.7} aria-hidden="true" />
            </button>
            <span className="inline-flex items-center justify-center font-cormorant text-[32px] font-semibold tracking-[-0.5px] leading-none">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="inline-flex pt-2 h-10 w-12 items-center justify-center p-0 text-[#2C2825] hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Next slide"
            >
              <MoveRight size={40} strokeWidth={0.7} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

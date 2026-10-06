'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    destination: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="w-full max-w-[1440px] mx-auto relative isolate py-20 sm:py-28 lg:py-[120px] px-6 sm:px-10 lg:px-[64px]  text-[#2C2825] flex justify-center items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/mountain-bg.jpg"
          alt="Mountain background"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Form Container (Card style) */}
      <div className="relative z-10 w-full max-w-[880px] bg-[#F8F0D8] p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Header Title and Description */}
        <div className="flex flex-col gap-4 mb-10 max-w-[680px]">
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-[64px] leading-[62.72px] tracking-[-1.4px] text-[#2C2825]">
            Partir avec nous
          </h2>
          <p className="font-sans font-normal text-sm sm:text-base leading-7 tracking-0">
            Chaque expérience commence par une conversation. Parlons de vos
            envies et de la destination que vous souhaitez vivre. Nous
            reviendrons vers vous pour échanger et voir ensemble l’expérience
            qui correspond à votre recherche.
          </p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Row 1: Last Name & First Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom*"
                required
                className="w-full bg-transparent border-b border-[#2C2825]/30 pb-3 font-sans font-normal text-sm sm:text-base placeholder:text-[#2C2825] focus:outline-none focus:border-[#2C2825] transition-colors"
              />
            </div>
            <div className="relative flex flex-col">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom*"
                required
                className="w-full bg-transparent border-b border-[#2C2825]/30 pb-3 font-sans font-normal text-sm sm:text-base placeholder:text-[#2C2825] focus:outline-none focus:border-[#2C2825] transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email*"
                required
                className="w-full bg-transparent border-b border-[#2C2825]/30 pb-3 font-sans font-normal text-sm sm:text-base placeholder:text-[#2C2825] focus:outline-none focus:border-[#2C2825] transition-colors"
              />
            </div>
            <div className="relative flex flex-col">
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Quelle destination vous attire ?"
                className="w-full bg-transparent border-b border-[#2C2825]/30 pb-3 font-sans font-normal text-sm sm:text-base placeholder:text-[#2C2825] focus:outline-none focus:border-[#2C2825] transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="relative flex flex-col">
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dites-nous ce que vous recherchez*"
              required
              className="w-full bg-transparent border-b border-[#2C2825]/30 pb-3 font-sans font-normal text-sm sm:text-base placeholder:text-[#2C2825] focus:outline-none focus:border-[#2C2825] transition-colors"
            />
          </div>

          {/* Privacy Disclaimer */}
          <p className="font-sans text-[11px] sm:text-[14px] leading-6 tracking-0 max-w-[700px]">
            En envoyant ce formulaire, vous acceptez que les informations
            renseignées soient utilisées afin de vous recontacter dans le cadre
            de votre demande. Pour en savoir plus, consultez notre politique de
            confidentialité.
          </p>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#DFA966] hover:bg-[#d4b97c] font-sans text-sm sm:text-base font-normal leading-6 tracking-0 px-8 py-3.5 rounded-[10px] shadow-sm transition-colors duration-200 cursor-pointer"
            >
              Envoyer mon message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

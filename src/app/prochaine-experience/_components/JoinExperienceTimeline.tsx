'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';

// viewBox 120x400 (afișat la 120px lățime): linia curbă trece prin mijloc și oscilează între x=39 și x=81;
// fiecare pas se află la mijlocul unui rând de 100 unități (y = 50, 150, 250, 350)
const PATH_D =
  'M 39 0 L 39 50 C 39 100, 81 100, 81 150 C 81 200, 39 200, 39 250 C 39 300, 81 300, 81 350 L 81 400';

interface Step {
  id: number;
  numberText: string;
  title: string;
  description: string;
  at: number; // Fracția din lungimea căii (0 la 1) la care se află pasul
}

const steps: Step[] = [
  {
    id: 1,
    numberText: '1.',
    title: 'Premier échange',
    description:
      'Nous prenons le temps d’échanger avec vous pour répondre à vos questions, comprendre vos attentes et nous assurer que l’expérience correspond à vos envies.',
    at: 0.1152,
  },
  {
    id: 2,
    numberText: '2.',
    title: 'Confirmation de votre participation',
    description:
      'Une fois votre participation confirmée, votre place est réservée au sein du groupe et vous recevez les premières informations pratiques.',
    at: 0.3717,
  },
  {
    id: 3,
    numberText: '3.',
    title: 'Préparer le départ',
    description:
      'Vous recevez un guide complet pour préparer votre voyage sereinement : conseils pratiques, équipements recommandés, informations logistiques et derniers échanges avant le départ.',
    at: 0.6283,
  },
  {
    id: 4,
    numberText: '4.',
    title: 'Vivre l’expérience',
    description:
      'Il ne reste plus qu’à partir. Sur place, chaque étape a été soigneusement préparée avec nos partenaires locaux pentru vous permettre de découvrir le pays autrement.',
    at: 0.8848,
  },
];

function TimelineStep({
  step,
  pathLength,
}: {
  step: Step;
  pathLength: MotionValue<number>;
}) {
  // Pasul apare exact când linia desenată ajunge la poziția lui
  const reveal = useTransform(
    pathLength,
    [Math.max(step.at - 0.03, 0), step.at - 0.003],
    [0, 1],
    { clamp: true },
  );
  const y = useTransform(reveal, [0, 1], [15, 0]);

  // Pașii impari în stânga, cei pari în dreapta; punctul stă pe curbă (±21px față de mijloc)
  const isLeft = step.id % 2 === 1;
  const top = `${((step.id - 0.5) / steps.length) * 100}%`;

  return (
    <>
      <motion.div
        style={{
          top,
          left: isLeft ? 'calc(50% - 21px)' : 'calc(50% + 21px)',
          scale: reveal,
          opacity: reveal,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C6A378] shadow-[0_0_12px_#C6A378] z-20"
      />

      <motion.div
        style={{
          top,
          opacity: reveal,
          y,
        }}
        className={`absolute -translate-y-1/2 w-[calc(50%-5.5rem)] flex flex-col items-start text-left space-y-1 ${
          isLeft ? 'left-4' : 'left-[calc(50%+5rem)]'
        }`}
      >
        <h3 className="font-cormorant text-lg sm:text-xl text-[#F8F0D8] font-normal">
          <span className="text-[#C6A378] mr-1.5">{step.numberText}</span>
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#E0DAD3]/80 font-light leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </>
  );
}

export default function JoinExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Stare formular contact
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    destination: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formular trimis:', formData);
  };

  // Progresul de la intrarea timeline-ului în viewport până în dreptul centrului
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.6', 'end 0.6'],
  });

  // Capătul liniei urmărește un punct fix din viewport (60% din înălțime):
  // progresul pe înălțime e convertit în lungime de arc, pe rânduri (y = 12.5%, 37.5%, 62.5%, 87.5%)
  const firstStop = steps[0].at;
  const drawnLength = useTransform(
    scrollYProgress,
    [0, 0.125, 0.375, 0.625, 0.875, 1],
    [firstStop, firstStop, steps[1].at, steps[2].at, steps[3].at, 1],
    { clamp: true },
  );
  const pathLength = useSpring(drawnLength, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });
  const effectivePathLength = pathLength;

  // Punctul luminos de la capătul liniei, urmărind exact curba
  const pathRef = useRef<SVGPathElement>(null);
  const tipPoint = useTransform(pathLength, (p) => {
    const path = pathRef.current;
    if (!path) return { x: 39, y: 0 };
    return path.getPointAtLength(p * path.getTotalLength());
  });
  const tipLeft = useTransform(
    tipPoint,
    (pt) => `calc(50% - 60px + ${pt.x}px)`,
  );
  const tipTop = useTransform(tipPoint, (pt) => `${(pt.y / 400) * 100}%`);
  const tipOpacity = useTransform(pathLength, [steps[3].at, 1], [1, 0]);

  return (
    <section
      aria-labelledby="join-timeline-title"
      className="relative w-full max-w-[1440px] mx-auto bg-[#1a1918] text-[#E0DAD3] overflow-x-clip"
    >
      {/* Background imagine pe fundal cu overlay întunecat */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/img/landscape-mountains.jpg"
          alt="Arrière-plan paysage montagneux"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10">
        <div className="w-full flex flex-col items-center justify-start pt-12 sm:pt-16">
          {/* Wrapper cu lățimea header-ului: coloana din stânga începe la marginea imaginii */}
          <div className="w-fit max-w-full">
            {/* Header Secțiune */}
            <div className="flex items-center justify-center mx-auto space-x-6 px-4 mb-24">
              <Image
                src="/img/StarCircle1.png"
                width={128}
                height={128}
                alt="Étoile avec orbite"
                className="h-24 w-20 sm:h-32 sm:w-24 object-contain shrink-0"
              />
              <h2
                id="join-timeline-title"
                className="font-cormorant text-2xl sm:text-4xl lg:text-[56px] font-medium leading-tight text-[#C6A378]"
              >
                Rejoindre l&apos;expérience,{' '}
                <span className="font-caveat font-normal text-3xl sm:text-[64px] italic block sm:inline">
                  étape par étape
                </span>
              </h2>
            </div>

            {/* Două coloane (impar stânga, par dreapta) cu linia curbă la mijloc */}
            <div ref={timelineRef} className="relative w-full h-[1200px] px-4">
              <svg
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-full overflow-visible pointer-events-none"
                viewBox="0 0 120 400"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Gradient vertical: transparent sus, opac între primul și ultimul punct, transparent la capăt */}
                <defs>
                  <linearGradient
                    id="timeline-fade"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="400"
                  >
                    <stop offset="0" stopColor="#C6A378" stopOpacity="0" />
                    <stop offset="0.125" stopColor="#C6A378" stopOpacity="1" />
                    <stop offset="0.875" stopColor="#C6A378" stopOpacity="1" />
                    <stop offset="1" stopColor="#C6A378" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Linia activă care se desenează la scroll */}
                <motion.path
                  ref={pathRef}
                  d={PATH_D}
                  stroke="url(#timeline-fade)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ pathLength: effectivePathLength }}
                />
              </svg>

              <motion.div
                aria-hidden="true"
                style={{ left: tipLeft, top: tipTop, opacity: tipOpacity }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F8F0D8] shadow-[0_0_14px_4px_#C6A378] pointer-events-none z-30"
              />

              {steps.map((step) => (
                <TimelineStep
                  key={step.id}
                  step={step}
                  pathLength={pathLength}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Secțiunea Inferioară: Formularul "Prêt à partir ?" */}
      <div className="relative z-20 pt-24 pb-24 px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[10px] uppercase tracking-[3px] text-[#C6A378]">
            REJOINDRE L&apos;EXPÉRIENCE
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#F3E6BD]">
            Prêt à partir ?
          </h2>
          <p className="text-xs sm:text-sm text-[#E0DAD3]/80 max-w-md mx-auto font-light leading-relaxed">
            Chaque expérience commence par une conversation. Parlez-nous de vos
            envies et nous prendrons contact avec vous rapidement.
          </p>
        </div>

        {/* Formularul efectiv */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#212020]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs text-[#E0DAD3]/70 font-light">
                Votre nom*
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#2a2928] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F0D8] focus:outline-none focus:border-[#C6A378] transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-[#E0DAD3]/70 font-light">
                Votre prénom*
              </label>
              <input
                type="text"
                required
                value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="w-full bg-[#2a2928] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F0D8] focus:outline-none focus:border-[#C6A378] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs text-[#E0DAD3]/70 font-light">
                Votre email*
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#2a2928] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F0D8] focus:outline-none focus:border-[#C6A378] transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-[#E0DAD3]/70 font-light">
                Quelle destination vous attire ?
              </label>
              <input
                type="text"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
                className="w-full bg-[#2a2928] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F0D8] focus:outline-none focus:border-[#C6A378] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[#E0DAD3]/70 font-light">
              Dites-nous ce que vous recherchez*
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-[#2a2928] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8F0D8] focus:outline-none focus:border-[#C6A378] transition-colors resize-none"
            />
          </div>

          <p className="text-[10px] text-[#E0DAD3]/50 leading-relaxed">
            En envoyant ce formulaire, vous acceptez que les informations
            renseignées soient utilisées afin de vous recontacter dans le cadre
            de votre demande. Pour en savoir plus, consultez notre politique de
            confidentialité.
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C6A378] text-[#1a1918] text-xs uppercase tracking-[2px] font-medium hover:bg-[#d4b389] transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A378]"
          >
            Envoyer mon message
          </button>
        </form>
      </div>
    </section>
  );
}

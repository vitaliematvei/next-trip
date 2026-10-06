import Link from 'next/link';

const details = [
  { label: 'Durée', value: '10 jours / 9 nuits' },
  { label: 'Format', value: '4 à 10 participants' },
  { label: 'Esprit', value: 'Immersion et rencontres locales' },
];

export default function ExperienceDetails() {
  return (
    <section
      id="decouvrir"
      className="w-full max-w-[1440px] mx-auto bg-[#ECE5C9] px-6 py-20 text-[#2C2825] sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1312px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[2px] text-[#792F14]">
            L&apos;expérience
          </p>
          <h2 className="font-cormorant text-4xl font-semibold leading-tight sm:text-5xl">
            Voyager au rythme du territoire.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-7 text-[#2C2825]/80">
            Chaque séjour est imaginé avec des partenaires locaux pour prendre
            le temps de découvrir un lieu, sa culture et ses habitants. Les
            informations détaillées sur la destination et les dates seront
            partagées prochainement.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-md bg-[#792F14] px-6 py-3.5 font-sans text-base text-[#F9F8F5] transition-colors hover:bg-[#64260F] focus:outline-none focus:ring-2 focus:ring-[#792F14] focus:ring-offset-2"
          >
            Nous contacter
          </Link>
        </div>

        <dl className="grid gap-px bg-[#2C2825]/15 sm:grid-cols-3 lg:grid-cols-1">
          {details.map(({ label, value }) => (
            <div key={label} className="bg-[#ECE5C9] px-6 py-5">
              <dt className="font-sans text-xs uppercase tracking-[1.5px] text-[#792F14]">
                {label}
              </dt>
              <dd className="mt-2 font-cormorant text-2xl font-semibold">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ServiceCard from '@/components/ServiceCard'
import ReviewCard from '@/components/ReviewCard'
import BookingForm from '@/components/BookingForm'
import SectionReveal from '@/components/SectionReveal'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Kfz-Reparaturen',
    desc: 'Reparaturen aller Art und Fabrikate - mit unserer 24h-Briefkasten-Annahme auch ausserhalb der Offnungszeiten.',
    badge: 'Alle Marken',
  },
  {
    num: '02',
    title: 'HU / AU Vorstellung',
    desc: 'Zweimal wochentlich - dienstags und donnerstags - stellen wir Ihren PKW zur Hauptuntersuchung vor. Mangel oft noch am selben Tag behoben.',
    badge: 'Di + Do',
  },
  {
    num: '03',
    title: 'Inspektionen',
    desc: 'Nach Herstellervorgaben - Ihre Garantie bleibt vollstandig erhalten. Seit EU-Verordnung 2010 kein Zwang zur Vertragswerkstatt.',
    badge: 'Garantie erhalten',
  },
  {
    num: '04',
    title: 'Lackierarbeiten',
    desc: 'Unfallinstandsetzung, Kleinstlackierung oder Oldtimer-Restaurierung - maximale Flexibilitat zu transparenten Festpreisen.',
    badge: 'Festpreise',
  },
  {
    num: '05',
    title: 'Reifen-Service',
    desc: 'Reifenverkauf, Montage, Radwechsel und saisonale Einlagerung - alles aus einer Hand zu fairen Konditionen.',
    badge: 'Einlagerung moglich',
  },
  {
    num: '06',
    title: 'Unfall & Kauf-Beratung',
    desc: 'Von der Unfallabholung bis zur Schadensregulierung. Auch Beratung beim Kauf oder Verkauf eines Gebrauchtwagens.',
    badge: 'Rundum-Service',
  },
]

const whyItems = [
  {
    title: 'Ehrlichkeit',
    body: 'Klare Kommunikation vor jeder Reparatur. Keine versteckten Kosten, keine Uberraschungen auf der Rechnung.',
  },
  {
    title: 'Qualitat',
    body: 'Ausschliesslich Erstausruster-Teile und Markenmaterialien. Hochste Handwerksqualitat bei jeder Arbeit.',
  },
  {
    title: 'Transparenz',
    body: 'Repariert wird nur nach Ihrer ausdrucklichen Zustimmung. Volle Kostentransparenz vor Beginn der Arbeiten.',
  },
  {
    title: 'Schnelligkeit',
    body: 'Kurze Wartezeiten auf Termine. Storungs- und Unfallfahrzeuge werden bevorzugt und schnellstmoglich bearbeitet.',
  },
]

const reviews = [
  {
    name: 'Klaus S.',
    text: 'Bin seit Jahren Kunde bei XE-Wolf. Ehrliche Preise, schnelle Arbeit und immer freundlich. Kann ich nur weiterempfehlen!',
    date: 'November 2024',
  },
  {
    name: 'Anna M.',
    text: 'Super Werkstatt! Mein Auto wurde nach einem Unfall perfekt repariert. Sehr professionell und transparent in der Kommunikation.',
    date: 'Oktober 2024',
  },
  {
    name: 'Thomas R.',
    text: 'Endlich eine Werkstatt, der man vertrauen kann. Kein Schnickschnack, einfach ehrliche Arbeit zu fairen Preisen. 5 Sterne absolut verdient.',
    date: 'September 2024',
  },
]

export default function HomePage() {
  return (
    <>
      {/* 1. Video Hero */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Grid */}
      <section
        className="py-24"
        style={{ background: 'var(--gray-7)' }}
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
              <div>
                <span className="section-tag mb-3">Leistungen</span>
                <h2
                  id="services-heading"
                  className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight"
                  style={{ color: 'var(--gray-1)' }}
                >
                  Was wir fur Sie tun
                </h2>
              </div>
              <p
                className="font-body text-base leading-relaxed max-w-md"
                style={{ color: 'var(--gray-4)' }}
              >
                Von der kleinen Reparatur bis zur vollstandigen Instandsetzung - als
                freie Werkstatt bieten wir alle Leistungen fur samtliche Marken und
                Modelle zu fairen Festpreisen.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-xe-gray-6">
            {services.map((s, i) => (
              <SectionReveal key={s.num} delay={i * 0.07} className="h-full">
                <ServiceCard {...s} />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/leistungen"
                className="btn-outline"
                style={{ borderColor: 'var(--gray-4)', color: 'var(--gray-1)' }}
              >
                Alle Leistungen im Detail &rarr;
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Why Us */}
      <section
        className="py-24 bg-xe-black"
        aria-labelledby="why-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2
              id="why-heading"
              className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-xe-white mb-14"
            >
              Unser Konzept
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#1e1e1e]">
            {whyItems.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="why-card pt-6 pb-8 px-8 first:pl-0 last:pr-0">
                  <p
                    className="font-display font-black mb-4 select-none"
                    style={{ fontSize: '52px', color: 'var(--red)', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </p>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-xe-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-xe-gray-4">
                    {item.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 24h Drop-Off Banner */}
      <section
        className="bg-xe-red py-12 px-6"
        aria-labelledby="dropoff-heading"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Key icon box */}
          <div
            className="shrink-0 w-16 h-16 flex items-center justify-center"
            style={{ border: '2px solid rgba(250,250,248,0.4)', color: 'var(--white)' }}
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2
              id="dropoff-heading"
              className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-xe-white mb-2"
            >
              24-Stunden Fahrzeugannahme
            </h2>
            <p className="font-body text-sm text-xe-white leading-relaxed" style={{ opacity: 0.85 }}>
              Ausserhalb unserer Offnungszeiten? Kein Problem. Reparaturauftrag und
              Schlussel in unseren Briefkasten einwerfen - wir kummern uns
              schnellstmoglich.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <Link href="/kontakt" className="btn-white">
              Anfrage stellen
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Booking Form */}
      <section
        className="py-24 bg-xe-black"
        aria-labelledby="booking-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Copy */}
            <SectionReveal>
              <span className="section-tag mb-4" style={{ color: 'var(--red)' }}>
                Terminanfrage
              </span>
              <h2
                id="booking-heading"
                className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-xe-white mb-6"
              >
                Termin<br />vereinbaren
              </h2>
              <p className="font-body text-sm leading-relaxed text-xe-gray-4 mb-10 max-w-md">
                Beschreiben Sie kurz Ihr Anliegen und wir melden uns schnellstmoglich
                bei Ihnen zuruck. Sie konnen uns auch direkt anrufen oder ausserhalb
                der Offnungszeiten den 24h-Briefkasten nutzen.
              </p>
              <ul className="space-y-4">
                {[
                  'Schnelle Ruckmeldung',
                  'Personliche Beratung',
                  'Faire Festpreise',
                  '24h-Annahme moglich',
                ].map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span
                      className="shrink-0 w-5 h-5 flex items-center justify-center"
                      style={{ border: '1px solid var(--red)', color: 'var(--red)' }}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="2 6 5 9 10 3"/>
                      </svg>
                    </span>
                    <span className="font-body text-sm text-xe-gray-5">{perk}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={0.1}>
              <BookingForm variant="full" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 7. Reviews */}
      <section
        className="py-24"
        style={{ background: 'var(--gray-7)' }}
        aria-labelledby="reviews-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div>
                <span className="section-tag mb-3">Google Bewertungen</span>
                <h2
                  id="reviews-heading"
                  className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight"
                  style={{ color: 'var(--gray-1)' }}
                >
                  Was Kunden sagen
                </h2>
              </div>
              <div className="flex items-baseline gap-4">
                <span
                  className="font-display font-black"
                  style={{ fontSize: '72px', lineHeight: 1, color: 'var(--gray-1)' }}
                  aria-label="4,9 von 5 Sternen"
                >
                  4.9
                </span>
                <div>
                  <div className="flex gap-0.5 mb-1" aria-hidden="true">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-sm" style={{ color: 'var(--gray-4)' }}>
                    90 Bewertungen &middot; Google
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <SectionReveal key={r.name} delay={i * 0.1}>
                <ReviewCard {...r} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Strip */}
      <section className="py-28 bg-xe-black relative overflow-hidden text-center" aria-labelledby="cta-heading">
        {/* Watermark */}
        <span
          className="absolute inset-0 flex items-center justify-center font-display font-black pointer-events-none select-none"
          style={{
            fontSize: 'clamp(80px, 20vw, 240px)',
            color: 'var(--white)',
            opacity: 0.025,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          WOLF
        </span>

        <div className="relative max-w-3xl mx-auto px-6 z-10">
          <SectionReveal>
            <h2
              id="cta-heading"
              className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-xe-white mb-4"
            >
              Bereit fur Ihren Termin?
            </h2>
            <p className="font-body text-base text-xe-gray-4 mb-10 max-w-md mx-auto">
              Kontaktieren Sie uns noch heute - personlich, telefonisch oder uber
              unser Formular.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-red">
                Termin buchen
              </Link>
              <a href="tel:+4922852262011" className="btn-outline">
                0228 / 52262011
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

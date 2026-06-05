import type { Metadata } from 'next'
import PromiseCard from '@/components/PromiseCard'
import SectionReveal from '@/components/SectionReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Uber uns',
  description:
    'Lernen Sie XE-Autoservice Wolf kennen: Familiengeführte Kfz-Werkstatt in Bonn Bad Godesberg seit Jahrzehnten. Ehrlichkeit, Qualitat und Transparenz.',
}

const promises = [
  {
    title: 'Reelle Preise',
    body: 'Keine versteckten Kosten. Jeder Preis wird vorab klar kommuniziert und nur nach Ihrer Zustimmung berechnet.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Hochstes Niveau',
    body: 'Arbeit auf hochstem handwerklichem Niveau. Jede Reparatur wird mit der gleichen Sorgfalt ausgefuhrt wie bei Neuwagen.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Faire Betreuung',
    body: 'Wir behandeln jeden Kunden wie ein Familienmitglied. Ehrlich, direkt und immer auf Ihrer Seite.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: 'Fragen beantwortet',
    body: 'Keine Frage bleibt unbeantwortet. Wir erklaren jeden Schritt der Reparatur verstandlich und ohne Fachjargon.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'Nur nach Absprache',
    body: 'Keine Reparatur wird ohne Ihre ausdruckliche Zustimmung durchgefuhrt. Sie behalten jederzeit die volle Kontrolle.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Keine Lockangebote',
    body: 'Was wir anbieten, halten wir. Keine lockenden Scheinpreise, keine nachtraglich erhohten Rechnungen.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0v6m0-6h10m-10 6h10a2 2 0 0 0 2-2v-4M9 20H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
  },
  {
    title: 'Erstausruster-Teile',
    body: 'Ausschliesslich Originalteile und Markenmaterialien. Gunstige Minderqualitat kommt bei uns nicht in Frage.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Deutsche Produkte',
    body: 'Wo immer moglich setzen wir auf deutsche Qualitatsprodukte - fur Wirtschaft, Umwelt und nachhaltigen Service.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero - two-col */}
      <div className="page-hero" style={{ paddingBottom: '5rem' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-tag mb-5 block">Uber uns</span>
              <h1 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight text-xe-white leading-none">
                Familie Wolf.<br />
                <em className="not-italic" style={{ color: 'var(--red)', fontStyle: 'italic', paddingBottom: '4px', display: 'block' }}>
                  Werkstatt mit Herz.
                </em>
              </h1>
            </div>
            <div className="flex flex-col gap-5 pt-2 lg:pt-16">
              <p className="font-body text-base leading-relaxed text-xe-gray-5">
                Als familiengeführtes Unternehmen legen wir grossen Wert auf die gute
                Beziehung zu unseren Kunden. Damit alle Arbeiten genauso ausgefuhrt
                werden, wie Sie es wunschen, bieten wir Ihnen immer ein ausfuhrliches
                Beratungsgesprach an.
              </p>
              <p className="font-body text-base leading-relaxed text-xe-gray-4">
                Da zu unserem guten Service auch Schnelligkeit gehort, mussen Sie bei
                uns nie lange auf einen Termin warten. Das Konzept von XE-Wolf-Autoservice
                basiert auf Ehrlichkeit, Qualitat und Transparenz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manifesto / Pull-quote */}
      <section
        className="py-24"
        style={{ background: 'var(--gray-1)', borderBottom: '1px solid var(--gray-2)' }}
        aria-labelledby="manifesto-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <SectionReveal>
              <blockquote>
                <p
                  className="font-display font-black uppercase tracking-tight text-xe-white"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}
                  id="manifesto-heading"
                >
                  &ldquo;Garantierte Qualitat muss nicht teuer sein.&rdquo;
                </p>
                <footer className="mt-6">
                  <cite
                    className="font-display font-bold text-sm uppercase tracking-widest text-xe-gray-4 not-italic"
                  >
                    Ulrich Wolf, Inhaber
                  </cite>
                </footer>
              </blockquote>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="font-body text-sm leading-relaxed text-xe-gray-4">
                  Wir sind immer darauf bedacht, die Garantie des Fahrzeugherstellers zu
                  erhalten - darum verwenden wir ausschliesslich empfohlene Ersatzteile
                  und Verbrauchsmittel. Gunstige Minderqualitat kommt bei uns nicht in
                  Frage.
                </p>
                <p className="font-body text-sm leading-relaxed text-xe-gray-4">
                  Unser Werkstattkonzept basiert vorwiegend auf der Verwendung und
                  Nutzung deutscher Produkte, soweit dies moglich ist. Das ist unser
                  Beitrag zur Qualitat, Nachhaltigkeit und regionalen Wirtschaft.
                </p>
                <p className="font-body text-sm leading-relaxed text-xe-gray-4">
                  Bei uns wird nur repariert, was Sie auch wirklich beauftragt haben.
                  Keine uberraschenden Zusatzarbeiten, keine Lockangebote, keine
                  versteckten Kosten. Dafur stehen wir mit unserem Namen.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values banner - 3 cols red */}
      <section
        className="bg-xe-red py-16"
        aria-label="Unsere Werte"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(250,250,248,0.2)]">
            {[
              {
                num: '01',
                name: 'Ehrlichkeit',
                desc: 'Klare Kommunikation, kein Fachjargon und niemals hinter Ihrem Rucken handeln.',
              },
              {
                num: '02',
                name: 'Qualitat',
                desc: 'Erstausruster-Teile, Markenole und handwerkliche Hochstleistung bei jeder Arbeit.',
              },
              {
                num: '03',
                name: 'Transparenz',
                desc: 'Kein Cent wird ohne Ihre Zustimmung berechnet. Festpreise, keine Uberraschungen.',
              },
            ].map((v) => (
              <div key={v.name} className="py-10 px-8 first:pl-0 last:pr-0">
                <p
                  className="font-display font-black text-xe-white select-none mb-2"
                  style={{ fontSize: '52px', lineHeight: 1, opacity: 0.2 }}
                  aria-hidden="true"
                >
                  {v.num}
                </p>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-xe-white mb-3">
                  {v.name}
                </h3>
                <p className="font-body text-sm text-xe-white leading-relaxed" style={{ opacity: 0.8 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Promises grid */}
      <section
        className="py-24 bg-xe-black"
        aria-labelledby="promises-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2
              id="promises-heading"
              className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-xe-white mb-14"
            >
              Unsere 8 Versprechen
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {promises.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.05}>
                <PromiseCard {...p} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact card section */}
      <section
        className="py-24"
        style={{ background: 'var(--gray-1)' }}
        aria-labelledby="contact-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <SectionReveal>
              <h2
                id="contact-cta-heading"
                className="font-display font-black text-4xl uppercase tracking-tight text-xe-white mb-4"
              >
                Lernen Sie uns kennen
              </h2>
              <p className="font-body text-sm leading-relaxed text-xe-gray-4 mb-8 max-w-md">
                Kommen Sie einfach vorbei, rufen Sie an oder schreiben Sie uns eine
                Nachricht. Wir freuen uns, Sie als neuen Kunden begrussen zu durfen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+4922852262011" className="btn-red">
                  Jetzt anrufen
                </a>
                <a href="/kontakt" className="btn-outline">
                  Nachricht senden
                </a>
              </div>
            </SectionReveal>

            {/* Contact info card */}
            <SectionReveal delay={0.1}>
              <div
                className="p-8"
                style={{ background: 'var(--black)', border: '1px solid var(--gray-2)' }}
              >
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-6">
                  Kontaktdaten
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-1">Inhaber</p>
                    <p className="font-body text-base text-xe-white">Ulrich Wolf</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-1">Adresse</p>
                    <p className="font-body text-base text-xe-white">Truchsessstr. 102<br />53175 Bonn Bad Godesberg</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-1">Telefon</p>
                    <a href="tel:+4922852262011" className="font-body text-base text-xe-white hover:text-xe-red-lite transition-colors">
                      0228 / 52262011
                    </a>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-1">E-Mail</p>
                    <a href="mailto:autoservice@xe-wolf.de" className="font-body text-base text-xe-white hover:text-xe-red-lite transition-colors">
                      autoservice@xe-wolf.de
                    </a>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-1">Offnungszeiten</p>
                    <p className="font-body text-sm text-xe-gray-5">Mo - Fr: 08:15 - 17:00 Uhr</p>
                    <p className="font-body text-sm text-xe-gray-5">Fr: bis 15:00 Uhr</p>
                    <p className="font-display font-bold text-xs mt-2" style={{ color: 'var(--red)' }}>
                      + 24h Briefkastenannahme
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  )
}

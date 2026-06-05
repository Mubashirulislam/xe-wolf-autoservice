import type { Metadata } from 'next'
import SectionReveal from '@/components/SectionReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Alle Kfz-Leistungen von XE-Autoservice Wolf: Reparaturen, HU/AU, Inspektionen, Lackierarbeiten, Reifenservice und Beratung in Bonn Bad Godesberg.',
}

const services = [
  {
    num: '01',
    title: 'Kfz-Reparaturen',
    badge: 'Alle Marken',
    desc: 'Von der kleinen Fehlerdiagnose bis zur grossen Motorinstandsetzung - wir reparieren Fahrzeuge aller Marken und Fabrikate. Dank unserer 24-Stunden-Briefkastenannahme konnen Sie Ihr Fahrzeug auch ausserhalb der Offnungszeiten abgeben.',
    bullets: [
      'Motor- und Getriebereparaturen',
      'Bremsen, Kupplung und Fahrwerk',
      'Elektronik und Fehlerdiagnose (OBD)',
      'Klimaanlage und Heizung',
      '24h Briefkastenannahme',
      'Unfallfahrzeuge bevorzugt',
    ],
  },
  {
    num: '02',
    title: 'HU / AU Vorstellung',
    badge: 'Di + Do',
    desc: 'Zweimal wochentlich - dienstags und donnerstags - stellen wir Ihren PKW beim TUV oder Dekra zur Hauptuntersuchung und Abgasuntersuchung vor. Festgestellte Mangel beheben wir in der Regel noch am selben Tag.',
    bullets: [
      'Vorstellung beim TUV oder Dekra',
      'Kostenlose Vorab-Begutachtung',
      'Mangelbeseitigung oft am selben Tag',
      'Gultiger Nachweis der Mangelfreiheit',
      'Dienstags und donnerstags',
      'Voranmeldung empfohlen',
    ],
  },
  {
    num: '03',
    title: 'Inspektionen',
    badge: 'Garantie erhalten',
    desc: 'Wir fuhren Inspektionen nach Herstellervorgaben durch - inklusive aller vorgeschriebenen Intervallwechsel. Seit der EU-Verordnung 2010/GVO Nr. 461/2010 sind Sie nicht mehr an die Vertragswerkstatt gebunden, ohne Ihre Fahrzeuggarantie zu verlieren.',
    bullets: [
      'Nach Herstellervorgaben durchgefuhrt',
      'Garantie des Herstellers bleibt erhalten',
      'Kein Zwang zur Vertragswerkstatt (EU-Recht)',
      'Erstausruster-Teile und Markenmaterialien',
      'Vollstandige Servicedokumentation',
      'Alle Marken und Modelle',
    ],
    note: 'Gema EU-GVO Nr. 461/2010 konnen Sie Ihren Neuwagen in einer freien Werkstatt inspizieren lassen, ohne die Herstellergarantie zu verlieren - vorausgesetzt, es werden Originalteile und vorgeschriebene Materialien verwendet.',
  },
  {
    num: '04',
    title: 'Lackierarbeiten',
    badge: 'Festpreise',
    desc: 'Von kleinen Kratzern bis zur vollstandigen Karosserieinstandsetzung - unsere Lackierer arbeiten prazise und schonend. Wir bieten Kleinstlackierungen, Unfallreparaturen und Oldtimer-Restaurierungen zu transparenten Festpreisen.',
    bullets: [
      'Kleinstlackierungen und Kratzerbeseitigung',
      'Unfallinstandsetzung und Karosseriearbeiten',
      'Oldtimer-Restaurierung und Aufbereitung',
      'Farbgenaue Anpassung per Lackcode',
      'Transparente Festpreise vorab',
      'Direkt versicherungsabrechnung moglich',
    ],
  },
  {
    num: '05',
    title: 'Reifen-Service',
    badge: 'Einlagerung moglich',
    desc: 'Kompletter Reifenservice aus einer Hand: Wir verkaufen, montieren und wuchten Reifen aller gangigen Marken. Saisonale Einlagerung Ihrer Radsatze ist bei uns ebenfalls moglich.',
    bullets: [
      'Reifenverkauf aller gangigen Marken',
      'Montage, Wuchten und Ventilwechsel',
      'Saisonaler Radwechsel',
      'Reifeneinlagerung (Sommer/Winter)',
      'RDKS-Ventil-Service',
      'Reifendruckkontrolle inklusive',
    ],
  },
  {
    num: '06',
    title: 'Unfall & Kauf-Beratung',
    badge: 'Rundum-Service',
    desc: 'Wir begleiten Sie von der Unfallabholung bis zur abgeschlossenen Schadensregulierung. Ausserdem beraten wir Sie beim Kauf oder Verkauf eines Gebrauchtwagens mit einem unabhangigen technischen Gutachten.',
    bullets: [
      'Unfallabholung und Abschleppdienst',
      'Schadensprotokoll und Kostenvoranschlag',
      'Direktabrechnung mit Versicherungen',
      'Gebrauchtwagenankauf und -beratung',
      'Technische Fahrzeugbewertung',
      'Unabhangige Einschatzung ohne Verkaufsinteresse',
    ],
  },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">LEISTUNGEN</span>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-5 block">Unsere Leistungen</span>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-xe-white leading-none">
            Alles aus<br />einer Hand
          </h1>
          <p className="font-body text-base text-xe-gray-4 mt-5 max-w-lg leading-relaxed">
            Freie Kfz-Werkstatt fur alle Marken und Fabrikate in Bonn Bad Godesberg.
            Reparaturen, HU/AU, Inspektionen, Lackierarbeiten, Reifenservice und mehr.
          </p>
        </div>
      </div>

      {/* Services detail grid */}
      <section className="py-24 bg-xe-black" aria-labelledby="leistungen-heading">
        <div className="sr-only" id="leistungen-heading">Leistungsdetails</div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <SectionReveal key={s.num} delay={i * 0.06}>
                <article
                  className="service-card p-8 h-full"
                  style={{ background: 'var(--gray-1)', border: '1px solid var(--gray-2)' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <p
                      className="font-display font-black leading-none select-none"
                      style={{ fontSize: '56px', color: 'var(--gray-2)' }}
                      aria-hidden="true"
                    >
                      {s.num}
                    </p>
                    <span
                      className="font-display font-bold text-xs uppercase tracking-widest px-3 py-1 shrink-0"
                      style={{ background: 'var(--gray-2)', color: 'var(--gray-4)' }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <h2 className="font-display font-black text-2xl uppercase tracking-tight text-xe-white mb-3">
                    {s.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed text-xe-gray-4 mb-6">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span
                          className="shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center"
                          style={{ color: 'var(--red)' }}
                          aria-hidden="true"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="2 6 5 9 10 3"/>
                          </svg>
                        </span>
                        <span className="font-body text-sm text-xe-gray-5">{b}</span>
                      </li>
                    ))}
                  </ul>
                  {s.note && (
                    <div
                      className="p-4 mt-4"
                      style={{ background: 'rgba(192,57,43,0.1)', border: '1px solid rgba(192,57,43,0.3)' }}
                    >
                      <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--gray-5)' }}>
                        <strong className="text-xe-red font-bold">EU-Recht: </strong>
                        {s.note}
                      </p>
                    </div>
                  )}
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{ background: 'var(--gray-1)', borderTop: '1px solid var(--gray-2)' }}
        aria-labelledby="leistungen-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2
              id="leistungen-cta-heading"
              className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-xe-white mb-3"
            >
              Ihr Fahrzeug wartet?
            </h2>
            <p className="font-body text-sm text-xe-gray-4 max-w-md leading-relaxed">
              Kontaktieren Sie uns fur einen Termin. Wir beraten Sie individuell und
              erstellen einen kostenlosen Kostenvoranschlag.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/kontakt" className="btn-red">
              Termin buchen
            </Link>
            <a href="tel:+4922852262011" className="btn-outline">
              0228 / 52262011
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

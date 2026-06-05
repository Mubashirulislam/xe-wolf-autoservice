import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anfahrt',
  description:
    'Anfahrt zu XE-Autoservice Wolf in Bonn Bad Godesberg. Truchsessstr. 102, 53175 Bonn. Parkplatze vorhanden, gut erreichbar mit Bus und Bahn.',
}

export default function AnfahrtPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">ANFAHRT</span>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-5 block">Anfahrt</span>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-xe-white leading-none">
            So finden<br />Sie uns
          </h1>
          <address className="font-body not-italic text-xe-gray-4 mt-5 text-base leading-relaxed">
            Truchsessstr. 102, 53175 Bonn Bad Godesberg
          </address>
        </div>
      </div>

      {/* Map + floating card */}
      <section
        className="bg-xe-black relative"
        aria-label="Standortkarte"
      >
        <div className="relative" style={{ height: '520px' }}>
          <iframe
            src="https://maps.google.com/maps?q=Truchse%C3%9Fstr.+102,+53175+Bonn&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="520"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(0.95)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort XE-Autoservice Wolf auf Google Maps"
            className="absolute inset-0"
          />

          {/* Floating info card */}
          <div
            className="absolute top-6 left-6 md:left-12 z-10 p-7 max-w-xs w-full"
            style={{ background: 'var(--black)', border: '1px solid var(--gray-2)' }}
          >
            <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-4">
              Standort
            </p>
            <address className="font-body not-italic text-xe-white text-sm leading-relaxed mb-3">
              Truchsessstr. 102<br />
              53175 Bonn Bad Godesberg
            </address>
            <a
              href="tel:+4922852262011"
              className="block font-body text-sm text-xe-gray-5 hover:text-xe-white transition-colors mb-5"
            >
              0228 / 52262011
            </a>
            <p className="font-body text-xs text-xe-gray-4 mb-5 leading-relaxed">
              Mo - Fr: 08:15 Uhr<br />
              + 24h Briefkastenannahme
            </p>
            <a
              href="https://maps.google.com/?q=Truchsessstrasse+102,+53175+Bonn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-xs w-full justify-center"
              aria-label="Route zu XE-Autoservice Wolf starten"
            >
              Route starten
            </a>
          </div>
        </div>
      </section>

      {/* Three info cards */}
      <section
        className="py-20"
        style={{ background: 'var(--gray-1)' }}
        aria-labelledby="anfahrt-info-heading"
      >
        <div className="sr-only" id="anfahrt-info-heading">Anfahrtsinformationen</div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mit dem Auto */}
            <article
              className="p-8"
              style={{ background: 'var(--black)', border: '1px solid var(--gray-2)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ border: '1px solid var(--gray-2)', color: 'var(--red)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                  <path d="M5 9l1.5-4h11L19 9"/>
                </svg>
              </div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-xe-white mb-3">
                Mit dem Auto
              </h2>
              <p className="font-body text-sm text-xe-gray-4 leading-relaxed">
                Die Werkstatt liegt in der Truchsessstrasse 102 in Bonn Bad Godesberg,
                direkt erreichbar uber die B9 (Bonner Strasse). Ausreichend
                Parkplatze direkt vor der Werkstatt vorhanden. Aus Richtung Autobahn
                A61: Abfahrt Bad Godesberg, dann Richtung Stadtmitte.
              </p>
            </article>

            {/* Mit Bus & Bahn */}
            <article
              className="p-8"
              style={{ background: 'var(--black)', border: '1px solid var(--gray-2)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ border: '1px solid var(--gray-2)', color: 'var(--red)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="2" width="18" height="16" rx="2"/><path d="M3 10h18"/><circle cx="8" cy="20" r="2"/><circle cx="16" cy="20" r="2"/><path d="M8 18v-2m8 2v-2"/>
                </svg>
              </div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-xe-white mb-3">
                Mit Bus &amp; Bahn
              </h2>
              <p className="font-body text-sm text-xe-gray-4 leading-relaxed">
                Mit der Stadtbahn (Linie 16 oder 63) bis Haltestelle &ldquo;Godesberg
                Bahnhof&rdquo;, dann Bus Richtung Melbtal oder kurze Fahrt mit dem
                Taxi. Alternativ: Bus Linie 611 oder 612 bis Haltestelle
                &ldquo;Truchsessstrasse&rdquo;. Direkte Verbindungen vom Bonner
                Hauptbahnhof.
              </p>
            </article>

            {/* 24h Briefkasten */}
            <article
              className="p-8"
              style={{ background: 'var(--black)', border: '1px solid var(--gray-2)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ border: '1px solid var(--gray-2)', color: 'var(--red)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                </svg>
              </div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-xe-white mb-3">
                24h Briefkasten
              </h2>
              <p className="font-body text-sm text-xe-gray-4 leading-relaxed">
                Ausserhalb der Offnungszeiten: Reparaturauftrag und Fahrzeugschlüssel
                in unseren Briefkasten an der Werkstattt einwerfen. Der Briefkasten
                befindet sich rechts neben dem Eingangstor und ist rund um die Uhr
                erreichbar. Wir melden uns schnellstmoglich.
              </p>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link href="/kontakt" className="btn-red">
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import HoursTable from '@/components/HoursTable'

export const metadata: Metadata = {
  title: 'Offnungszeiten',
  description:
    'Offnungszeiten von XE-Autoservice Wolf in Bonn Bad Godesberg. Mo-Fr 08:15 Uhr. 24-Stunden Briefkastenannahme.',
}

export default function OeffnungszeitenPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">ZEITEN</span>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-5 block">Offnungszeiten</span>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-xe-white leading-none">
            Wann sind<br />wir fur Sie da?
          </h1>
        </div>
      </div>

      {/* Hours layout */}
      <section
        className="py-24 bg-xe-black"
        aria-labelledby="hours-heading"
      >
        <div className="sr-only" id="hours-heading">Offnungszeiten Details</div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Hours table */}
            <div>
              <h2 className="font-display font-black text-2xl uppercase tracking-tight text-xe-white mb-8">
                Regulare Offnungszeiten
              </h2>
              <HoursTable />
            </div>

            {/* 24h info panel */}
            <div>
              <div
                className="p-8"
                style={{ background: 'var(--gray-1)', border: '1px solid var(--gray-2)' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ border: '1px solid var(--gray-2)', color: 'var(--red)' }}
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                  </svg>
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-xe-white mb-3">
                  24-Stunden Fahrzeugannahme
                </h3>
                <p className="font-body text-sm leading-relaxed text-xe-gray-4 mb-6">
                  Kein Problem, wenn Sie ausserhalb unserer regularen Offnungszeiten
                  zu uns kommen mochten. Nutzen Sie einfach unseren 24-Stunden-Briefkasten:
                </p>
                <ol className="space-y-4 mb-6">
                  {[
                    'Reparaturauftrag schriftlich ausfüllen',
                    'Fahrzeugschlüssel dazulegen',
                    'Alles in den Briefkasten einwerfen',
                    'Wir melden uns schnellstmoglich',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span
                        className="shrink-0 w-6 h-6 flex items-center justify-center font-display font-black text-xs"
                        style={{ background: 'var(--red)', color: 'var(--white)' }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span className="font-body text-sm text-xe-gray-5">{step}</span>
                    </li>
                  ))}
                </ol>
                <div
                  className="p-4 mt-4"
                  style={{ background: 'rgba(192,57,43,0.1)', border: '1px solid rgba(192,57,43,0.25)' }}
                >
                  <p className="font-body text-xs text-xe-gray-5 leading-relaxed">
                    <strong className="text-xe-red">Adresse: </strong>
                    Truchsessstr. 102, 53175 Bonn Bad Godesberg
                  </p>
                </div>
              </div>

              {/* HU/AU Hinweis */}
              <div
                className="p-6 mt-4"
                style={{ background: 'var(--gray-1)', border: '1px solid var(--gray-2)' }}
              >
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-2">
                  HU / AU Vorstellung
                </p>
                <p className="font-body text-sm text-xe-gray-5 leading-relaxed">
                  Dienstags und donnerstags stellen wir Ihr Fahrzeug zur
                  Hauptuntersuchung vor. Mangel oft noch am selben Tag behoben.
                </p>
                <p
                  className="mt-2 font-display font-bold text-sm"
                  style={{ color: 'var(--red)' }}
                >
                  Di + Do - nach Vereinbarung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

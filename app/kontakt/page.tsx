import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie XE-Autoservice Wolf in Bonn Bad Godesberg. Telefon, E-Mail oder direkt per Formular einen Termin anfragen.',
}

export default function KontaktPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ paddingBottom: '0' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10 pb-16">
          <span className="section-tag mb-5 block">Kontakt</span>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-xe-white leading-none">
            Sprechen wir<br />miteinander.
          </h1>
        </div>
      </div>

      {/* Split contact layout */}
      <section aria-label="Kontaktinformationen und Anfrage Formular">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left: contact details panel */}
            <div
              className="lg:col-span-2 p-8 lg:p-14 flex flex-col gap-10"
              style={{ background: 'var(--gray-1)', borderRight: '1px solid var(--gray-2)' }}
            >
              {/* Large phone */}
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-2">
                  Telefon
                </p>
                <a
                  href="tel:+4922852262011"
                  className="font-display font-black text-xe-white hover:text-xe-red transition-colors"
                  style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1 }}
                  aria-label="Telefon: 0228 52262011"
                >
                  0228 / 52262011
                </a>
              </div>

              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-2">
                  Fax
                </p>
                <p className="font-body text-base text-xe-gray-5">0228 / 52262013</p>
              </div>

              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-2">
                  E-Mail
                </p>
                <a
                  href="mailto:autoservice@xe-wolf.de"
                  className="font-body text-base text-xe-white hover:text-xe-red-lite transition-colors"
                >
                  autoservice@xe-wolf.de
                </a>
              </div>

              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-2">
                  Inhaber
                </p>
                <p className="font-body text-base text-xe-white">Ulrich Wolf</p>
              </div>

              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-2">
                  Adresse
                </p>
                <address className="font-body text-base text-xe-white not-italic leading-relaxed">
                  Truchsessstr. 102<br />
                  53175 Bonn Bad Godesberg
                </address>
                <a
                  href="https://maps.google.com/?q=Truchsessstrasse+102,+53175+Bonn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-display font-bold text-xs uppercase tracking-widest text-xe-red hover:text-xe-red-lite transition-colors"
                >
                  Route starten &rarr;
                </a>
              </div>

              <div>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-3">
                  Offnungszeiten
                </p>
                <table className="w-full text-sm" aria-label="Offnungszeiten">
                  <tbody>
                    {[
                      ['Mo - Do', '08:15 - 17:00 Uhr'],
                      ['Freitag', '08:15 - 15:00 Uhr'],
                      ['Samstag', 'Nach Vereinbarung'],
                      ['Sonntag', 'Geschlossen'],
                    ].map(([day, time]) => (
                      <tr key={day} className="border-b border-xe-gray-2">
                        <td className="py-2 pr-6 font-body text-xe-gray-5">{day}</td>
                        <td className="py-2 font-body text-xe-gray-5 text-right">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p
                  className="mt-3 font-display font-bold text-sm uppercase tracking-wide"
                  style={{ color: 'var(--red)' }}
                >
                  24h Briefkastenannahme
                </p>
              </div>
            </div>

            {/* Right: form panel */}
            <div
              className="lg:col-span-3 p-8 lg:p-14 bg-xe-black"
            >
              <h2 className="font-display font-black text-3xl uppercase tracking-tight mb-2 text-xe-white">
                Terminanfrage
              </h2>
              <p className="font-body text-sm text-xe-gray-4 mb-8 leading-relaxed">
                Schreiben Sie uns und wir melden uns schnellstmoglich zuruck.
              </p>
              <KontaktFormWrapper />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function KontaktFormWrapper() {
  return <BookingForm variant="contact" />
}

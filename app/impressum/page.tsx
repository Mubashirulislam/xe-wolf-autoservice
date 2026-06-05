import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von XE-Autoservice Wolf, Inhaber Ulrich Wolf, Bonn Bad Godesberg.',
}

export default function ImpressumPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-5 block">Rechtliches</span>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight text-xe-white leading-none">
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-xe-black">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="prose-dark">
            <h2>Anbieterinformationen</h2>
            <p>
              Angaben gema&szlig; &sect; 5 TMG (Telemediengesetz):
            </p>

            <h3>Unternehmen</h3>
            <p>XE-Autoservice Wolf</p>

            <h3>Inhaber</h3>
            <p>Ulrich Wolf</p>

            <h3>Anschrift</h3>
            <p>
              Truchsessstr. 102<br />
              53175 Bonn Bad Godesberg<br />
              Deutschland
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+4922852262011">0228 / 52262011</a><br />
              Telefax: 0228 / 52262013<br />
              E-Mail: <a href="mailto:autoservice@xe-wolf.de">autoservice@xe-wolf.de</a><br />
              Internet: <a href="https://www.xe-wolf.de" target="_blank" rel="noopener noreferrer">www.xe-wolf.de</a>
            </p>

            <h2>Rechtliche Angaben</h2>

            <h3>Umsatzsteuer-Identifikationsnummer</h3>
            <p>
              Steuernummer gema&szlig; &sect; 27a Umsatzsteuergesetz:<br />
              206/5129/3053
            </p>

            <h3>Vertretungsberechtigter</h3>
            <p>Ulrich Wolf</p>

            <h3>Inhaltlich Verantwortlicher gema&szlig; TMG</h3>
            <p>U. Wolf (Anschrift wie oben)</p>

            <h2>Haftungshinweis</h2>

            <h3>Haftung fur Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gema&szlig; &sect; 7 Abs. 1 TMG fur eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, ubermittelte oder gespeicherte fremde Informationen zu
              uberwachen oder nach Umstanden zu forschen, die auf eine rechtswidrige
              Tatigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberu hrt.
              Eine diesbezugliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung moglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>

            <h3>Haftung fur Links</h3>
            <p>
              Unser Angebot enthalt Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb konnen wir fur diese fremden
              Inhalte auch keine Gewahr ubernehmen. Fur die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mogliche
              Rechtsverstose uberpruft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfaltigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der
              Grenzen des Urheberrechtes bedurfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
              sind nur fur den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
              werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
              wir derartige Inhalte umgehend entfernen.
            </p>

            <h3>Streitschlichtung</h3>
            <p>
              Die Europaische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

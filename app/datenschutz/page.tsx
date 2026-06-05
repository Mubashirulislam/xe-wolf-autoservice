import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklarung von XE-Autoservice Wolf gema DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-5 block">Rechtliches</span>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight text-xe-white leading-none">
            Datenschutz
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-xe-black">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="prose-dark">
            <p>
              Der Schutz Ihrer personlichen Daten ist uns ein besonderes Anliegen.
              Wir verarbeiten Ihre Daten daher ausschliesslich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
              Datenschutzinformationen informieren wir Sie uber die wichtigsten Aspekte
              der Datenverarbeitung im Rahmen unserer Website.
            </p>

            <h2>1. Begriffsbestimmungen</h2>
            <p>
              Im Sinne der Datenschutz-Grundverordnung (DSGVO) gelten folgende
              Begriffsbestimmungen:
            </p>
            <ul>
              <li>
                <strong>Personenbezogene Daten:</strong> alle Informationen, die sich
                auf eine identifizierte oder identifizierbare naturliche Person
                beziehen.
              </li>
              <li>
                <strong>Verarbeitung:</strong> jeder Vorgang oder jede Vorgangsreihe im
                Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen,
                die Organisation, das Ordnen, die Speicherung, die Anpassung oder
                Veranderung, das Auslesen, das Abfragen, die Verwendung, die
                Offenlegung durch Ubermittlung, Verbreitung oder eine andere Form der
                Bereitstellung, den Abgleich oder die Verknupfung, die Einschrankung,
                das Loschen oder die Vernichtung.
              </li>
              <li>
                <strong>Verantwortlicher:</strong> die naturliche oder juristische
                Person, Behorde, Einrichtung oder andere Stelle, die allein oder
                gemeinsam mit anderen uber die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </li>
            </ul>

            <h2>2. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              XE-Autoservice Wolf<br />
              Inhaber: Ulrich Wolf<br />
              Truchsessstr. 102<br />
              53175 Bonn Bad Godesberg<br />
              Telefon: 0228 / 52262011<br />
              E-Mail: <a href="mailto:autoservice@xe-wolf.de">autoservice@xe-wolf.de</a>
            </p>

            <h2>3. Allgemeine Datenverarbeitung beim Besuch der Website</h2>
            <p>
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerat zum
              Einsatz kommenden Browser automatisch Informationen an den Server unserer
              Website gesendet. Diese Informationen werden temporar in einem sog.
              Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun
              erfasst und bis zur automatisierten Loschung gespeichert:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              <li>Name Ihres Access-Providers</li>
            </ul>
            <p>
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
              Gewahrleistung eines reibungslosen Verbindungsaufbaus der Website,
              Gewahrleistung einer komfortablen Nutzung unserer Website, Auswertung
              der Systemsicherheit und -stabilitat sowie zu weiteren administrativen
              Zwecken.
            </p>
            <p>
              Die Rechtsgrundlage fur die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
              lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben
              aufgelisteten Zwecken zur Datenerhebung.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Wir setzen auf unserer Seite keine Tracking-Cookies ein. Soweit wir fur
              einzelne Funktionen unseres Angebots auf beauftragte Dienstleister
              zuruckgreifen oder Ihre Daten fur werbliche Zwecke nutzen mochten,
              werden wir Sie hieruber nachstehend ausfuhrlich informieren sowie
              gesetzlich vorgeschriebene Einwilligungen einholen.
            </p>
            <p>
              Technisch notwendige Session-Cookies konnen eingesetzt werden, um die
              Funktionsfahigkeit unserer Website sicherzustellen. Diese Cookies
              enthalten keine personenbezogenen Daten und werden nach dem Schliessen
              des Browsers automatisch geloscht.
            </p>

            <h2>5. Kontaktaufnahme / Kontaktformular</h2>
            <p>
              Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt, werden
              die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, Name,
              Telefonnummer und ggf. weitere Angaben) von uns gespeichert, um Ihre
              Fragen zu beantworten.
            </p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
              auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie
              konnen diese Einwilligung jederzeit widerrufen. Eine formlose Mitteilung
              per E-Mail genugt. Die Rechtma&szlig;igkeit der bis zum Widerruf
              erfolgten Datenverarbeitungsvorgange bleibt vom Widerruf unberu hrt.
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
              bis Sie uns zur Loschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck fur die Datenspeicherung entfallt (z.B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberu hrt.
            </p>

            <h2>6. Loschung und Sperrung von personenbezogenen Daten</h2>
            <p>
              Der fur die Verarbeitung Verantwortliche verarbeitet und speichert
              personenbezogene Daten der betroffenen Person nur fur den Zeitraum, der
              zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies
              durch den Europaischen Richtlinien- und Verordnungsgeber oder einen
              anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der fur die
              Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.
            </p>
            <p>
              Entfallt der Speicherungszweck oder lauft eine vom Europaischen
              Richtlinien- und Verordnungsgeber oder einem anderen zustandigen
              Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
              personenbezogenen Daten routinema&szlig;ig und entsprechend den
              gesetzlichen Vorschriften gesperrt oder geloscht.
            </p>

            <h2>7. Rechte der betroffenen Person</h2>
            <p>Als betroffene Person haben Sie folgende Rechte:</p>
            <ul>
              <li>
                <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das
                Recht, Auskunft uber Ihre gespeicherten personenbezogenen Daten zu
                erhalten.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben
                das Recht, unrichtige oder unvollstandige personenbezogene Daten
                berichtigen zu lassen.
              </li>
              <li>
                <strong>Recht auf Loschung (Art. 17 DSGVO):</strong> Sie haben das
                Recht, die Loschung Ihrer gespeicherten personenbezogenen Daten zu
                verlangen.
              </li>
              <li>
                <strong>Recht auf Einschrankung (Art. 18 DSGVO):</strong> Sie haben
                das Recht, unter bestimmten Voraussetzungen die Einschrankung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenubertagbarkeit (Art. 20 DSGVO):</strong> Sie
                haben das Recht, die Sie betreffenden personenbezogenen Daten in
                einem strukturierten, gangigen und maschinenlesbaren Format zu
                erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das
                Recht, aus Grunden, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten Widerspruch einzulegen.
              </li>
              <li>
                <strong>Recht auf Beschwerde:</strong> Sie haben das Recht, sich bei
                der zustandigen Datenschutzbehorde zu beschweren. In
                Nordrhein-Westfalen ist dies der Landesbeauftragte fur Datenschutz
                und Informationsfreiheit (LDI NRW).
              </li>
            </ul>
            <p>
              Fur die Ausubung dieser Rechte wenden Sie sich bitte an:
              <br />
              <a href="mailto:autoservice@xe-wolf.de">autoservice@xe-wolf.de</a>
            </p>

            <h2>8. Rechtsgrundlage der Verarbeitung</h2>
            <p>
              Soweit wir fur Verarbeitungsvorgange personenbezogener Daten eine
              Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit.
              a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
            </p>
            <p>
              Bei der Verarbeitung von personenbezogenen Daten, die zur Erfullung
              eines Vertrages, dessen Vertragspartei die betroffene Person ist,
              erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
              Rechtsgrundlage. Dies gilt auch fur Verarbeitungsvorgange, die zur
              Durchfuhrung vorvertraglicher Ma&szlig;nahmen erforderlich sind.
            </p>
            <p>
              Soweit eine Verarbeitung personenbezogener Daten zur Erfullung einer
              rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
              unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
            </p>
            <p>
              Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres
              Unternehmens oder eines Dritten erforderlich und uberwiegen die
              Interessen, Grundrechte und Grundfreiheiten des Betroffenen das
              erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als
              Rechtsgrundlage fur die Verarbeitung.
            </p>

            <h2>9. Keine automatisierte Entscheidungsfindung</h2>
            <p>
              Wir nutzen keine automatisierte Entscheidungsfindung oder Profiling
              gema&szlig; Art. 22 DSGVO. Alle Entscheidungen im Rahmen unserer
              Kundenbeziehung werden von Menschen getroffen.
            </p>

            <h3>Aktualitat und Anderung dieser Datenschutzerklarung</h3>
            <p>
              Diese Datenschutzerklarung ist aktuell gultig und hat den Stand{' '}
              {new Date().toLocaleDateString('de-DE', {
                month: 'long',
                year: 'numeric',
              })}
              .
            </p>
            <p>
              Durch die Weiterentwicklung unserer Website und Angebote daruber oder
              aufgrund geanderte gesetzlicher beziehungsweise behordlicher Vorgaben
              kann es notwendig werden, diese Datenschutzerklarung zu andern. Die
              jeweils aktuelle Datenschutzerklarung kann jederzeit auf der Website
              unter <a href="/datenschutz">/datenschutz</a> von Ihnen abgerufen und
              ausgedruckt werden.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

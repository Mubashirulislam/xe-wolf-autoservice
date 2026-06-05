import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'XE-Autoservice Wolf | Kfz-Werkstatt Bonn Bad Godesberg',
    template: '%s | XE-Autoservice Wolf',
  },
  description:
    'Freie Kfz-Werkstatt in Bonn Bad Godesberg. Familiengeführt, alle Marken und Fabrikate. Reparaturen, HU/AU, Inspektionen, Lackierarbeiten. 4,9 Sterne bei Google. 24h Fahrzeugannahme.',
  keywords: [
    'Kfz-Werkstatt Bonn',
    'Autowerkstatt Bad Godesberg',
    'HU AU Bonn',
    'Inspektion Bonn',
    'Lackierung Bonn',
    'Reifenservice Bonn',
    'XE Wolf Autoservice',
  ],
  authors: [{ name: 'Ulrich Wolf' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'XE-Autoservice Wolf',
    title: 'XE-Autoservice Wolf | Kfz-Werkstatt Bonn Bad Godesberg',
    description:
      'Familiengeführte Kfz-Werkstatt in Bonn Bad Godesberg. Alle Marken, faire Preise, 24h Annahme.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

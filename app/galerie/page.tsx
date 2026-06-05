import type { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Bilder aus der Werkstatt von XE-Autoservice Wolf in Bonn Bad Godesberg. Einblicke in unsere Arbeiten und Raume.',
}

export default function GaleriePage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">GALERIE</span>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-5 block">Werkstatt Galerie</span>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-xe-white leading-none">
            Einblicke in<br />unsere Werkstatt
          </h1>
          <p className="font-body text-base text-xe-gray-4 mt-5 max-w-lg leading-relaxed">
            Moderne Ausstattung, saubere Arbeitsplatze und ein Team, das mit
            Leidenschaft arbeitet - uberzeugen Sie sich selbst.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section
        className="py-16 bg-xe-black"
        aria-labelledby="gallery-heading"
      >
        <div className="sr-only" id="gallery-heading">Fotogalerie</div>
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}

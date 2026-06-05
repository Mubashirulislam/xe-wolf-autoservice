import Link from 'next/link'

const navLinks = [
  { href: '/leistungen',      label: 'Leistungen' },
  { href: '/galerie',         label: 'Galerie' },
  { href: '/ueber-uns',       label: 'Über uns' },
  { href: '/oeffnungszeiten', label: 'Öffnungszeiten' },
  { href: '/kontakt',         label: 'Kontakt' },
  { href: '/anfahrt',         label: 'Anfahrt' },
  { href: '/impressum',       label: 'Impressum' },
  { href: '/datenschutz',     label: 'Datenschutz' },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Seitenfu&szlig;zeile"
      className="bg-xe-gray-1"
      style={{ borderTop: '1px solid #222' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + address */}
          <div>
            <Link
              href="/"
              aria-label="XE-Autoservice Wolf - Startseite"
              className="inline-block mb-4"
            >
              <span className="font-display font-extrabold text-2xl tracking-tight select-none">
                <span className="text-xe-white">XE</span>
                <span className="text-xe-red">/</span>
                <span className="text-xe-white">WOLF</span>
              </span>
            </Link>
            <p className="text-xe-gray-4 text-sm leading-relaxed font-body">
              Freie Kfz-Werkstatt
              <br />
              Truchsessstr. 102
              <br />
              53175 Bonn Bad Godesberg
            </p>
            <a
              href="tel:+4922852262011"
              className="block mt-3 text-xe-gray-5 text-sm font-body hover:text-xe-white transition-colors"
            >
              0228 / 52262011
            </a>
            <a
              href="mailto:autoservice@xe-wolf.de"
              className="block text-xe-gray-5 text-sm font-body hover:text-xe-white transition-colors"
            >
              autoservice@xe-wolf.de
            </a>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer Navigation">
            <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xe-gray-5 text-sm font-body hover:text-xe-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rating */}
          <div className="md:text-right">
            <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-4 mb-3">
              Google Bewertungen
            </p>
            <div className="flex md:justify-end items-baseline gap-2 mb-1">
              <span className="font-display font-black text-4xl text-xe-white">4.9</span>
              <span className="text-xe-accent text-xl" aria-label="5 von 5 Sternen">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
            <p className="text-xe-gray-4 text-sm font-body">90+ Bewertungen</p>
            <p className="text-xe-gray-4 text-xs font-body mt-4">
              &copy; {new Date().getFullYear()} XE-Autoservice Wolf
              <br />
              Inhaber: Ulrich Wolf
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/leistungen',      label: 'Leistungen' },
  { href: '/galerie',         label: 'Galerie' },
  { href: '/ueber-uns',       label: 'Über uns' },
  { href: '/oeffnungszeiten', label: 'Zeiten' },
  { href: '/anfahrt',         label: 'Anfahrt' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      role="banner"
      style={{ borderBottom: '2px solid var(--red)' }}
      className="fixed top-0 left-0 right-0 z-50 bg-xe-black"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[60px]">
        {/* Logo */}
        <Link
          href="/"
          aria-label="XE-Autoservice Wolf - Startseite"
          className="flex items-center focus-visible:outline-xe-red"
          onClick={() => setOpen(false)}
        >
          <span
            className="font-display font-extrabold text-xl tracking-tight select-none"
            aria-hidden="true"
          >
            <span className="text-xe-white">XE</span>
            <span className="text-xe-red">/</span>
            <span className="text-xe-white">WOLF</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`font-display font-bold text-sm uppercase tracking-widest transition-colors duration-200 ${
                  active
                    ? 'text-xe-red'
                    : 'text-xe-gray-5 hover:text-xe-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link href="/kontakt" className="btn-red ml-4 !py-2">
            Termin buchen
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus-visible:outline-xe-red"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-xe-white origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-6 h-0.5 bg-xe-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-xe-white origin-center"
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-xe-gray-1 border-t border-xe-gray-2"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col px-6 py-4 gap-1"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`font-display font-bold text-base uppercase tracking-widest py-3 border-b border-xe-gray-2 transition-colors duration-200 ${
                      active ? 'text-xe-red' : 'text-xe-gray-5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/kontakt"
                className="btn-red mt-4 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Termin buchen
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

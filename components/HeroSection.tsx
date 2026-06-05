'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const statVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100dvh' }}
      aria-label="Willkommen bei XE-Autoservice Wolf"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://videos.pexels.com/video-files/8469674/8469674-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(14,14,14,0.35) 0%, rgba(14,14,14,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2, opacity: 0.05 }}
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>
      </div>

      {/* Hero content - bottom-left */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ padding: '72px 48px' }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-end justify-between gap-10">
          {/* Text column */}
          <motion.div
            variants={reduce ? undefined : containerVariants}
            initial={reduce ? false : 'hidden'}
            animate="visible"
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={reduce ? undefined : itemVariants}
              className="flex items-center gap-4 mb-6"
            >
              <span
                className="shrink-0 inline-block"
                style={{ width: '28px', height: '2px', background: 'var(--red)' }}
                aria-hidden="true"
              />
              <span
                className="font-display font-bold text-xs uppercase tracking-[0.14em]"
                style={{ color: 'rgba(250,250,248,0.7)' }}
              >
                Freie Kfz-Werkstatt &middot; Bonn Bad Godesberg
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={reduce ? undefined : itemVariants}
              className="font-display font-black uppercase leading-none mb-5"
              style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: '0.88' }}
            >
              <span className="text-xe-white block">Ihr Auto.</span>
              <em
                className="not-italic block"
                style={{
                  color: 'var(--red)',
                  fontStyle: 'italic',
                  lineHeight: '1.0',
                  paddingBottom: '4px',
                }}
              >
                Unsere Leidenschaft.
              </em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={reduce ? undefined : itemVariants}
              className="font-body text-base mb-8 max-w-md"
              style={{ color: 'rgba(250,250,248,0.72)' }}
            >
              Familiengeführt. Alle Marken. Ehrlich, transparent, schnell.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={reduce ? undefined : itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/kontakt" className="btn-red">
                Termin buchen
              </Link>
              <a href="tel:+4922852262011" className="btn-outline">
                0228 / 52262011
              </a>
            </motion.div>
          </motion.div>

          {/* Stats - bottom-right */}
          <motion.div
            variants={reduce ? undefined : containerVariants}
            initial={reduce ? false : 'hidden'}
            animate="visible"
            className="hidden md:flex flex-col items-end gap-5 shrink-0"
            aria-label="Kennzahlen"
          >
            {[
              { num: '4.9', label: 'Sterne', sub: 'Google' },
              { num: '90+', label: 'Bewertungen', sub: '' },
              { num: '24h', label: 'Annahme', sub: '' },
            ].map((stat) => (
              <motion.div
                key={stat.num}
                variants={reduce ? undefined : statVariants}
                className="text-right"
              >
                <p
                  className="font-display font-black text-xe-white"
                  style={{ fontSize: '42px', lineHeight: 1 }}
                >
                  {stat.num}
                </p>
                <p className="font-display font-bold text-xs uppercase tracking-widest text-xe-gray-5">
                  {stat.label}
                  {stat.sub && (
                    <span className="text-xe-gray-4"> {stat.sub}</span>
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const BASE = 'https://xe-wolf.de/images/werkstatt'
const images = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src: `${BASE}/${n}.JPG`,
    thumb: `${BASE}/thumbs/${n}.JPG`,
    alt: `Werkstatt XE-Autoservice Wolf - Foto ${i + 1}`,
  }
})

export default function GalleryGrid() {
  const reduce = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const isOpen = lightboxIndex !== null

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = useCallback(() => {
    const prev = lightboxIndex
    setLightboxIndex(null)
    if (prev !== null) {
      setTimeout(() => triggerRefs.current[prev]?.focus(), 50)
    }
  }, [lightboxIndex])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  )
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    []
  )

  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, closeLightbox, prev, next])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeBtnRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Masonry grid */}
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '220px',
        }}
        role="list"
        aria-label="Werkstatt Galerie"
      >
        {images.map((img, i) => {
          const isFeatured = i === 0
          const isWide = i === 5
          return (
            <button
              key={i}
              ref={(el) => { triggerRefs.current[i] = el }}
              onClick={() => openLightbox(i)}
              role="listitem"
              aria-label={`${img.alt} - Vergrossern`}
              className="relative overflow-hidden group focus-visible:outline-xe-red focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                gridColumn: isFeatured ? 'span 2' : isWide ? 'span 2' : 'span 1',
                gridRow: isFeatured ? 'span 2' : 'span 1',
              }}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                loading={i < 4 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-xe-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-12 h-12 border-2 border-xe-white flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(14,14,14,0.96)' }}
            role="dialog"
            aria-modal="true"
            aria-label={images[lightboxIndex].alt}
          >
            {/* Close */}
            <button
              ref={closeBtnRef}
              onClick={closeLightbox}
              aria-label="Galerie schliessen"
              className="absolute top-5 right-5 w-11 h-11 border border-xe-gray-2 flex items-center justify-center text-xe-gray-5 hover:text-xe-white hover:border-xe-white transition-colors focus-visible:outline-xe-red"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Counter */}
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 font-display font-bold text-sm text-xe-gray-4 tracking-widest"
              aria-live="polite"
            >
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Vorheriges Foto"
              className="absolute left-4 md:left-8 w-12 h-12 border border-xe-gray-2 flex items-center justify-center text-xe-gray-5 hover:text-xe-white hover:border-xe-white transition-colors focus-visible:outline-xe-red"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl px-20 md:px-24"
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Nachstes Foto"
              className="absolute right-4 md:right-8 w-12 h-12 border border-xe-gray-2 flex items-center justify-center text-xe-gray-5 hover:text-xe-white hover:border-xe-white transition-colors focus-visible:outline-xe-red"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

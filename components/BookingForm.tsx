'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const serviceOptions = [
  'Kfz-Reparatur',
  'HU / AU Vorstellung',
  'Inspektion',
  'Lackierarbeiten',
  'Reifen-Service',
  'Beratung',
]

export type BookingVariant = 'full' | 'contact'

interface BookingFormProps {
  variant?: BookingVariant
}

export default function BookingForm({ variant = 'full' }: BookingFormProps) {
  const reduce = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [checkedServices, setCheckedServices] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  function toggleService(s: string) {
    setCheckedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div
      className="p-8 w-full"
      style={{ background: 'var(--gray-1)', border: '1px solid #252525' }}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-10 text-center gap-5"
            role="alert"
          >
            <div
              className="w-16 h-16 flex items-center justify-center"
              style={{ border: '2px solid var(--red)', color: 'var(--red)' }}
              aria-hidden="true"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-xe-white">
              Vielen Dank!
            </h3>
            <p className="font-body text-sm text-xe-gray-5 max-w-xs leading-relaxed">
              Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmoglich
              bei Ihnen zuruck.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            noValidate
            aria-label="Terminanfrage Formular"
          >
            {variant === 'full' ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="vorname" className="form-label">
                      Vorname <span className="text-xe-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="vorname"
                      name="vorname"
                      type="text"
                      required
                      autoComplete="given-name"
                      aria-required="true"
                      placeholder="Max"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="form-label">
                      Nachname
                    </label>
                    <input
                      id="nachname"
                      name="nachname"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Mustermann"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="telefon" className="form-label">
                      Telefon <span className="text-xe-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      required
                      autoComplete="tel"
                      aria-required="true"
                      placeholder="0228 ..."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="max@beispiel.de"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="fahrzeug" className="form-label">
                    Fahrzeug (Marke / Modell)
                  </label>
                  <input
                    id="fahrzeug"
                    name="fahrzeug"
                    type="text"
                    placeholder="z.B. VW Golf 7, 2018"
                    className="form-input"
                  />
                </div>
                <fieldset className="mb-5">
                  <legend className="form-label mb-3">Gewunschter Service</legend>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceOptions.map((s) => (
                      <label
                        key={s}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={s}
                          checked={checkedServices.includes(s)}
                          onChange={() => toggleService(s)}
                          className="sr-only"
                        />
                        <span
                          className="w-4 h-4 border shrink-0 flex items-center justify-center transition-colors"
                          style={{
                            border: checkedServices.includes(s)
                              ? '2px solid var(--red)'
                              : '2px solid var(--gray-2)',
                            background: checkedServices.includes(s)
                              ? 'var(--red)'
                              : 'transparent',
                          }}
                          aria-hidden="true"
                        >
                          {checkedServices.includes(s) && (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                              <polyline points="2 6 5 9 10 3"/>
                            </svg>
                          )}
                        </span>
                        <span className="font-body text-xs text-xe-gray-5 group-hover:text-xe-white transition-colors">
                          {s}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="mb-5">
                  <label htmlFor="termin" className="form-label">
                    Wunschtermin
                  </label>
                  <input
                    id="termin"
                    name="termin"
                    type="date"
                    className="form-input"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="nachricht" className="form-label">
                    Nachricht
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={4}
                    placeholder="Ihr Anliegen..."
                    className="form-input resize-y"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mb-5">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-xe-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-required="true"
                    placeholder="Vor- und Nachname"
                    className="form-input"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="telefon-contact" className="form-label">
                      Telefon
                    </label>
                    <input
                      id="telefon-contact"
                      name="telefon"
                      type="tel"
                      autoComplete="tel"
                      placeholder="0228 ..."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-contact" className="form-label">
                      E-Mail
                    </label>
                    <input
                      id="email-contact"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="max@beispiel.de"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="nachricht-contact" className="form-label">
                    Nachricht <span className="text-xe-red" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="nachricht-contact"
                    name="nachricht"
                    rows={5}
                    required
                    aria-required="true"
                    placeholder="Wie konnen wir Ihnen helfen?"
                    className="form-input resize-y"
                  />
                </div>
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      aria-required="true"
                      className="mt-0.5 accent-xe-red"
                    />
                    <span className="font-body text-xs text-xe-gray-4 leading-relaxed">
                      Mit der Nutzung dieses Formulars erkla&#776;re ich mich mit der
                      Speicherung und Verarbeitung meiner Daten einverstanden.{' '}
                      <a
                        href="/datenschutz"
                        className="text-xe-red-lite underline hover:text-xe-white"
                      >
                        Datenschutzerkla&#776;rung
                      </a>
                    </span>
                  </label>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-red w-full justify-center"
              aria-label="Anfrage absenden"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                  Wird gesendet...
                </span>
              ) : (
                'Anfrage senden'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

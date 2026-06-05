'use client'

import { useState, useEffect } from 'react'

export const hours = [
  { day: 'Montag',     time: '08:15 - 17:00 Uhr', jsDay: 1 },
  { day: 'Dienstag',   time: '08:15 - 17:00 Uhr', jsDay: 2 },
  { day: 'Mittwoch',   time: '08:15 - 17:00 Uhr', jsDay: 3 },
  { day: 'Donnerstag', time: '08:15 - 17:00 Uhr', jsDay: 4 },
  { day: 'Freitag',    time: '08:15 - 15:00 Uhr', jsDay: 5 },
  { day: 'Samstag',    time: 'Nach Vereinbarung',  jsDay: 6, special: true },
  { day: 'Sonntag',    time: 'Geschlossen',         jsDay: 0, closed: true },
]

function computeStatus(): { isOpen: boolean; todayIndex: number } {
  const now = new Date()
  const day = now.getDay()
  const todayIndex = hours.findIndex((h) => h.jsDay === day)
  const t = now.getHours() * 60 + now.getMinutes()

  let isOpen = false
  if (day >= 1 && day <= 4) isOpen = t >= 8 * 60 + 15 && t < 17 * 60
  else if (day === 5) isOpen = t >= 8 * 60 + 15 && t < 15 * 60

  return { isOpen, todayIndex }
}

export default function HoursTable() {
  const [status, setStatus] = useState<{ isOpen: boolean; todayIndex: number }>({
    isOpen: false,
    todayIndex: -1,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setStatus(computeStatus())
    const id = setInterval(() => setStatus(computeStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Live badge */}
      {mounted && (
        <div className="flex items-center gap-2 mb-6">
          <span
            className="relative inline-flex w-2.5 h-2.5"
            aria-hidden="true"
          >
            <span
              className={`absolute inline-flex w-full h-full rounded-full opacity-75 ${status.isOpen ? 'animate-ping bg-green-400' : 'bg-xe-red'}`}
            />
            <span
              className={`relative inline-flex w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-green-400' : 'bg-xe-red'}`}
            />
          </span>
          <span
            className={`font-display font-bold text-sm uppercase tracking-widest ${status.isOpen ? 'text-green-400' : 'text-xe-red'}`}
          >
            {status.isOpen ? 'Jetzt geoffnet' : 'Aktuell geschlossen'}
          </span>
        </div>
      )}

      <table className="w-full" aria-label="Offnungszeiten">
        <caption className="sr-only">Offnungszeiten XE-Autoservice Wolf</caption>
        <tbody>
          {hours.map((row, i) => {
            const isToday = mounted && i === status.todayIndex
            return (
              <tr
                key={row.day}
                className={`border-b transition-colors ${
                  isToday
                    ? 'border-xe-red'
                    : 'border-xe-gray-2'
                }`}
                aria-current={isToday ? 'true' : undefined}
              >
                <td
                  className={`py-3.5 pr-8 font-display font-bold text-sm uppercase tracking-wide ${
                    isToday ? 'text-xe-red' : 'text-xe-gray-5'
                  }`}
                >
                  {row.day}
                </td>
                <td
                  className={`py-3.5 font-body text-sm text-right ${
                    row.closed
                      ? 'text-xe-gray-4'
                      : row.special
                      ? 'text-xe-gray-5 italic'
                      : isToday
                      ? 'text-xe-white font-medium'
                      : 'text-xe-gray-5'
                  }`}
                >
                  {row.time}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className="mt-5 font-body text-xs text-xe-gray-4 leading-relaxed">
        Ausserhalb der Offnungszeiten: Reparaturauftrag und Schlussel in den
        Briefkasten einwerfen.
      </p>
    </div>
  )
}

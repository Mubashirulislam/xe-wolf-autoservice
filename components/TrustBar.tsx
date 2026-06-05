const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Alle Marken & Fabrikate',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 9v4l2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8h18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: '24-Stunden Fahrzeugannahme',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 11h.01M12 11h.01M8 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: 'Festpreise & Transparenz',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 3 16 3 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 12-9 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Familiengeführt mit Herz',
  },
]

export default function TrustBar() {
  return (
    <div
      className="bg-xe-red w-full"
      role="complementary"
      aria-label="Unsere Versprechen"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 text-xe-white"
            >
              <span className="opacity-90 shrink-0">{item.icon}</span>
              <span className="font-display font-bold text-sm uppercase tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

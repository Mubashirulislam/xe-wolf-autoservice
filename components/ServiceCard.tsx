interface ServiceCardProps {
  num: string
  title: string
  desc: string
  badge: string
}

export default function ServiceCard({ num, title, desc, badge }: ServiceCardProps) {
  return (
    <article className="service-card bg-xe-white p-8 group cursor-default h-full flex flex-col">
      <p
        className="font-display font-black leading-none mb-4 select-none"
        style={{ fontSize: '80px', color: 'var(--gray-6)' }}
        aria-hidden="true"
      >
        {num}
      </p>
      <h3
        className="font-display font-black text-2xl uppercase tracking-tight mb-3"
        style={{ color: 'var(--gray-1)' }}
      >
        {title}
      </h3>
      <p
        className="font-body text-sm leading-relaxed mb-5"
        style={{ color: 'var(--gray-4)' }}
      >
        {desc}
      </p>
      <span
        className="inline-block font-display font-bold text-xs uppercase tracking-widest px-3 py-1 mt-auto"
        style={{ background: 'var(--gray-7)', color: 'var(--gray-4)', border: '1px solid var(--gray-6)' }}
      >
        {badge}
      </span>
    </article>
  )
}

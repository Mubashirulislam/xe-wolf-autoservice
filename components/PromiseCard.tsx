interface PromiseCardProps {
  icon: React.ReactNode
  title: string
  body: string
}

export default function PromiseCard({ icon, title, body }: PromiseCardProps) {
  return (
    <article
      className="p-6 group"
      style={{ border: '1px solid var(--gray-2)', background: 'var(--gray-1)' }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center mb-4"
        style={{ border: '1px solid var(--gray-2)', color: 'var(--red)' }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="font-display font-black text-lg uppercase tracking-tight text-xe-white mb-2">
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-xe-gray-4">{body}</p>
    </article>
  )
}

interface ReviewCardProps {
  name: string
  text: string
  date?: string
}

export default function ReviewCard({ name, text, date }: ReviewCardProps) {
  return (
    <article
      className="bg-xe-white p-7"
      style={{ border: '1px solid var(--gray-6)' }}
    >
      <div className="flex items-center gap-1 mb-4" aria-label="5 von 5 Sternen">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="var(--accent)"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote>
        <p
          className="font-body text-sm leading-relaxed mb-5"
          style={{ color: 'var(--gray-1)' }}
        >
          &ldquo;{text}&rdquo;
        </p>
        <footer>
          <cite
            className="font-display font-bold text-sm uppercase tracking-wide not-italic"
            style={{ color: 'var(--gray-4)' }}
          >
            {name}
            {date && (
              <span className="font-body font-normal normal-case tracking-normal ml-2">
                &middot; {date}
              </span>
            )}
          </cite>
        </footer>
      </blockquote>
    </article>
  )
}

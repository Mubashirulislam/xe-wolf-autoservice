'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SectionRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function SectionReveal({
  children,
  delay = 0,
  className,
}: SectionRevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

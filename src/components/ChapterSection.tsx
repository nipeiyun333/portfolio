import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ChapterSectionProps {
  children: React.ReactNode
  className?: string
  /** Delay stagger for children (in seconds) */
  stagger?: number
}

/**
 * A full-viewport-height chapter that fades in/out as the user scrolls through it.
 * Content appears smoothly as the section scrolls through the viewport,
 * creating a cinematic "chapter" effect over the video background.
 */
export default function ChapterSection({
  children,
  className = '',
  stagger = 0.15,
}: ChapterSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Fade in from 0→0.3, hold, fade out 0.7→1.0
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [0, 1, 1, 0]
  )

  // Slight upward drift as section passes
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [60, 0, 0, -60]
  )

  // Subtle scale pulse
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [0.97, 1, 1, 0.97]
  )

  return (
    <section
      ref={ref}
      className={className}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0',
        position: 'relative',
      }}
    >
      <motion.div
        style={{ opacity, y, scale }}
        className="w-full"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: stagger,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  )
}

/**
 * A child element within a ChapterSection that fades up with stagger.
 */
export function ChapterItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

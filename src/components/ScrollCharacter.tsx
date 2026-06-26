import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollCharacter() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  // Character moves from right (outside) to center, then fades out
  const x = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.5, 0.65], ['100%', '10%', '5%', '0%', '-80%'])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.6], [0, 1, 0.6, 0])
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.7, 1, 0.85])

  return (
    <>
      {/* Invisible spacer for scroll tracking */}
      <div ref={targetRef} style={{ position: 'absolute', top: 0, left: 0, width: 1, height: '300vh', pointerEvents: 'none', opacity: 0 }} />

      <motion.div
        style={{
          position: 'fixed',
          bottom: '5%',
          right: 0,
          zIndex: 50,
          x,
          opacity,
          scale,
          pointerEvents: 'none',
          transformOrigin: 'bottom right',
        }}
      >
        <img
          src="/src/assets/character.png"
          alt="角色"
          style={{
            height: '80vh',
            maxHeight: 700,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))',
          }}
        />
      </motion.div>
    </>
  )
}

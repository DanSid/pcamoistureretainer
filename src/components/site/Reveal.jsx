import { motion } from 'framer-motion'

const offsets = {
  up: { x: 0, y: 44 },
  down: { x: 0, y: -44 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.2,
  once = true,
}) {
  const offset = offsets[direction] ?? offsets.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion'

const clusters = [
  {
    position: { left: '5%', top: '8%', width: 320, height: 240 },
    drift: { x: [0, 26, -12, 0], y: [0, -18, 20, 0] },
    duration: 16,
    nodes: [
      { x: 38, y: 46, r: 4.5 },
      { x: 118, y: 62, r: 5 },
      { x: 186, y: 38, r: 4.2 },
      { x: 226, y: 106, r: 4.8 },
      { x: 144, y: 148, r: 5.2 },
      { x: 82, y: 188, r: 4.4 },
      { x: 258, y: 178, r: 3.8 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [4, 5],
      [4, 6],
      [2, 3],
    ],
  },
  {
    position: { right: '8%', top: '12%', width: 360, height: 260 },
    drift: { x: [0, -28, 14, 0], y: [0, 18, -16, 0] },
    duration: 18,
    nodes: [
      { x: 44, y: 74, r: 4.8 },
      { x: 112, y: 28, r: 4.1 },
      { x: 184, y: 54, r: 5.4 },
      { x: 266, y: 42, r: 4.4 },
      { x: 310, y: 112, r: 4.7 },
      { x: 232, y: 150, r: 5.1 },
      { x: 150, y: 194, r: 4.3 },
      { x: 86, y: 158, r: 3.9 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [2, 5],
      [5, 6],
      [6, 7],
      [0, 7],
      [1, 7],
    ],
  },
  {
    position: { left: '24%', bottom: '6%', width: 420, height: 280 },
    drift: { x: [0, 22, -10, 0], y: [0, -20, 14, 0] },
    duration: 20,
    nodes: [
      { x: 40, y: 150, r: 4.5 },
      { x: 104, y: 96, r: 4.1 },
      { x: 182, y: 128, r: 5.4 },
      { x: 246, y: 72, r: 4.4 },
      { x: 312, y: 116, r: 4.7 },
      { x: 372, y: 84, r: 4.2 },
      { x: 336, y: 188, r: 5 },
      { x: 248, y: 216, r: 4.4 },
      { x: 148, y: 212, r: 4.2 },
      { x: 88, y: 196, r: 4.1 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 0],
      [2, 8],
      [2, 4],
    ],
  },
]

const sparkles = [
  { left: '12%', top: '18%', size: 6, duration: 6.5, delay: 0.2 },
  { left: '22%', top: '58%', size: 4, duration: 7.2, delay: 1.3 },
  { left: '46%', top: '28%', size: 7, duration: 5.8, delay: 0.8 },
  { left: '58%', top: '12%', size: 5, duration: 6.4, delay: 1.9 },
  { left: '72%', top: '46%', size: 6, duration: 7.4, delay: 0.5 },
  { left: '88%', top: '24%', size: 4, duration: 6.1, delay: 1.5 },
]

export function QuantumNodes({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(222,235,255,0.5),transparent_34%),linear-gradient(180deg,rgba(158,183,219,0.18),rgba(130,160,201,0.05))]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.32),transparent_60%)]" />

      {clusters.map((cluster, clusterIndex) => (
        <motion.div
          key={`cluster-${clusterIndex}`}
          className="absolute"
          style={cluster.position}
          animate={cluster.drift}
          transition={{
            duration: cluster.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          <svg
            viewBox={`0 0 ${cluster.position.width} ${cluster.position.height}`}
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {cluster.edges.map(([startIndex, endIndex], edgeIndex) => {
              const start = cluster.nodes[startIndex]
              const end = cluster.nodes[endIndex]

              return (
                <motion.line
                  key={`edge-${clusterIndex}-${edgeIndex}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="rgba(226, 239, 255, 0.7)"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.2, opacity: 0.18 }}
                  animate={{ pathLength: [0.24, 1, 0.55], opacity: [0.14, 0.62, 0.22] }}
                  transition={{
                    duration: 5 + edgeIndex * 0.28,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: edgeIndex * 0.12,
                  }}
                />
              )
            })}

            {cluster.nodes.map((node, nodeIndex) => (
              <motion.g
                key={`node-${clusterIndex}-${nodeIndex}`}
                animate={{
                  x: [0, nodeIndex % 2 === 0 ? 6 : -5, 0],
                  y: [0, nodeIndex % 3 === 0 ? -6 : 5, 0],
                }}
                transition={{
                  duration: 4.5 + nodeIndex * 0.35,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              >
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r * 2.5}
                  fill="rgba(130, 160, 201, 0.14)"
                  animate={{ opacity: [0.2, 0.52, 0.24], scale: [0.92, 1.18, 0.96] }}
                  transition={{
                    duration: 3.6 + nodeIndex * 0.22,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill="rgba(242, 248, 255, 0.95)"
                  animate={{ opacity: [0.62, 1, 0.72], scale: [0.9, 1.2, 0.94] }}
                  transition={{
                    duration: 2.8 + nodeIndex * 0.18,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: nodeIndex * 0.08,
                  }}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      ))}

      {sparkles.map((sparkle, index) => (
        <motion.span
          key={`sparkle-${index}`}
          className="absolute rounded-full bg-[#eef5ff]"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            boxShadow: '0 0 18px rgba(238, 245, 255, 0.85)',
          }}
          animate={{
            opacity: [0.2, 0.9, 0.28],
            scale: [0.9, 1.45, 1],
            y: [0, -18, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  )
}

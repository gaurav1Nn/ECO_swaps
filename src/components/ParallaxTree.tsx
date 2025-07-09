// import { useEffect, useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import heroTree from '@/assets/hero-tree.jpg'

// interface ParallaxTreeProps {
//   className?: string
// }

// export function ParallaxTree({ className }: ParallaxTreeProps) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll()

//   // Transform values based on scroll position
//   const treeRotateY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 15, 45, 90, 135, 180])
//   const treeScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.2, 0.8, 1.4])
//   const treeOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8])
  
//   // Lighting effects based on scroll
//   const brightness = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 1.2, 0.9, 1.1, 1.3, 1.4])
//   const hueRotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 20, -10, 30])

//   return (
//     <div ref={containerRef} className={`fixed inset-0 flex items-center justify-center pointer-events-none ${className}`}>
//       <motion.div
//         className="relative w-[80vmin] h-[80vmin] max-w-2xl max-h-2xl"
//         style={{
//           rotateY: treeRotateY,
//           scale: treeScale,
//           opacity: treeOpacity,
//         }}
//       >
//         <motion.img
//           src={heroTree}
//           alt="Majestic tree representing nature"
//           className="w-full h-full object-contain drop-shadow-2xl animate-tree-sway"
//           style={{
//             filter: useTransform(
//               [brightness, hueRotate],
//               ([b, h]) => `brightness(${b}) hue-rotate(${h}deg) saturate(1.1)`
//             ),
//           }}
//         />
        
//         {/* Glowing aura effect */}
//         <motion.div
//           className="absolute inset-0 rounded-full"
//           style={{
//             background: `radial-gradient(ellipse at center, hsl(var(--primary-glow) / 0.3) 0%, transparent 70%)`,
//             scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]),
//             opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.8]),
//           }}
//         />
//       </motion.div>
//     </div>
//   )
// }

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroTree from '@/assets/hero-tree.jpg'

interface ParallaxTreeProps {
  className?: string
}

export function ParallaxTree({ className }: ParallaxTreeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Subtle vertical movement as main effect
  const treeY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '-15%', '-40%'])
  
  // Gentle 3D tilt for depth (not full rotation)
  const treeRotateX = useTransform(scrollYProgress, [0, 0.5, 1], ['0deg', '-5deg', '-10deg'])
  const treeRotateY = useTransform(scrollYProgress, [0, 0.5, 1], ['0deg', '8deg', '15deg'])
  
  // Subtle scale changes
  const treeScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.08, 1.05, 0.95])
  
  // Fade out towards the end
  const treeOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9, 1], [0.9, 0.8, 0.4, 0.2])
  
  // Natural lighting adjustments
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9])
  const contrast = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1])
  const blur = useTransform(scrollYProgress, [0, 0.8, 1], ['0px', '0px', '2px'])

  return (
    <div ref={containerRef} className={`fixed inset-0 flex items-center justify-center pointer-events-none z-0 ${className}`}>
      {/* Ambient background glow */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.3])
        }}
      />

      {/* Tree container */}
      <motion.div
        className="relative w-[50vw] h-[70vh] max-w-[600px] max-h-[800px]"
        style={{
          y: treeY,
          scale: treeScale,
          opacity: treeOpacity,
          rotateX: treeRotateX,
          rotateY: treeRotateY,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft shadow/glow behind tree */}
        <motion.div
          className="absolute inset-0 -inset-x-20 -inset-y-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.15) 0%, transparent 60%)',
            filter: 'blur(40px)',
            scale: useTransform(scrollYProgress, [0, 1], [0.9, 1.1]),
          }}
        />
        
        {/* Main tree image */}
        <motion.img
          src={heroTree}
          alt="Majestic tree representing nature"
          className="relative w-full h-full object-contain"
          style={{
            filter: useTransform(
              [brightness, contrast, blur],
              ([b, c, bl]) => `brightness(${b}) contrast(${c}) saturate(1.1) blur(${bl})`
            ),
            dropShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          }}
        />
        
        {/* Floating light particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-300/50 rounded-full"
              style={{
                top: `${10 + (i * 12)}%`,
                left: `${20 + (i * 10) % 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Foreground vignette for depth */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(236, 253, 245, 0.05) 100%)',
          opacity: useTransform(scrollYProgress, [0, 1], [0, 0.6])
        }}
      />
    </div>
  )
}
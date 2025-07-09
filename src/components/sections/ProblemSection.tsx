// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'

// export function ProblemSection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   })

//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
//   const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

//   return (
//     <section 
//       ref={sectionRef}
//       className="min-h-screen flex items-center justify-center px-4 relative"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      
//       <motion.div 
//         className="relative z-10 max-w-6xl mx-auto text-center"
//         style={{ opacity, y }}
//       >
//         <motion.h2 
//           className="text-5xl md:text-7xl font-bold mb-12 text-foreground"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           The Problem is
//           <span className="block text-destructive text-glow">Overwhelming</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {[
//             { number: "8M", label: "Tons of plastic enter oceans yearly", delay: 0.2 },
//             { number: "500", label: "Years for plastic bags to decompose", delay: 0.4 },
//             { number: "1M", label: "Plastic bottles sold every minute", delay: 0.6 },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="glass-effect p-8 rounded-xl"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
//             >
//               <div className="text-4xl font-bold text-destructive mb-4">{stat.number}</div>
//               <p className="text-muted-foreground">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.p
//           className="text-xl text-muted-foreground max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           Every day, millions of people unknowingly choose products that harm our environment. 
//           But what if making sustainable choices was as easy as shopping normally?
//         </motion.p>
//       </motion.div>
//     </section>
//   )
// }

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Leaf } from 'lucide-react'

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 relative bg-gradient-to-b from-emerald-950 via-green-950 to-emerald-950 overflow-hidden"
    >
      {/* Subtle floating leaves in background */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            initial={{
              left: `${20 + i * 10}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Leaf className="w-24 h-24 text-emerald-500" />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ opacity, y }}
      >
        {/* Environmental Crisis Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-red-900/20 backdrop-blur-sm border border-red-800/30 px-4 py-2 rounded-full mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-400">Environmental Crisis</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">The Problem is</span>
          <br />
          <span className="text-red-500 relative inline-block mt-2">
            Overwhelming
            <motion.div 
              className="absolute -bottom-6 left-0 right-0 h-1 bg-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-20">
          {[
            { 
              number: "8M", 
              label: "Tons of plastic enter oceans yearly", 
              delay: 0.2,
              color: "red"
            },
            { 
              number: "500", 
              label: "Years for plastic bags to decompose", 
              delay: 0.4,
              color: "orange"
            },
            { 
              number: "1M", 
              label: "Plastic bottles sold every minute", 
              delay: 0.6,
              color: "amber"
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
            >
              <div className={`text-6xl md:text-7xl font-bold mb-4 ${
                stat.color === 'red' ? 'text-red-500' : 
                stat.color === 'orange' ? 'text-orange-500' : 
                'text-amber-500'
              }`}>
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm md:text-base max-w-xs mx-auto">
                {stat.label}
              </p>
              <motion.div 
                className={`mt-6 h-0.5 mx-auto ${
                  stat.color === 'red' ? 'bg-red-500/50' : 
                  stat.color === 'orange' ? 'bg-orange-500/50' : 
                  'bg-amber-500/50'
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: stat.delay + 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Every day, millions of people unknowingly choose products that harm our environment.
          </p>
          <motion.p 
            className="text-xl text-emerald-400 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            But what if making sustainable choices was as easy as shopping normally?
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf className="inline-block w-5 h-5" />
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
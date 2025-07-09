// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Leaf } from 'lucide-react'

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
//       {/* Animated background particles */}
//       <div className="absolute inset-0">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute opacity-20"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [-20, 20, -20],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: Math.random() * 2,
//             }}
//           >
//             <Leaf className="w-4 h-4 text-primary-glow" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Hero content */}
//       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//         <motion.h1
//           className="text-6xl md:text-8xl font-bold mb-6 text-glow"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           Choose Earth.
//           <br />
//           <span className="text-accent">Choose Better.</span>
//         </motion.h1>
        
//         <motion.p
//           className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//         >
//           Discover eco-friendly alternatives to everyday products. 
//           Make sustainable choices that matter for our planet.
//         </motion.p>
        
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         >
//           <Button 
//             size="lg" 
//             className="bg-primary hover:bg-primary-glow text-primary-foreground px-12 py-6 text-lg shadow-glow transition-smooth hover:scale-105"
//           >
//             Start Your Eco Journey
//           </Button>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
//           <motion.div
//             className="w-1 h-3 bg-primary rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   )
// }


// new 

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Leaf } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-100 to-lime-50 dark:from-green-950 dark:via-emerald-950 dark:to-green-900">
      {/* Organic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-100/50 via-transparent to-emerald-100/30 dark:from-green-900/50 dark:via-transparent dark:to-emerald-900/30" />
      
      {/* Animated background particles - multiple leaf types */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <Leaf 
              className={`${
                i % 3 === 0 
                  ? 'w-8 h-8 text-green-500/40 dark:text-green-400/30' 
                  : i % 3 === 1 
                  ? 'w-6 h-6 text-emerald-600/30 dark:text-emerald-400/25' 
                  : 'w-5 h-5 text-lime-500/35 dark:text-lime-400/30'
              } drop-shadow-md`} 
            />
          </motion.div>
        ))}
      </div>

      {/* Nature pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 dark:from-green-400 dark:via-emerald-300 dark:to-green-400 drop-shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Choose Earth.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600 dark:from-emerald-400 dark:via-green-300 dark:to-lime-400">
            Choose Better.
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 text-green-800 dark:text-green-100 max-w-2xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Discover eco-friendly alternatives to everyday products. 
          Make sustainable choices that matter for our planet.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-500 dark:to-emerald-500 dark:hover:from-green-600 dark:hover:to-emerald-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 transform border border-green-500/20"
          >
            <Leaf className="inline-block w-5 h-5 mr-2" />
            Start Your Eco Journey
          </Button>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with leaf */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 border-2 border-green-600/60 dark:border-green-400/60 rounded-full flex flex-col items-center justify-start p-2 bg-green-50/30 dark:bg-green-900/20 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'

// export function SolutionSection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   })

//   const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

//   const products = [
//     {
//       bad: { name: "Plastic Bags", impact: "500 years to decompose" },
//       good: { name: "Paper Bags", impact: "100% biodegradable" },
//       savings: "Save 1,000 bags/year"
//     },
//     {
//       bad: { name: "Plastic Bottles", impact: "450 years to decompose" },
//       good: { name: "Glass Bottles", impact: "Infinitely recyclable" },
//       savings: "Save 300 bottles/year"
//     },
//     {
//       bad: { name: "Fast Fashion", impact: "2nd largest polluter" },
//       good: { name: "Sustainable Clothing", impact: "Eco-friendly materials" },
//       savings: "Reduce 70% emissions"
//     },
//     {
//       bad: { name: "Chemical Cleaners", impact: "Toxic to waterways" },
//       good: { name: "Natural Cleaners", impact: "Plant-based ingredients" },
//       savings: "100% safer for family"
//     }
//   ]

//   return (
//     <section 
//       ref={sectionRef}
//       className="min-h-screen py-20 px-4 bg-gradient-forest"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="text-center mb-16"
//           style={{ y }}
//         >
//           <motion.h2 
//             className="text-5xl md:text-7xl font-bold mb-6 text-background"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             Simple
//             <span className="block text-accent text-glow">Swaps</span>
//           </motion.h2>
          
//           <motion.p
//             className="text-xl text-background/80 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Every sustainable choice creates a ripple effect. 
//             Small changes lead to massive environmental impact.
//           </motion.p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//             >
//               <Card className="glass-effect h-full hover:shadow-glow transition-smooth hover:scale-105">
//                 <CardContent className="p-6">
//                   {/* Bad option */}
//                   <div className="mb-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
//                     <h3 className="font-semibold text-destructive mb-2">{product.bad.name}</h3>
//                     <p className="text-sm text-muted-foreground">{product.bad.impact}</p>
//                   </div>

//                   {/* Arrow */}
//                   <div className="text-center mb-6">
//                     <div className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full">
//                       <span className="text-primary-foreground font-bold">→</span>
//                     </div>
//                   </div>

//                   {/* Good option */}
//                   <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
//                     <h3 className="font-semibold text-primary mb-2">{product.good.name}</h3>
//                     <p className="text-sm text-muted-foreground">{product.good.impact}</p>
//                   </div>

//                   {/* Savings */}
//                   <div className="text-center">
//                     <div className="text-accent font-semibold text-sm">{product.savings}</div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <Button 
//             size="lg"
//             className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 shadow-glow transition-smooth hover:scale-105"
//           >
//             See All Eco Alternatives
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, Check, Leaf, TreePine } from 'lucide-react'

export function SolutionSection() {
  const products = [
    {
      bad: { name: "Plastic Bags", impact: "500 years to decompose" },
      good: { name: "Paper Bags", impact: "100% biodegradable" },
      savings: "Save 1,000 bags/year",
      icon: "🛍️"
    },
    {
      bad: { name: "Plastic Bottles", impact: "450 years to decompose" },
      good: { name: "Glass Bottles", impact: "Infinitely recyclable" },
      savings: "Save 300 bottles/year",
      icon: "🍶"
    },
    {
      bad: { name: "Fast Fashion", impact: "2nd largest polluter" },
      good: { name: "Sustainable Clothing", impact: "Eco-friendly materials" },
      savings: "Reduce 70% emissions",
      icon: "👕"
    },
    {
      bad: { name: "Chemical Cleaners", impact: "Toxic to waterways" },
      good: { name: "Natural Cleaners", impact: "Plant-based ingredients" },
      savings: "100% safer for family",
      icon: "🧹"
    }
  ]

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 overflow-hidden">
      {/* Large Tree Icon Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <TreePine className="w-[800px] h-[800px] text-green-800 drop-shadow-2xl" />
        </motion.div>
      </div>

      {/* Secondary floating trees for depth */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TreePine className="w-32 h-32 text-green-700/20" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10"
          animate={{
            y: [0, 20, 0],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TreePine className="w-40 h-40 text-green-700/15" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gray-900 drop-shadow-lg">Simple</span>
            <br />
            <span className="text-amber-400 drop-shadow-[0_4px_20px_rgba(251,191,36,0.5)]">Swaps</span>
          </h2>
          
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium drop-shadow">
            Every sustainable choice creates a ripple effect. Small changes lead to massive environmental impact.
          </p>
        </motion.div>

        {/* Swap Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-green-900/50 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-green-900/60 border border-green-800/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Bad Option */}
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-400 mb-1">{product.bad.name}</h3>
                  <p className="text-sm text-gray-200">{product.bad.impact}</p>
                </div>
              </div>

              {/* Arrow Divider */}
              <div className="flex justify-center my-4">
                <motion.div 
                  className="w-10 h-10 bg-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-emerald-300 font-bold text-lg">↓</span>
                </motion.div>
              </div>

              {/* Good Option */}
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/30 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-emerald-400 mb-1">{product.good.name}</h3>
                  <p className="text-sm text-gray-200">{product.good.impact}</p>
                </div>
              </div>

              {/* Savings */}
              <div className="pt-4 border-t border-green-700/50">
                <div className="flex items-center gap-2 text-amber-400">
                  <Leaf className="w-5 h-5" />
                  <span className="font-bold text-sm">{product.savings}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button 
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-amber-500/25 transition-all hover:scale-105 group"
          >
            See All Eco Alternatives
            <TreePine className="ml-2 w-5 h-5 inline-block group-hover:rotate-6 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
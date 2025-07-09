import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const impacts = [
    {
      metric: "2.5M",
      label: "Plastic items replaced",
      description: "Every month, our community chooses better alternatives",
      color: "text-primary"
    },
    {
      metric: "890K",
      label: "CO2 emissions reduced",
      description: "Tons of carbon saved through sustainable choices",
      color: "text-accent"
    },
    {
      metric: "1.2M",
      label: "Trees effectively planted",
      description: "Environmental impact equivalent through our platform",
      color: "text-primary-glow"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-earth relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        <motion.div 
          className="text-center mb-16"
          style={{ scale }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 text-background"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Real
            <span className="block text-accent text-glow">Impact</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-background/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Together, we're creating measurable change for our planet. 
            Every swap matters, every choice counts.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <Card className="glass-effect h-full hover:shadow-glow transition-smooth hover:scale-105 bg-background/10">
                <CardContent className="p-8 text-center">
                  <div className={`text-5xl font-bold mb-4 ${impact.color}`}>
                    {impact.metric}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-background">
                    {impact.label}
                  </h3>
                  <p className="text-background/70">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="glass-effect bg-destructive/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-destructive mb-4">Before EcoSwap</h3>
              <ul className="text-background/70 space-y-2">
                <li>• Unknowing harmful purchases</li>
                <li>• No alternative suggestions</li>
                <li>• Hidden environmental costs</li>
                <li>• Guilt after learning impact</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-effect bg-primary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">With EcoSwap</h3>
              <ul className="text-background/70 space-y-2">
                <li>• Informed sustainable choices</li>
                <li>• Smart eco-friendly recommendations</li>
                <li>• Transparent environmental impact</li>
                <li>• Pride in positive change</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
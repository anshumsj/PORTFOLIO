"use client"

import { motion, type Variants } from "framer-motion"
import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

export function TechStack() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section className="py-24 bg-black/40 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Arsenal</h2>
            <p className="text-muted-foreground">Technologies and tools I use to build robust applications.</p>
          </motion.div>

          <div className="space-y-10">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {items.map((tech) => (
                    <motion.div key={tech} variants={item}>
                      <Badge variant="glass" className="px-4 py-2 text-sm hover:bg-white/10 transition-colors cursor-default">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

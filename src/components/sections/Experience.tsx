"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional roles and internships where I've applied my skills in real-world scenarios.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 flex items-center justify-center z-10 shadow-lg">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              {/* Content box */}
              <div className={`w-full ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"
              }`}>
                <div className="p-6 bg-card border border-border/50 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"} mb-4`}>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <h4 className="text-primary font-medium">{exp.company}</h4>
                    <span className="text-sm text-muted-foreground mt-1">{exp.duration}</span>
                  </div>
                  
                  <p className="text-sm text-foreground/80 mb-4">{exp.description}</p>
                  
                  <ul className={`list-disc pl-5 text-sm text-muted-foreground space-y-1 ${
                    index % 2 === 0 ? "text-left" : "md:text-right md:list-none md:pl-0"
                  }`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className={index % 2 === 0 ? "" : "md:flex md:justify-end md:gap-2"}>
                        {index % 2 !== 0 && <span className="hidden md:inline text-primary">•</span>}
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

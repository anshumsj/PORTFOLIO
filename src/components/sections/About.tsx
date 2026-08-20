"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/data"
import { Code2, Server, Workflow, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

const interests = [
  {
    title: "Full Stack Development",
    icon: <Code2 className="w-5 h-5 mb-2 text-primary" />,
    description: "Building scalable and responsive web applications from end to end."
  },
  {
    title: "Backend Engineering",
    icon: <Server className="w-5 h-5 mb-2 text-primary" />,
    description: "Designing robust APIs, database schemas, and microservices."
  },
  {
    title: "AI & Automation",
    icon: <Workflow className="w-5 h-5 mb-2 text-primary" />,
    description: "Integrating AI models and automating real-world business workflows."
  },
  {
    title: "Problem Solving",
    icon: <Cpu className="w-5 h-5 mb-2 text-primary" />,
    description: "Strong foundation in Data Structures and Algorithms."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Computer Science Engineering student with a deep passion for building software that solves real problems. 
            I enjoy bridging the gap between elegant user interfaces and robust backend systems. 
            My current focus is on modern web technologies, workflow automation, and distributed systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-black/20 border-border/50 hover:bg-black/40 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {interest.icon}
                  <h3 className="font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center p-6 bg-accent/20 rounded-2xl border border-border/50">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.dsa}</span>
            <span className="text-sm font-medium text-muted-foreground text-center">DSA Problems</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-accent/20 rounded-2xl border border-border/50">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.projects}</span>
            <span className="text-sm font-medium text-muted-foreground text-center">Full Stack Projects</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-accent/20 rounded-2xl border border-border/50">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.internships}</span>
            <span className="text-sm font-medium text-muted-foreground text-center">Internships</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-accent/20 rounded-2xl border border-border/50">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.openSource}</span>
            <span className="text-sm font-medium text-muted-foreground text-center">GitHub Commits</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

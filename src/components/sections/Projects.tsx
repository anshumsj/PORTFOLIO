"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my ability to solve complex problems and build scalable solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 bg-accent/5 hover:bg-accent/10 transition-colors group">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-6 text-foreground/80">
                        {project.description}
                      </CardDescription>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2">The Problem:</h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold mb-3">Key Highlights:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <GithubIcon className="mr-2 h-4 w-4" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative placeholder for project image/architecture */}
                  <div className="lg:w-2/5 min-h-[300px] lg:min-h-full bg-black/40 border-l border-border/30 relative overflow-hidden flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                    <div className="w-full aspect-video rounded-lg border border-white/10 bg-black/60 shadow-2xl flex items-center justify-center backdrop-blur-md overflow-hidden relative">
                       {/* Abstract code representation */}
                       <div className="absolute top-4 left-4 flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/50" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                         <div className="w-3 h-3 rounded-full bg-green-500/50" />
                       </div>
                       <div className="w-3/4 h-3/4 flex flex-col justify-center gap-3 opacity-30 mt-4">
                         <div className="h-4 w-full bg-muted rounded" />
                         <div className="h-4 w-5/6 bg-muted rounded" />
                         <div className="h-4 w-4/6 bg-muted rounded" />
                         <div className="h-4 w-full bg-muted rounded" />
                       </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

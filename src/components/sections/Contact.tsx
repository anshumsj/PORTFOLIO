"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Send } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let's build something together.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm currently looking for software engineering opportunities and interesting projects to work on. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:example@example.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center mr-4">
                    <Send className="w-4 h-4" />
                  </div>
                  example@example.com
                </a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden"
            >
              {isSubmitted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10 p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Mail, FileText } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 mt-24 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="#home" className="text-xl font-bold tracking-tight">
            Anshum<span className="text-muted-foreground">.</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Built with Next.js + React.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon width={20} height={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedinIcon width={20} height={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:example@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={20} />
            <span className="sr-only">Resume</span>
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground md:hidden">
          &copy; {currentYear} Anshum. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

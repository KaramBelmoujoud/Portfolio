"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe, Github, Linkedin, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "~/about", href: "#about" },
    { name: "~/tech-stack", href: "#tech-stack" },
    { name: "~/projects", href: "#projects" },
    { name: "~/experience", href: "#experience" },
    { name: "~/contact", href: "#contact" },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <span className="text-emerald-400">karam@dev</span>
          <span className="text-slate-400">:~$</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://github.com/KaramBelmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/Karam-Belmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* <ThemeToggle /> */}
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://github.com/KaramBelmoujoud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
                      <a
              href="https://linkedin.com/in/Karam-Belmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          
          {/* <ThemeToggle /> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-slate-400 hover:text-emerald-400"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#161b22]/95 backdrop-blur-md border-b border-[#30363d]"
          >
            <div className="container mx-auto p-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-emerald-400 py-2 transition-colors duration-200 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar


"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/context/language-context"

const Terminal = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      return true
    }
    return false
  }

  // Commands and responses
  const commands: Record<string, string> = {
    help: "Available commands: about, skills, contact, clear, projects, experience",
    about:
      "I'm Karam Belmoujoud, a passionate Full Stack Developer with expertise in modern web technologies, DevOps practices, and AI/ML integration.",
    skills:
      "Languages: JavaScript, TypeScript, Python, C#, C++\nFrontend: React, Next.js, Angular, Tailwind CSS\nBackend: Node.js, Spring Boot, MongoDB, SQL\nDevOps: Docker, AWS, CI/CD, GitHub Actions\nOther: AI/ML, Mobile Development, API Design",
    contact:
      "Email: karam_belmo@outlook.com\nLinkedIn: linkedin.com/in/Karam-Belmoujoud\nGitHub: github.com/KaramBelmoujoud",
    projects: "Type 'cd projects' to see my portfolio of projects",
    experience: "Type 'cd experience' to view my professional experience",
    clear: "CLEAR_COMMAND",
  }

  // Simulate typing effect
  useEffect(() => {
    if (inView && commandHistory.length === 0) {
      const initialCommands = ["help", "about"]
      let delay = 500

      initialCommands.forEach((cmd) => {
        setTimeout(() => {
          handleCommand(cmd)
        }, delay)
        delay += 1500
      })
    }
  }, [inView])

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    // Add command to history
    setCommandHistory((prev) => [...prev, `$ ${trimmedCmd}`])

    // Process command
    if (trimmedCmd === "clear") {
      setCommandHistory([])
    } else if (commands[trimmedCmd]) {
      if (commands[trimmedCmd] !== "CLEAR_COMMAND") {
        setCommandHistory((prev) => [...prev, commands[trimmedCmd]])
      } else {
        setCommandHistory([])
      }
    } else if (trimmedCmd.startsWith("cd ")) {
      const destination = trimmedCmd.substring(3)
      const sectionId = destination.toLowerCase()
      if (scrollToSection(sectionId)) {
        setCommandHistory((prev) => [...prev, `Navigating to ${destination} section...`])
      } else {
        setCommandHistory((prev) => [...prev, `Section not found: ${destination}. Type 'help' for available commands.`])
      }
    } else if (trimmedCmd) {
      setCommandHistory((prev) => [...prev, `Command not found: ${trimmedCmd}. Type 'help' for available commands.`])
    }

    setCurrentCommand("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand)
    }
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-mono mb-2 text-emerald-400">
            <span className="text-slate-400">$</span> whoami
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interact with the terminal below to learn more about me. Type <span className="text-emerald-400">help</span>{" "}
            for available commands.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1117] border-b border-[#30363d]">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-slate-400 text-xs ml-2">karam@portfolio:~</span>
            </div>

            <div
              ref={terminalRef}
              className="p-4 h-80 overflow-y-auto font-mono text-sm cursor-text"
              onClick={focusInput}
            >
              <div className="text-emerald-400 mb-2">
                Welcome to Karam's portfolio terminal. Type 'help' to see available commands.
              </div>

              {commandHistory.map((item, index) => (
                <div
                  key={index}
                  className={`mb-1 ${item.startsWith("$") ? "text-emerald-400" : "text-slate-300 whitespace-pre-line"}`}
                >
                  {item}
                </div>
              ))}

              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">$</span>
                <span className="text-slate-300">{currentCommand}</span>
                <span className={`w-2 h-5 bg-slate-300 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="opacity-0 absolute w-0 h-0"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Terminal


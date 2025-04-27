"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import Typewriter from "typewriter-effect"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CodeHero = () => {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-5 z-0 overflow-hidden">
        <pre className="text-xs leading-tight">
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="whitespace-pre">
                {`import { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`}
              </div>
            ))}
        </pre>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="mb-4 inline-block">
              <span className="text-slate-400 text-sm">// Hello World, I am</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-100">Karam Belmoujoud</h1>

            <div className="text-xl md:text-2xl text-emerald-400 font-mono mb-6 h-8">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "DevOps Engineer", "AI Enthusiast", "Problem Solver"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="mb-8 text-slate-300 max-w-xl">
              <div className="mb-4">
                <span className="text-emerald-400">const</span> <span className="text-blue-400">aboutMe</span>{" "}
                <span className="text-slate-400">=</span> <span className="text-orange-300">{"{"}</span>
              </div>
              <div className="pl-6 mb-4">
                <span className="text-green-300">skills:</span>{" "}
                <span className="text-orange-300">["Full Stack", "DevOps", "AI/ML", "Mobile Dev"],</span>
                
                <br />
                <span className="text-green-300">passion:</span>{" "}
                <span className="text-orange-300">"Creating innovative solutions to complex problems"</span>
              </div>
              <div>
                <span className="text-orange-300">{"}"}</span>
                <span className="text-slate-400">;</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white border-none">
                <Link href="#projects" className="flex items-center gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/10"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download CV
                    <Globe className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#161b22] border-[#30363d]">
                  <DropdownMenuItem 
                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-600/10 cursor-pointer"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '/karam-cv-en.pdf'
                      link.download = 'karam-cv-en.pdf'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <span className="mr-2">🇬🇧</span> English Version
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-600/10 cursor-pointer"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '/karam-cv-fr.pdf'
                      link.download = 'karam-cv-fr.pdf'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <span className="mr-2">🇫🇷</span> Version Française
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/KaramBelmoujoud"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/Karam-Belmoujoud"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:karam_belmo@outlook.com"
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-[#30363d] pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-slate-400 text-xs ml-2">karam-portfolio.tsx</span>
            </div>
            <pre className="text-sm leading-relaxed overflow-x-auto">
              <code>
                <span className="text-pink-400">import</span> <span className="text-blue-300">React</span>{" "}
                <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>
                <span className="text-slate-300">;</span>
                {"\n\n"}
                <span className="text-pink-400">interface</span> <span className="text-blue-300">DeveloperProps</span>{" "}
                <span className="text-slate-300">{"{"}</span>
                {"\n  "}
                <span className="text-slate-300">name: </span>
                <span className="text-blue-300">string</span>
                <span className="text-slate-300">;</span>
                {"\n  "}
                <span className="text-slate-300">skills: </span>
                <span className="text-blue-300">string[]</span>
                <span className="text-slate-300">;</span>
                {"\n  "}
                <span className="text-slate-300">experience: </span>
                <span className="text-blue-300">number</span>
                <span className="text-slate-300">;</span>
                {"\n"}
                <span className="text-slate-300">{"}"}</span>
                {"\n\n"}
                <span className="text-pink-400">const</span> <span className="text-blue-300">Developer</span>
                <span className="text-slate-300">: </span>
                <span className="text-pink-400">React.FC</span>
                <span className="text-slate-300">{"<"}</span>
                <span className="text-blue-300">DeveloperProps</span>
                <span className="text-slate-300">{">"}</span> <span className="text-slate-300">= (</span>
                <span className="text-orange-300">{"{"}</span> <span className="text-green-300">name</span>
                <span className="text-slate-300">,</span> <span className="text-green-300">skills</span>
                <span className="text-slate-300">,</span> <span className="text-green-300">experience</span>{" "}
                <span className="text-orange-300">{"}"}</span>
                <span className="text-slate-300">) </span>
                <span className="text-slate-300">{"=>"}</span> <span className="text-slate-300">{"{"}</span>
                {"\n  "}
                <span className="text-pink-400">return</span> <span className="text-slate-300">(</span>
                {"\n    "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-blue-300">div</span> <span className="text-green-300">className</span>
                <span className="text-slate-300">=</span>
                <span className="text-orange-300">"developer-card"</span>
                <span className="text-slate-300">{">"}</span>
                {"\n      "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-blue-300">h1</span>
                <span className="text-slate-300">{">"}</span>
                <span className="text-slate-300">Hello, I'm </span>
                <span className="text-slate-300">{"{"}</span>
                <span className="text-green-300">name</span>
                <span className="text-slate-300">{"}"}</span>
                <span className="text-slate-300">{"</"}</span>
                <span className="text-blue-300">h1</span>
                <span className="text-slate-300">{">"}</span>
                
                {"\n      "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-blue-300">div</span> <span className="text-green-300">className</span>
                <span className="text-slate-300">=</span>
                <span className="text-orange-300">"skills-container"</span>
                <span className="text-slate-300">{">"}</span>
                {"\n        "}
                <span className="text-slate-300">{"{"}</span>
                <span className="text-green-300">skills</span>
                <span className="text-slate-300">.</span>
                <span className="text-blue-300">map</span>
                <span className="text-slate-300">((</span>
                <span className="text-orange-300">skill</span>
                <span className="text-slate-300">, </span>
                <span className="text-orange-300">index</span>
                <span className="text-slate-300">) </span>
                <span className="text-slate-300">{"=>"}</span> <span className="text-slate-300">(</span>
                {"\n          "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-blue-300">span</span> <span className="text-green-300">key</span>
                <span className="text-slate-300">=</span>
                <span className="text-slate-300">{"{"}</span>
                <span className="text-green-300">index</span>
                <span className="text-slate-300">{"}"}</span> <span className="text-green-300">className</span>
                <span className="text-slate-300">=</span>
                <span className="text-orange-300">"skill-tag"</span>
                <span className="text-slate-300">{">"}</span>
                {"\n            "}
                <span className="text-slate-300">{"{"}</span>
                <span className="text-green-300">skill</span>
                <span className="text-slate-300">{"}"}</span>
                {"\n          "}
                <span className="text-slate-300">{"</"}</span>
                <span className="text-blue-300">span</span>
                <span className="text-slate-300">{">"}</span>
                {"\n        "}
                <span className="text-slate-300">
                  {"))"}
                  {"}"}
                  {"}"}
                </span>
                {"\n      "}
                <span className="text-slate-300">{"</"}</span>
                <span className="text-blue-300">div</span>
                <span className="text-slate-300">{">"}</span>
                {"\n    "}
                <span className="text-slate-300">{"</"}</span>
                <span className="text-blue-300">div</span>
                <span className="text-slate-300">{">"}</span>
                {"\n  "}
                <span className="text-slate-300">);</span>
                {"\n"}
                <span className="text-slate-300">{"}"};</span>
                {"\n\n"}
                <span className="text-pink-400">export</span> <span className="text-pink-400">default</span>{" "}
                <span className="text-blue-300">Developer</span>
                <span className="text-slate-300">;</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CodeHero


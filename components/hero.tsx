"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-[#0f172a]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container px-4 mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-foreground">{t("hero", "greeting")} </span>
            <span className="bg-gradient-blue-purple text-transparent bg-clip-text">Karam Belmoujoud</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {t("hero", "title")}
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/80 mb-8">{t("hero", "description")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button className="bg-gradient-blue hover:opacity-90 transition-opacity blue-glow">
              <Link href="#contact">{t("hero", "getInTouch")}</Link>
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            >
              <Link href="#projects">{t("hero", "viewProjects")}</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <motion.a
              href="https://github.com/KaramBelmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/Karam-Belmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:karam_belmo@outlook.com"
              whileHover={{ scale: 1.1 }}
              className="text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          <span className="text-sm mb-2">{t("hero", "scrollDown")}</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero


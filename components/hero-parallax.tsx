"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"

const HeroParallax = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate parallax positions for floating elements
  const calculateParallaxPosition = (depth: number) => {
    if (windowSize.width === 0) return { x: 0, y: 0 }

    const centerX = windowSize.width / 2
    const centerY = windowSize.height / 2

    const offsetX = (mousePosition.x - centerX) / depth
    const offsetY = (mousePosition.y - centerY) / depth

    return { x: offsetX, y: offsetY }
  }

  // Floating elements with different depths
  const floatingElements = [
    { icon: "⚛️", size: "text-4xl", depth: 20, initialPosition: { x: -150, y: -100 } },
    { icon: "🚀", size: "text-3xl", depth: 15, initialPosition: { x: 150, y: -150 } },
    { icon: "💻", size: "text-4xl", depth: 25, initialPosition: { x: -200, y: 100 } },
    { icon: "🔧", size: "text-3xl", depth: 18, initialPosition: { x: 200, y: 120 } },
    { icon: "📊", size: "text-3xl", depth: 22, initialPosition: { x: -120, y: 150 } },
    { icon: "🤖", size: "text-4xl", depth: 17, initialPosition: { x: 180, y: -80 } },
    { icon: "☁️", size: "text-3xl", depth: 30, initialPosition: { x: -180, y: -130 } },
    { icon: "📱", size: "text-3xl", depth: 28, initialPosition: { x: 130, y: 180 } },
  ]

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-[#0f172a]"
    >
      {/* Floating elements */}
      {floatingElements.map((element, index) => {
        const parallaxPosition = calculateParallaxPosition(element.depth)
        return (
          <motion.div
            key={index}
            className={cn("absolute opacity-20 dark:opacity-30 select-none pointer-events-none", element.size)}
            initial={{
              x: element.initialPosition.x,
              y: element.initialPosition.y,
              opacity: 0,
            }}
            animate={{
              x: element.initialPosition.x + parallaxPosition.x,
              y: element.initialPosition.y + parallaxPosition.y,
              opacity: 0.2,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 30,
              opacity: { duration: 1, delay: index * 0.1 },
            }}
          >
            {element.icon}
          </motion.div>
        )
      })}

      {/* Grid pattern background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Main content */}
      <motion.div className="container px-4 mx-auto z-10" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-foreground">{t("hero", "greeting")} </span>
            <motion.span
              className="bg-gradient-blue-purple text-transparent bg-clip-text relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              Karam Belmoujoud
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {t("hero", "title")}
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-foreground/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {t("hero", "description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Button className="bg-gradient-blue hover:opacity-90 transition-opacity blue-glow relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">
                <Link href="#contact">{t("hero", "getInTouch")}</Link>
              </span>
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            >
              <Link href="#projects">{t("hero", "viewProjects")}</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <motion.a
              href="https://github.com/KaramBelmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/Karam-Belmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:karam_belmo@outlook.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm mb-2">{t("hero", "scrollDown")}</span>
          <ArrowDown className="animate-bounce" size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default HeroParallax


"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) {
      return
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseEnter = () => {
      setIsVisible(true)
    }

    const mouseLeave = () => {
      setIsVisible(false)
    }

    const handleLinkHover = () => {
      setCursorVariant("link")
    }

    const handleLinkLeave = () => {
      setCursorVariant("default")
    }

    window.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseenter", mouseEnter)
    document.addEventListener("mouseleave", mouseLeave)

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button, .card, [role="button"]')
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseenter", mouseEnter)
      document.removeEventListener("mouseleave", mouseLeave)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      mixBlendMode: "difference" as const,
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(59, 130, 246, 0.4)",
      mixBlendMode: "difference" as const,
    },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
          variants={variants}
          animate={cursorVariant}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            opacity: { duration: 0.2 },
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500 opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CursorEffect


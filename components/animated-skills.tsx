"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Cloud, Smartphone, PenTool, Laptop, Cpu } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: any
  delay: number
  colorClass?: string
}

const SkillCategory = ({ title, skills, icon: Icon, delay, colorClass = "bg-blue-500" }: SkillCategoryProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
    >
      <Card className="h-full transition-all duration-500 hover:-translate-y-2 border-blue-100 dark:border-blue-900/50 hover:blue-glow">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <motion.div
              className={`mr-3 ${colorClass} bg-opacity-10 dark:bg-opacity-20 p-3 rounded-full`}
              initial={{ scale: 0.8 }}
              animate={inView ? { scale: 1, rotate: [0, 10, 0] } : { scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: delay + 0.2,
                rotate: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              <Icon
                className={`h-6 w-6 ${
                  colorClass === "bg-blue-500"
                    ? "text-blue-500"
                    : colorClass === "bg-purple-500"
                      ? "text-purple-500"
                      : colorClass === "bg-sky-500"
                        ? "text-sky-500"
                        : colorClass === "bg-amber-500"
                          ? "text-amber-500"
                          : "text-blue-500"
                }`}
              />
            </motion.div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="text-foreground/80 flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: delay + 0.1 * index }}
              >
                <motion.div
                  className="w-1 h-1 rounded-full bg-blue-500 mr-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.2, delay: delay + 0.1 * index }}
                />
                {skill}

                {/* Skill progress bar */}
                <div className="ml-auto w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: delay + 0.2 + 0.05 * index }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const AnimatedSkills = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: t("skills", "categories.fullStack"),
      icon: Code,
      skills: ["React.js / Next.js", "Node.js / Spring Boot", "Angular / MongoDB", "Tailwind CSS / PowerApps"],
      colorClass: "bg-blue-500",
    },
    {
      title: t("skills", "categories.devOps"),
      icon: Cloud,
      skills: ["AWS / Docker", "Ansible / CI/CD", "Jenkins / GitHub Actions", "Virtual Machines"],
      colorClass: "bg-sky-500",
    },
    {
      title: t("skills", "categories.mobile"),
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Node.js", "Cross-platform apps"],
      colorClass: "bg-purple-500",
    },
    {
      title: t("skills", "categories.programming"),
      icon: Laptop,
      skills: ["Python", "JavaScript", "C++", "C#"],
      colorClass: "bg-amber-500",
    },
    {
      title: t("skills", "categories.dataEngineering"),
      icon: Database,
      skills: ["SQL / NoSQL", "Data Pipelines", "ETL Processes", "Data Warehousing"],
      colorClass: "bg-purple-500",
    },
    {
      title: t("skills", "categories.aiMl"),
      icon: Cpu,
      skills: ["Predictive Modeling", "Computer Vision", "Machine Learning", "Python AI Libraries"],
      colorClass: "bg-blue-500",
    },
    {
      title: t("skills", "categories.api"),
      icon: Server,
      skills: ["RESTful Services", "Microservices", "API Integration", "API Documentation"],
      colorClass: "bg-sky-500",
    },
    {
      title: t("skills", "categories.design"),
      icon: PenTool,
      skills: ["UI/UX Fundamentals", "3D Animations", "VR/AR Interfaces", "Interactive Design"],
      colorClass: "bg-amber-500",
    },
  ]

  // Particles for background effect
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section id="skills" className="py-20 bg-blue-pattern relative overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500 dark:bg-blue-400 opacity-20 pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("skills", "title")}
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-blue mx-auto mb-8 relative overflow-hidden"
            initial={{ width: 0 }}
            animate={inView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-foreground/80"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t("skills", "description")}
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.1}
              colorClass={category.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedSkills


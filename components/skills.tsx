"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Cloud, Smartphone, PenTool, Laptop, Cpu } from "lucide-react"

const SkillCategory = ({
  title,
  skills,
  icon: Icon,
  delay,
  colorClass = "bg-blue-500",
}: {
  title: string
  skills: string[]
  icon: any
  delay: number
  colorClass?: string
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
    >
      <Card className="h-full transition-transform duration-300 hover:-translate-y-2 border-blue-100 dark:border-blue-900/50 hover:blue-glow">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`mr-3 ${colorClass} bg-opacity-10 dark:bg-opacity-20 p-3 rounded-full`}>
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
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-foreground/80">
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Full Stack",
      icon: Code,
      skills: ["React.js / Next.js", "Node.js / Spring Boot", "Angular / MongoDB", "Tailwind CSS / PowerApps"],
      colorClass: "bg-blue-500",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["AWS / Docker", "Ansible / CI/CD", "Jenkins / GitHub Actions", "Virtual Machines"],
      colorClass: "bg-sky-500",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Node.js", "Cross-platform apps"],
      colorClass: "bg-purple-500",
    },
    {
      title: "Programming",
      icon: Laptop,
      skills: ["Python", "JavaScript", "C++", "C#"],
      colorClass: "bg-amber-500",
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: ["SQL / NoSQL", "Data Pipelines", "ETL Processes", "Data Warehousing"],
      colorClass: "bg-purple-500",
    },
    {
      title: "AI & ML",
      icon: Cpu,
      skills: ["Predictive Modeling", "Computer Vision", "Machine Learning", "Python AI Libraries"],
      colorClass: "bg-blue-500",
    },
    {
      title: "API Development",
      icon: Server,
      skills: ["RESTful Services", "Microservices", "API Integration", "API Documentation"],
      colorClass: "bg-sky-500",
    },
    {
      title: "Design",
      icon: PenTool,
      skills: ["UI/UX Fundamentals", "3D Animations", "VR/AR Interfaces", "Interactive Design"],
      colorClass: "bg-amber-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-blue-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            My technical toolkit spans across multiple domains, enabling me to build comprehensive solutions from
            frontend to backend, cloud deployment, and AI integration.
          </p>
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

export default Skills


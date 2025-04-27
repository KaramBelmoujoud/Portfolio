"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

interface TechItem {
  name: string
  logo: string
  category: string
}

const TechStack = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techStack: TechItem[] = [
    // Frontend
    { name: "React", logo: "/tech/react.svg", category: "Frontend" },
    { name: "Next.js", logo: "/tech/nextjs.svg", category: "Frontend" },
    { name: "TypeScript", logo: "/tech/typescript.svg", category: "Frontend" },
    { name: "Tailwind CSS", logo: "/tech/tailwind.svg", category: "Frontend" },
    { name: "Angular", logo: "/tech/angular.svg", category: "Frontend" },

    // Backend
    { name: "Node.js", logo: "/tech/nodejs.svg", category: "Backend" },
    { name: "Spring Boot", logo: "/tech/spring.svg", category: "Backend" },
    { name: "MongoDB", logo: "/tech/mongodb.svg", category: "Backend" },
    { name: "SQL", logo: "/tech/sql.svg", category: "Backend" },

    // DevOps
    { name: "Docker", logo: "/tech/docker.svg", category: "DevOps" },
    { name: "AWS", logo: "/tech/aws.svg", category: "DevOps" },
    { name: "CI/CD", logo: "/tech/cicd.svg", category: "DevOps" },
    { name: "GitHub Actions", logo: "/tech/github.svg", category: "DevOps" },

    // Other
    { name: "Python", logo: "/tech/python.svg", category: "Languages" },
    { name: "C#", logo: "/tech/csharp.svg", category: "Languages" },
    { name: "C++", logo: "/tech/cpp.svg", category: "Languages" },
    { name: "Flutter", logo: "/tech/flutter.svg", category: "Mobile" },
    { name: "TensorFlow", logo: "/tech/tensorflow.svg", category: "AI/ML" }
  ]

  return (
    <section id="tech-stack" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Tech Stack</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 bg-[#111111] rounded-xl border border-[#222222] hover:border-[#333333] transition-colors"
            >
              <div className="relative w-12 h-12 mb-3">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-slate-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack


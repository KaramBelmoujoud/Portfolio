"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

const education = [
  {
    degree: "MSc in Data engineering for AI",
    institution: "Data ScienceTech Institute",
    location: "Biot, France",
    period: "2024 – Present",
    description:
      "Advanced study of data engineering principles, big data technologies, and AI applications, with a focus on building scalable data pipelines and machine learning systems.",
  },
  {
    degree: "Software Engineering",
    institution: "Ecole Polytechnique d'Agadir",
    location: "Morocco",
    period: "2019 – 2024",
    description:
      "Comprehensive engineering program covering software development fundamentals, algorithm design, database management, and software architecture principles.",
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-blue-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Education</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            My educational background has provided me with a strong foundation in both software engineering and
            specialized data science knowledge.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8"
            >
              <Card className="overflow-hidden border-blue-100 dark:border-blue-900/50 hover:blue-glow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">{item.degree}</h3>
                  </div>

                  <div className="flex flex-wrap items-center mb-4 text-foreground/70">
                    <span className="text-lg mr-4">{item.institution}</span>
                    <div className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education


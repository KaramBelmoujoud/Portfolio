"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useRef } from "react"

interface Experience {
  title: string
  company: string
  type: string
  period: string
  location: string
  responsibilities: string[]
  skills?: string[]
}

const experiences: Experience[] = [
  {
    title: "Full Stack Engineer / Software Developer",
    company: "Liebert Industries",
    type: "Freelance",
    period: "Nov 2024 – Feb 2025",
    location: "Morocco · Remote",
    responsibilities: [
      "Developed dashboards and IoT solutions to visualize sensor data, enabling real-time monitoring and predictive maintenance.",
      "Built commercial websites for industrial companies, enhancing their digital presence and engagement.",
      "Implemented CI/CD pipelines with GitHub Actions, Azure VMs, and Docker, ensuring efficient deployments.",
      "Streamlined development and deployment through containerized environments and automated workflows.",
      "Collaborated with teams to deliver scalable, high-performance digital transformation solutions.",
    ],
    skills: [
      "DevOps",
      "Node.js",
      "API Development",
      "Test Automation",
      "Web Development",
      "Engineering Data Management",
      "Grafana",
      "Microsoft Azure",
      "Node-RED",
      "Next.js",
      "Docker",
    ],
  },
  {
    title: "Virtual Reality Development Intern",
    company: "Capgemini Engineering",
    type: "Internship",
    period: "Feb 2024 – Aug 2024",
    location: "Morocco · On-site",
    responsibilities: [
      "Developed a Virtual Reality (VR) application for mechanical designers, enabling immersive 3D object creation and modification in a virtual environment.",
      "Implemented interactive design tools within the VR application, allowing users to create, edit, and manipulate 3D models intuitively.",
      "Utilized C# programming to develop core functionalities, ensuring smooth and responsive user experiences.",
    ],
    skills: ["Programming", "Unity 3D", "C#"],
  },
  {
    title: "Mixed-Reality Developer Intern",
    company: "DITEX (Digital Industry Tools EXperts)",
    type: "Internship",
    period: "Jul 2023 – Nov 2023",
    location: "France · Remote",
    responsibilities: [
      "Developed an Augmented Reality (AR) application for machine maintenance, providing interactive step-by-step animations for efficient troubleshooting and operation guidance.",
      "Designed and implemented AR solutions using HoloLens 2, enabling hands-free access to detailed maintenance procedures.",
      "Created interactive 3D animations tailored to each machine, ensuring proper functionality and minimizing maintenance errors.",
    ],
    skills: [
      "Mixed Reality",
      "C#",
      "Programming",
      "Unity 3D",
      "Augmented Reality (AR)",
      "Microsoft HoloLens",
      "Python",
    ],
  },
  {
    title: "Manager",
    company: "FABLAB Universiapolis",
    type: "Part-time",
    period: "Jul 2021 – Jul 2023",
    location: "Morocco · On-site",
    responsibilities: [
      "Managed day-to-day operations of the university's fabrication laboratory.",
      "Coordinated projects and resources for students and faculty members.",
      "Provided technical guidance and support for various digital fabrication projects.",
    ],
    skills: ["Software Development", "Web Development", "Communication", "Augmented Reality (AR)", "Leadership"],
  },
  {
    title: "Augmented Reality Development Intern",
    company: "FABLAB Universiapolis",
    type: "Internship",
    period: "Jan 2022 – Sep 2022",
    location: "Morocco",
    responsibilities: [
      "Worked on creating an augmented reality application with an integrated IoT function to control a CNC machine.",
      "Developed a UI command interface that could remotely send communication packets using a specific protocol to the machine processor.",
      "Established minimum functionalities for remote machine control and monitoring.",
    ],
    skills: [
      "C#",
      "Python",
      "Unity 3D",
      "Assembly Language",
      "Programming",
      "Reverse Engineering",
      "Augmented Reality (AR)",
      "Git",
    ],
  },
]

const ExperienceTimeline = () => {
  const { t } = useLanguage()
  const containerRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="experience" className="py-20 bg-[#161b22] relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-slate-400 text-sm font-mono">// Professional Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">My Career Path</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            A timeline of my professional journey and the skills I've developed along the way.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => {
            // const [ref, inView] = useInView({
            //   triggerOnce: true,
            //   threshold: 0.2,
            // })

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="absolute left-[28px] top-[72px] bottom-[-40px] w-0.5 bg-[#30363d] z-0"
                    initial={{ height: 0 }}
                    animate={{ height: "calc(100% - 32px)" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                      }}
                      className="w-14 h-14 rounded-full bg-[#0d1117] flex items-center justify-center shrink-0 border-2 border-emerald-500"
                    >
                      <Briefcase className="h-6 w-6 text-emerald-400" />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden hover:border-emerald-400/50 transition-colors duration-300">
                      <div className="p-6">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <motion.h3
                              className="text-xl font-bold text-emerald-400 mb-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {experience.title}
                            </motion.h3>
                            <motion.p
                              className="text-lg text-slate-200"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              {experience.company} <span className="text-slate-400">• {experience.type}</span>
                            </motion.p>
                          </div>
                          <motion.div
                            className="flex items-center mt-2 md:mt-0 text-slate-400 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                          >
                            <Calendar className="h-4 w-4 mr-1 text-emerald-400" />
                            <span>{experience.period}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 mr-1 text-emerald-400" />
                            <span>{experience.location}</span>
                          </motion.div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {experience.responsibilities.map((responsibility, i) => (
                            <motion.li
                              key={i}
                              className="flex text-slate-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                            >
                              <span className="text-emerald-400 mr-2">•</span>
                              <span>{responsibility}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {experience.skills && (
                          <motion.div
                            className="flex flex-wrap gap-1.5 mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                          >
                            {experience.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs border-[#30363d] text-slate-300 bg-[#161b22]"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline


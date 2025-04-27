"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BadgeCheck, Calendar, MapPin, Briefcase } from "lucide-react"
import { useLanguage } from "@/context/language-context"

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
      "Designed and developed intuitive UI dashboards to maintain and follow up the production status.",
      "Retrieved and processed data directly from industrial sensors for accurate and reliable insights.",
      "Developed and implemented efficient readers to interpret sensor data.",
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
      "Designed and built VR environments using Unity, providing realistic and user-friendly virtual workspaces for mechanical designers.",
      "Integrated advanced interaction mechanisms to facilitate precise modifications of 3D objects within the VR application.",
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
  {
    title: "Augmented Reality Development Intern",
    company: "FABLAB Universiapolis",
    type: "Internship",
    period: "Jun 2021 – Dec 2021",
    location: "Morocco",
    responsibilities: [
      "Worked on developing an augmented reality application for mobile for anatomy application studies.",
      "Created interactive 3D models for educational purposes.",
      "Implemented user-friendly interfaces for students to interact with anatomical models.",
    ],
    skills: ["C#", "Python", "Unity 3D", "Programming", "Digital Games", "Mobile Devices", "Augmented Reality (AR)"],
  },
]

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-20, 0, 0, -20])

  return (
    <motion.div ref={cardRef} style={{ opacity, scale, x }} className="mb-12 relative">
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <motion.div
          className="absolute left-[28px] top-[72px] bottom-[-40px] w-0.5 bg-blue-200 dark:bg-blue-800 z-0"
          initial={{ height: 0 }}
          animate={inView ? { height: "calc(100% - 32px)" } : { height: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="relative z-10">
          <motion.div
            ref={ref}
            initial={{ scale: 0, rotate: -90 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0 border-2 border-blue-300 dark:border-blue-700"
          >
            <Briefcase className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </motion.div>
        </div>

        <div className="flex-1">
          <Card className="overflow-hidden border-l-4 border-l-blue-500 border-blue-100 dark:border-blue-900/50 hover:blue-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <motion.h3
                    className="text-xl font-bold text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {experience.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-foreground/90"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {experience.company} • <span className="text-foreground/70">{experience.type}</span>
                  </motion.p>
                </div>
                <motion.div
                  className="flex items-center mt-2 md:mt-0 text-foreground/70"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                  <span className="text-sm">{experience.period}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                  <span className="text-sm">{experience.location}</span>
                </motion.div>
              </div>

              <ul className="space-y-2 mb-4">
                {experience.responsibilities.map((responsibility, i) => (
                  <motion.li
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <BadgeCheck className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>

              {experience.skills && (
                <motion.div
                  className="flex flex-wrap gap-1.5 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {experience.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

const AnimatedTimeline = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0f172a] relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          y: useTransform(scrollYProgress, [0, 1], [100, -100]),
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            {t("experience", "title")}
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-blue mx-auto mb-8 relative overflow-hidden"
            initial={{ width: 0 }}
            animate={inView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            />
          </motion.div>
          <p className="max-w-2xl mx-auto text-foreground/80">{t("experience", "description")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedTimeline


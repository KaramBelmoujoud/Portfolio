"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Hand, Activity, Award, ExternalLink, Linkedin, Server, Github, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const InteractiveProjects = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Multi-Client TCP/UDP Communication Server",
      description:
        "A network package providing client-server communication system using TCP and UDP with SSL/TLS security certification.",
      details: [
        "Developed a Python-based communication system that enables TCP/UDP connections between multiple machines in the same network without IP identification.",
        "Implemented SSL/TLS security certification for secure data transmission between clients and server.",
        "Created a flexible architecture supporting multiple simultaneous client connections with efficient message routing.",
        "Published the package with proper documentation and installation instructions for easy deployment.",
      ],
      icon: Server,
      tags: ["Python", "Networking", "TCP/IP", "UDP", "Security", "SSL/TLS"],
      link: {
        url: "https://github.com/KaramBelmoujoud/Multi-Client-TCP-UDP-Communication-Server-in-Python",
        text: t("projects", "viewOnGithub"),
        icon: Github,
      },
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "HackandPitch Hackathon Winner | Universiapolis",
      description:
        "First place winner at the Universiapolis Hackathon with an innovative diabetes management solution.",
      details: [
        "Developed an innovative solution harmonizing CGM (Continuous Glucose Monitoring) and insulin pump integration for diabetes management.",
        "Built an AI model capable of predicting hypoglycemia and hyperglycemia events, enabling proactive patient care.",
        "Awarded a 10,000 DH check from Akkodis Maroc and a 30,000 DH incubation package from LaStartupStation.",
        "Collaborated with an exceptional team to reshape diabetes management through groundbreaking innovation.",
      ],
      icon: Award,
      tags: ["AI", "Healthcare", "Hackathon", "Innovation"],
      link: {
        url: "https://www.linkedin.com/posts/universiapolisuniversiteinternationaledagadir_apr%C3%A8s-des-jours-intenses-de-collaboration-activity-7147995036725522432-eW08",
        text: t("projects", "viewLinkedInPost"),
        icon: Linkedin,
      },
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Webmaster | Rotaract District 9010",
      description: "Developed and maintain the Rotaract District website and internal tools.",
      details: [
        "Developed a custom CRM dashboard to manage club data and dynamically control content.",
        "Implemented an automated event ticketing system with real-time validation and email notifications.",
      ],
      icon: Globe,
      tags: ["Next.js", "CRM", "Dashboard", "Automation"],
      link: {
        url: "https://www.rotaractdistrict9010.com/",
        text: t("projects", "visitWebsite"),
        icon: ExternalLink,
      },
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "AI Prediction Model | DSTI",
      description: "AI-driven predictive model for diabetes outcomes using machine learning.",
      details: [
        "Engineered an AI-driven predictive model for diabetes outcomes using advanced machine learning techniques.",
        "Led data preprocessing, feature engineering, and model optimization for enhanced accuracy.",
        "Built a user-friendly web interface for real-time predictions.",
      ],
      icon: Activity,
      tags: ["AI", "Machine Learning", "Python", "Healthcare", "Next.js"],
      link: {
        url: "https://github.com/DSTI-MLPR/WebPage",
        text: t("projects", "viewOnGithub"),
        icon: Github,
      },
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Software Developer | FEECRA",
      description: "Hand gesture recognition software for PowerPoint control.",
      details: [
        "Developed a Python-based desktop software for hand gesture control using computer vision.",
        "Integrated AI models for seamless PowerPoint control through gesture recognition.",
        "Designed a custom network protocol for real-time data transmission between a laptop and a Raspberry Pi module.",
      ],
      icon: Hand,
      tags: ["Python", "Computer Vision", "AI", "Raspberry Pi"],
      link: {
        url: "https://www.linkedin.com/posts/oussama-boussaid_feecraexpo-gtech-done-activity-7064249973005017089-xGbS",
        text: t("projects", "viewLinkedInPost"),
        icon: Linkedin,
      },
      color: "from-blue-600 to-indigo-500",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"
          style={{ top: "10%", left: "5%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"
          style={{ bottom: "10%", right: "5%" }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            {t("projects", "title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">{t("projects", "description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <Card
                className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group"
                onClick={() => setSelectedProject(index)}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card content */}
                <CardHeader className="pb-2 relative">
                  <div
                    className={`bg-gradient-to-r ${project.color} p-2 rounded-full w-fit mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {React.createElement(project.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">{t("projects", "projectDetails")}</h4>
                    <ul className="space-y-2">
                      {project.details.slice(0, 2).map((detail, i) => (
                        <li key={i} className="text-foreground/80 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="w-full bg-gradient-to-r from-transparent to-transparent hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.link.url, "_blank")
                        }}
                      >
                        {React.createElement(project.link.icon, { className: "mr-2 h-4 w-4" })}
                        {project.link.text}
                      </Button>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="mb-6 flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${projects[selectedProject]?.color} p-3 rounded-full`}>
                    {projects[selectedProject]?.icon &&
                      React.createElement(projects[selectedProject].icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-foreground/80">{projects[selectedProject].description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">{t("projects", "projectDetails")}</h4>
                  <ul className="space-y-3">
                    {projects[selectedProject].details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="text-foreground/80 flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="text-primary mr-2 text-lg">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].tags.map((tag, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {projects[selectedProject].link && (
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    onClick={() => window.open(projects[selectedProject].link.url, "_blank")}
                  >
                    {React.createElement(projects[selectedProject].link.icon, { className: "mr-2 h-4 w-4" })}
                    {projects[selectedProject].link.text}
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveProjects


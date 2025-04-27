"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Hand, Activity, Award, ExternalLink, Linkedin, Server, Github } from "lucide-react"

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
      text: "View on GitHub",
      icon: Github,
    },
  },
  {
    title: "HackandPitch Hackathon Winner | Universiapolis",
    description: "First place winner at the Universiapolis Hackathon with an innovative diabetes management solution.",
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
      text: "View LinkedIn Post",
      icon: Linkedin,
    },
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
      text: "Visit Website",
      icon: ExternalLink,
    },
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
      text: "View on GitHub",
      icon: Github,
    },
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
      text: "View LinkedIn Post",
      icon: Linkedin,
    },
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            I've worked on a variety of projects that showcase my skills in software development, AI integration, and
            innovative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 p-2 rounded-full w-fit mb-4">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">Project Details:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
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
                        className="w-full"
                        onClick={() => window.open(project.link.url, "_blank")}
                      >
                        <project.link.icon className="mr-2 h-4 w-4" />
                        {project.link.text}
                      </Button>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


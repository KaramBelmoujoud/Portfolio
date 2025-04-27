"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certificate {
  name: string
  issuer: string
  date: string
  status: "Completed" | "In Progress"
  credentialId?: string
  url?: string
  skills?: string[]
}

const certificates: Certificate[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Expected 2025",
    status: "In Progress",
  },
  {
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Jan 2025",
    status: "Completed",
    credentialId: "a2806336-d8ca-469e-82b3-f2c0abd68d8e",
    url: "https://graphacademy.neo4j.com/c/a2806336-d8ca-469e-82b3-f2c0abd68d8e/",
  },
  {
    name: "React 18 Course 2024 - Learn React JS the fast way",
    issuer: "Udemy",
    date: "Jul 2024",
    status: "Completed",
    credentialId: "UC-d7237021-baf6-4601-8daa-cefe0abbab5e",
    url: "https://www.udemy.com/certificate/UC-d7237021-baf6-4601-8daa-cefe0abbab5e/",
    skills: ["RESTful WebServices", "JavaScript", "React.js", "API Development"],
  },
  {
    name: "Unity C# Scripting : Complete C# For Unity Game Development",
    issuer: "Udemy",
    date: "Jul 2024",
    status: "Completed",
    credentialId: "UC-77793946-c74b-4178-a6f0-3826b21f8420",
    url: "https://www.udemy.com/certificate/UC-77793946-c74b-4178-a6f0-3826b21f8420/",
    skills: ["AI", "Mobile Applications", "Version Control", "API", "C#", "Unity 3D"],
  },
  {
    name: "Multiplayer Virtual Reality (VR) Development With Unity",
    issuer: "Udemy",
    date: "May 2024",
    status: "Completed",
    credentialId: "UC-3c9b2eb3-03be-4d5b-9a64-e97c822041b9",
    url: "https://www.udemy.com/certificate/UC-3c9b2eb3-03be-4d5b-9a64-e97c822041b9/",
    skills: ["Photon", "Multiplayer VR", "Virtual Reality Development"],
  },
  {
    name: "Spring MVC, Spring Boot and Rest Controllers",
    issuer: "LearnQuest",
    date: "Jan 2024",
    status: "Completed",
    credentialId: "4J6K96DGH4EB",
    url: "https://www.coursera.org/account/accomplishments/verify/4J6K96DGH4EB",
  },
  {
    name: "Starting GUI Programming with JavaFX",
    issuer: "Coursera Course Certificates",
    date: "Jan 2024",
    status: "Completed",
    credentialId: "GQGS9BHHCAGS",
  },
  {
    name: "EFSET English Certificate (C2 Proficient)",
    issuer: "EF SET",
    date: "Oct 2023",
    status: "Completed",
    skills: ["English"],
  },
  {
    name: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM",
    date: "Jun 2023",
    status: "Completed",
    credentialId: "PJDTNA6CFVR3",
  },
  {
    name: "Securing Cisco Switches with Port Security",
    issuer: "Coursera Project Network",
    date: "Jun 2023",
    status: "Completed",
    credentialId: "DMQUXSN4A5ZL",
  },
  {
    name: "Spring Boot Inversion of Control and Dependency Injection",
    issuer: "Coursera Project Network",
    date: "Jun 2023",
    status: "Completed",
    credentialId: "6TJEVMAD9CRL",
  },
  {
    name: "Build a Website using React",
    issuer: "Coursera Project Network",
    date: "Jan 2023",
    status: "Completed",
    credentialId: "SAZMVJSSNNEN",
  },
  {
    name: "Introduction to Cyber Security Learning Path",
    issuer: "TryHackMe",
    date: "2023",
    status: "Completed",
  },
  {
    name: "Pre-Security Learning Path",
    issuer: "TryHackMe",
    date: "2023",
    status: "Completed",
  },
]

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            I continuously enhance my skills through specialized certifications in various technical domains.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{certificate.name}</h3>
                      <div className="flex items-center text-foreground/70 text-sm mb-2">
                        <span className="mr-2">{certificate.issuer}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{certificate.date}</span>
                      </div>

                      <div className="mt-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            certificate.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          }`}
                        >
                          {certificate.status}
                        </span>
                      </div>

                      {certificate.credentialId && (
                        <div className="mt-2 text-xs text-foreground/60">
                          <span className="font-medium">Credential ID:</span> {certificate.credentialId}
                        </div>
                      )}

                      {certificate.skills && certificate.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {certificate.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {certificate.url && (
                        <div className="mt-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-primary hover:text-primary/80"
                            onClick={() => window.open(certificate.url, "_blank")}
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            <span className="text-xs">View Certificate</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates


"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, MapPin } from "lucide-react"

interface VolunteerRole {
  title: string
  organization: string
  period: string
  location?: string
  description?: string
  responsibilities?: string[]
  category: string
}

const volunteerRoles: VolunteerRole[] = [
  {
    title: "Webmaster",
    organization: "Rotaract District 9010",
    period: "Jul 2024 - Present",
    location: "Remote",
    description:
      "As the Webmaster for Rotaract District 9010, I oversee the digital presence of the organization, including website management, online event coordination, and digital communication strategies.",
    responsibilities: [
      "Maintaining and updating the district website with the latest information and resources",
      "Developing digital tools to streamline operations for clubs across the district",
      "Implementing event registration systems and online payment gateways",
      "Providing technical support to club-level webmasters and social media managers",
      "Creating digital content to promote Rotaract initiatives and activities",
    ],
    category: "Social Services",
  },
  {
    title: "Representative",
    organization: "Rotaract Agadir Atlantique",
    period: "Jul 2024 - Present",
    category: "Social Services",
  },
  {
    title: "Counselor",
    organization: "Rotaract Universiapolis",
    period: "Aug 2023 - Present",
    category: "Social Services",
  },
  {
    title: "Treasurer",
    organization: "Rotaract Agadir Atlantique",
    period: "Mar 2022 - Jun 2024",
    category: "Civil Rights and Social Action",
  },
]

const VolunteeringWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="volunteering" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteering Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            My involvement with community organizations and volunteer initiatives.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {volunteerRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={index === 0 ? "border-primary/20" : ""}>
                <CardContent className="p-6 flex flex-col md:flex-row items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full shrink-0 mb-4 md:mb-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {role.title}, {role.organization}
                    </h3>
                    <div className="flex flex-wrap items-center text-foreground/70 mb-4 gap-y-1">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{role.period}</span>
                      </div>
                      {role.location && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{role.location}</span>
                        </div>
                      )}
                      <div className="w-full mt-1">
                        <span className="text-sm bg-primary/10 px-2 py-0.5 rounded-full text-primary/80">
                          {role.category}
                        </span>
                      </div>
                    </div>

                    {role.description && <p className="text-foreground/80 mb-4">{role.description}</p>}

                    {role.responsibilities && (
                      <div>
                        <h4 className="font-semibold mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80">
                          {role.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default VolunteeringWork


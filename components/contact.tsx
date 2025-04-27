"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const ContactInfo = ({ icon: Icon, title, value, href, colorClass = "bg-blue-100" }: any) => (
  <div className="flex items-start">
    <div className={`${colorClass} dark:bg-opacity-20 p-2 rounded-full mr-3 shrink-0`}>
      <Icon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      {href ? (
        <a href={href} className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-foreground/70">{value}</p>
      )}
    </div>
  </div>
)

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-[#0f172a] dark:to-blue-950/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            I'm interested in freelance opportunities, collaborations, and innovative projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="border-blue-100 dark:border-blue-900/50 hover:blue-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-blue-700 dark:text-blue-300">Contact Information</h3>

                  <div className="space-y-6">
                    <ContactInfo
                      icon={Mail}
                      title="Email"
                      value="karam_belmo@outlook.com"
                      href="mailto:karam_belmo@outlook.com"
                      colorClass="bg-blue-100"
                    />
                    <ContactInfo
                      icon={Phone}
                      title="Phone"
                      value="+33 6 99 86 53 76"
                      href="tel:+33699865376"
                      colorClass="bg-blue-100"
                    />
                    <ContactInfo icon={MapPin} title="Location" value="Biot, France" colorClass="bg-blue-100" />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Languages</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium">French</p>
                        <p className="text-foreground/70 text-sm">Professional Proficiency</p>
                      </div>
                      <div>
                        <p className="font-medium">English</p>
                        <p className="text-foreground/70 text-sm">Fluent (EF C2 Certificate)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card className="border-blue-100 dark:border-blue-900/50 hover:blue-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-blue-700 dark:text-blue-300">Send me a message</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                        className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-blue hover:opacity-90 transition-opacity blue-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


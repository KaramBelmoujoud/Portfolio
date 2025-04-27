"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, Loader2, Github, Linkedin, Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const ContactForm = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: false,
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Show success message
      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#161b22]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-slate-400 text-sm font-mono">// Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-[#30363d] pb-2">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#161b22] p-2 rounded-full mr-3 shrink-0">
                        <Mail className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-200">Email</h4>
                        <a
                          href="mailto:karam_belmo@outlook.com"
                          className="text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                          karam_belmo@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#161b22] p-2 rounded-full mr-3 shrink-0">
                        <Phone className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-200">Phone</h4>
                        <a href="tel:+33699865376" className="text-slate-400 hover:text-emerald-400 transition-colors">
                          +33 6 99 86 53 76
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#161b22] p-2 rounded-full mr-3 shrink-0">
                        <MapPin className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-200">Location</h4>
                        <p className="text-slate-400">France</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-emerald-400 border-b border-[#30363d] pb-2">Connect</h3>
                    <div className="flex items-center gap-4 mt-4">
                      <a
                        href="https://github.com/KaramBelmoujoud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#161b22] p-2 rounded-full text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/Karam-Belmoujoud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#161b22] p-2 rounded-full text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://karambelmoujoud.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#161b22] p-2 rounded-full text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-[#30363d] pb-2">
                    Send Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-[#161b22] border-[#30363d] text-slate-200 focus:border-emerald-400 focus:ring-emerald-400/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">
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
                          className="bg-[#161b22] border-[#30363d] text-slate-200 focus:border-emerald-400 focus:ring-emerald-400/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="bg-[#161b22] border-[#30363d] text-slate-200 focus:border-emerald-400 focus:ring-emerald-400/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">
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
                        className="bg-[#161b22] border-[#30363d] text-slate-200 focus:border-emerald-400 focus:ring-emerald-400/10"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
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
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm


"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Hand, Activity, Award, ExternalLink, Linkedin, Server, Github, X, Code, FolderGit2,  } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const ProjectsShowcase = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

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
      category: "backend",
      links: [
        {
          url: "https://github.com/KaramBelmoujoud/Multi-Client-TCP-UDP-Communication-Server-in-Python",
          text: t("projects", "viewOnGithub"),
          icon: Github,
        },
        {
          url: "https://pypi.org/project/network-com/",
          text: t("projects", "viewOnPypl"),
          icon: Code,
        }
      ],
      color: "from-blue-500 to-cyan-400",
      codeSnippet: `
# Server setup code
from network_com import server
import threading
import os

def start_server():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    udp_thread = threading.Thread(target=server.send_ip)
    tcp_thread = threading.Thread(target=server.tcp_server, args=(os.path.join(script_dir, 'server.crt'), os.path.join(script_dir, 'server.key')))
    udp_thread.start()
    tcp_thread.start()
    udp_thread.join()
    tcp_thread.join()

if __name__ == "__main__":
    start_server()
      `,
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
      tags: ["AI", "Healthcare", "Hackathon", "Innovation", "Mobile App", "Flutter"],
      category: "ai",
      links: [
        {
          url: "https://www.linkedin.com/posts/universiapolisuniversiteinternationaledagadir_apr%C3%A8s-des-jours-intenses-de-collaboration-ugcPost-7147995035051974656-Ol7d",
          text: t("projects", "viewLinkedInPost"),
          icon: Linkedin,
        },
        {
          url: "https://github.com/Pancrease/D-one",
          text: t("projects", "viewOnGithub"),
          icon: Github,
        }
      ],
      color: "from-purple-500 to-pink-500",
      codeSnippet: `
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_1/screens/loginpage.dart';
import 'package:flutter_application_1/screens/Onboarding.dart';
import 'package:flutter_application_1/screens/add_menu.dart';
import 'package:flutter_application_1/screens/location.dart';
import 'package:flutter_application_1/screens/menu.dart';
import 'package:flutter_application_1/screens/phone.dart';
import 'package:flutter_application_1/screens/succes.dart';
import 'package:flutter_application_1/screens/verify.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
      // options: DefaultFirebaseOptions.currentPlatform,
      );
  SharedPreferences prefs = await SharedPreferences.getInstance();
  bool? seen = prefs.getBool('seen');
  Widget screen;
  if (seen == null || seen == false) {
    screen = const Onboarding();
  } else {
    screen = const LoginPage();
  }

  runApp(MyApp(screen));
}

class MyApp extends StatelessWidget {
  final Widget _screen;

  const MyApp(this._screen, {super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        routes: {
          "menu": (context) => const Menu(),
          "add": (context) => const Add(),
          "login": (context) => const LoginPage(),
          'phone': (context) => const MyPhone(),
          'verify': (context) => const MyVerify(),
          'location': (context) => const MyLocation(),
          'succes': (context) => const MySucces(),
        },
        debugShowCheckedModeBanner: false,
        title: 'D-one',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),

        home: _screen);
  }
}
      `,
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
      category: "frontend",
      link: {
        url: "https://www.rotaractdistrict9010.com/",
        text: t("projects", "visitWebsite"),
        icon: ExternalLink,
      },
      color: "from-green-500 to-emerald-400",
      codeSnippet: `
// Event ticketing system
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateQRCode, sendConfirmationEmail } from '@/lib/utils';

export default function TicketRegistration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  
  async function onSubmit(data) {
    setIsSubmitting(true);
    
    try {
      // Generate unique ticket ID
      const ticketId = await generateUniqueId();
      
      // Create QR code with ticket data
      const qrCode = await generateQRCode({
        ticketId,
        name: data.name,
        email: data.email,
        eventId: data.eventId
      });
      
      // Save to database
      await saveTicket({
        ...data,
        ticketId,
        qrCode
      });
      
      // Send confirmation email
      await sendConfirmationEmail(data.email, {
        name: data.name,
        eventName: data.eventName,
        ticketId,
        qrCode
      });
      
      setTicketGenerated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  
  // Component JSX...
}
      `,
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
      category: "ai",
      links: [{
        url: "https://github.com/DSTI-MLPR/ML-Project",
        text: t("projects", "viewOnGithub"),
        icon: Github,},]
      ,
      color: "from-amber-500 to-orange-400",
      codeSnippet: `
# Feature engineering and model training
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Load and preprocess data
df = pd.read_csv('diabetes_data.csv')

# Feature engineering
df['glucose_to_insulin_ratio'] = df['Glucose'] / df['Insulin'].replace(0, 0.1)
df['bmi_age_factor'] = df['BMI'] * df['Age'] / 100

# Split data
X = df.drop('Outcome', axis=1)
y = df['Outcome']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))
      `,
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
      category: "ai",
      links: [{
        url: "https://www.linkedin.com/posts/oussama-boussaid_feecraexpo-gtech-done-activity-7064249973005017089-xGbS",
        text: t("projects", "viewLinkedInPost"),
        icon: Linkedin,
      },
      {
        url: "https://github.com/Ficraa/desktopappgtech",
        text: t("projects", "viewOnGithub"),
        icon: Github,
      },
    ],
      color: "from-blue-600 to-indigo-500",
      codeSnippet: `
# Hand gesture recognition with MediaPipe
import cv2
import mediapipe as mp
import numpy as np
from pptx_controller import PPTXController

class GestureRecognizer:
    def __init__(self):
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=1,
            min_detection_confidence=0.7,
            min_tracking_confidence=0.7
        )
        self.mp_drawing = mp.solutions.drawing_utils
        self.pptx_controller = PPTXController()
        
    def recognize_gesture(self, hand_landmarks):
        # Calculate finger positions and angles
        thumb_tip = np.array([hand_landmarks.landmark[4].x, hand_landmarks.landmark[4].y])
        index_tip = np.array([hand_landmarks.landmark[8].x, hand_landmarks.landmark[8].y])
        
        # Detect swipe gestures
        if self.is_swipe_left(hand_landmarks):
            self.pptx_controller.next_slide()
        elif self.is_swipe_right(hand_landmarks):
            self.pptx_controller.previous_slide()
        
        # More gesture detection logic...
      `,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "ai", name: "AI/ML" },
  ]

  return (
    <section id="projects" className="py-32 bg-[#0d1117] relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-slate-400 text-sm font-mono">// Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">My Code Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            A showcase of my technical projects, from backend systems to AI solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`
                ${
                  activeFilter === filter.id
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white border-none"
                    : "border-[#30363d] text-slate-300 hover:text-emerald-400 hover:border-emerald-400"
                }
              `}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <Card
                className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group bg-[#161b22] border-[#30363d] hover:border-emerald-400/50"
                onClick={() => setSelectedProject(index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`bg-gradient-to-r ${project.color} p-2 rounded-full w-fit transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {React.createElement(project.icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <FolderGit2 className="h-5 w-5 text-slate-500" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-[#30363d] text-slate-300 bg-[#0d1117]/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs border-[#30363d] text-slate-300 bg-[#0d1117]/50">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(index)
                      }}
                    >
                      <Code className="h-4 w-4 mr-1" /> View Details
                    </Button>

                    <div className="flex gap-2">
                      {project.links?.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-slate-300 p-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(link.url, "_blank")
                          }}
                        >
                          {React.createElement(link.icon, { className: "h-4 w-4" })}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
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
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="bg-[#161b22] rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-[#30363d] transform-gpu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${projects[selectedProject]?.color} p-3 rounded-full`}>
                      {projects[selectedProject]?.icon &&
                        React.createElement(projects[selectedProject].icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2">{projects[selectedProject].title}</h3>
                      <p className="text-slate-300">{projects[selectedProject].description}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-400 hover:text-slate-300 hover:bg-slate-700/20"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    {projects[selectedProject].links && projects[selectedProject].links.length > 0 && (
                      <div className="flex gap-2 mb-6">
                        {projects[selectedProject].links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            onClick={() => window.open(link.url, "_blank")}
                          >
                            {React.createElement(link.icon, { className: "mr-2 h-4 w-4" })}
                            {link.text}
                          </Button>
                        ))}
                      </div>
                    )}

                    <h4 className="font-semibold text-lg mb-3 text-slate-200 border-b border-[#30363d] pb-2">
                      Project Details
                    </h4>
                    <ul className="space-y-3">
                      {projects[selectedProject].details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="text-slate-300 flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <span className="text-emerald-400 mr-2 text-lg">•</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {projects[selectedProject].tags.map((tag, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                        >
                          <Badge variant="outline" className="border-[#30363d] text-slate-300">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-slate-200 border-b border-[#30363d] pb-2">
                      Code Snippet
                    </h4>
                    <div className="bg-[#0d1117] rounded-lg p-4 overflow-x-auto text-sm font-mono">
                      <pre className="text-slate-300">
                        <code>{projects[selectedProject].codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsShowcase


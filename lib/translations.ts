export type Language = "en" | "fr"

export type Translations = {
  [key in Language]: {
    navbar: {
      about: string
      skills: string
      experience: string
      projects: string
      education: string
      contact: string
      language: string
    }
    hero: {
      greeting: string
      title: string
      description: string
      getInTouch: string
      viewProjects: string
      scrollDown: string
    }
    about: {
      title: string
      paragraph1: string
      paragraph2: string
    }
    skills: {
      title: string
      description: string
      categories: {
        fullStack: string
        devOps: string
        mobile: string
        programming: string
        dataEngineering: string
        aiMl: string
        api: string
        design: string
      }
    }
    experience: {
      title: string
      description: string
      projectDetails: string
      responsibilities: string
    }
    education: {
      title: string
      description: string
    }
    projects: {
      title: string
      description: string
      projectDetails: string
      viewOnGithub: string
      viewLinkedInPost: string
      visitWebsite: string
    }
    certificates: {
      title: string
      description: string
      status: {
        completed: string
        inProgress: string
      }
      credentialId: string
      viewCertificate: string
    }
    awards: {
      title: string
      description: string
    }
    volunteering: {
      title: string
      description: string
      responsibilities: string
    }
    contact: {
      title: string
      description: string
      contactInfo: string
      languages: string
      sendMessage: string
      name: string
      email: string
      subject: string
      message: string
      sending: string
      send: string
      messageSent: string
      messageSentDesc: string
    }
    footer: {
      rights: string
    }
  }
}

export const translations: Translations = {
  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      language: "Français",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Software & Data Engineer",
      description:
        "Passionate about developing innovative applications, optimizing workflows, and integrating modern technologies like AI-driven solutions and DevOps.",
      getInTouch: "Get in Touch",
      viewProjects: "View Projects",
      scrollDown: "Scroll Down",
    },
    about: {
      title: "About Me",
      paragraph1:
        "Passionate and versatile Software & Data Engineer seeking an alternance opportunity to apply my expertise in Full Stack Development, AI-driven solutions, and DevOps. Skilled in developing innovative applications, optimizing workflows, and integrating modern technologies.",
      paragraph2:
        "Eager to contribute to a dynamic team while enhancing my technical and problem-solving abilities in a professional setting. I'm particularly interested in the intersection of software engineering and artificial intelligence, with a focus on creating practical, impactful solutions.",
    },
    skills: {
      title: "Technical Skills",
      description:
        "My technical toolkit spans across multiple domains, enabling me to build comprehensive solutions from frontend to backend, cloud deployment, and AI integration.",
      categories: {
        fullStack: "Full Stack",
        devOps: "DevOps & Cloud",
        mobile: "Mobile Development",
        programming: "Programming",
        dataEngineering: "Data Engineering",
        aiMl: "AI & ML",
        api: "API Development",
        design: "Design",
      },
    },
    experience: {
      title: "Professional Experience",
      description:
        "My professional journey has equipped me with practical experience in cutting-edge technologies and collaborative development environments.",
      projectDetails: "Project Details",
      responsibilities: "Responsibilities",
    },
    education: {
      title: "Education",
      description:
        "My educational background has provided me with a strong foundation in both software engineering and specialized data science knowledge.",
    },
    projects: {
      title: "My Projects",
      description:
        "I've worked on a variety of projects that showcase my skills in software development, AI integration, and innovative problem-solving.",
      projectDetails: "Project Details:",
      viewOnGithub: "View on GitHub",
      viewLinkedInPost: "View LinkedIn Post",
      visitWebsite: "Visit Website",
    },
    certificates: {
      title: "Certificates",
      description: "I continuously enhance my skills through specialized certifications in various technical domains.",
      status: {
        completed: "Completed",
        inProgress: "In Progress",
      },
      credentialId: "Credential ID:",
      viewCertificate: "View Certificate",
    },
    awards: {
      title: "Awards",
      description: "Recognition for my achievements in tech competitions and hackathons.",
    },
    volunteering: {
      title: "Volunteering Work",
      description: "My involvement with community organizations and volunteer initiatives.",
      responsibilities: "Responsibilities:",
    },
    contact: {
      title: "Get in Touch",
      description:
        "I'm interested in freelance opportunities, collaborations, and innovative projects. Feel free to reach out!",
      contactInfo: "Contact Information",
      languages: "Languages",
      sendMessage: "Send me a message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      send: "Send Message",
      messageSent: "Message sent!",
      messageSentDesc: "Thanks for reaching out. I'll get back to you soon.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    navbar: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
      language: "English",
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: "Ingénieur Logiciel & Data",
      description:
        "Passionné par le développement d'applications innovantes, l'optimisation des flux de travail et l'intégration de technologies modernes comme les solutions basées sur l'IA et le DevOps.",
      getInTouch: "Me Contacter",
      viewProjects: "Voir Projets",
      scrollDown: "Défiler",
    },
    about: {
      title: "À Propos de Moi",
      paragraph1:
        "Ingénieur Logiciel & Data polyvalent et passionné, à la recherche d'une opportunité d'alternance pour appliquer mon expertise en développement Full Stack, solutions basées sur l'IA et DevOps. Compétent dans le développement d'applications innovantes, l'optimisation des flux de travail et l'intégration de technologies modernes.",
      paragraph2:
        "Désireux de contribuer à une équipe dynamique tout en améliorant mes compétences techniques et de résolution de problèmes dans un cadre professionnel. Je m'intéresse particulièrement à l'intersection de l'ingénierie logicielle et de l'intelligence artificielle, en mettant l'accent sur la création de solutions pratiques et impactantes.",
    },
    skills: {
      title: "Compétences Techniques",
      description:
        "Mon arsenal technique s'étend sur plusieurs domaines, me permettant de construire des solutions complètes du frontend au backend, en passant par le déploiement cloud et l'intégration d'IA.",
      categories: {
        fullStack: "Full Stack",
        devOps: "DevOps & Cloud",
        mobile: "Développement Mobile",
        programming: "Programmation",
        dataEngineering: "Ingénierie des Données",
        aiMl: "IA & ML",
        api: "Développement API",
        design: "Design",
      },
    },
    experience: {
      title: "Expérience Professionnelle",
      description:
        "Mon parcours professionnel m'a doté d'une expérience pratique dans les technologies de pointe et les environnements de développement collaboratifs.",
      projectDetails: "Détails du Projet",
      responsibilities: "Responsabilités",
    },
    education: {
      title: "Formation",
      description:
        "Mon parcours éducatif m'a fourni une solide base en ingénierie logicielle et des connaissances spécialisées en science des données.",
    },
    projects: {
      title: "Mes Projets",
      description:
        "J'ai travaillé sur divers projets qui mettent en valeur mes compétences en développement logiciel, intégration d'IA et résolution de problèmes innovante.",
      projectDetails: "Détails du Projet:",
      viewOnGithub: "Voir sur GitHub",
      viewLinkedInPost: "Voir le Post LinkedIn",
      visitWebsite: "Visiter le Site",
    },
    certificates: {
      title: "Certificats",
      description:
        "J'améliore continuellement mes compétences grâce à des certifications spécialisées dans divers domaines techniques.",
      status: {
        completed: "Terminé",
        inProgress: "En Cours",
      },
      credentialId: "ID de Certification:",
      viewCertificate: "Voir le Certificat",
    },
    awards: {
      title: "Récompenses",
      description: "Reconnaissance pour mes réalisations dans les compétitions technologiques et hackathons.",
    },
    volunteering: {
      title: "Bénévolat",
      description: "Mon implication dans des organisations communautaires et des initiatives bénévoles.",
      responsibilities: "Responsabilités:",
    },
    contact: {
      title: "Me Contacter",
      description:
        "Je suis intéressé par les opportunités de freelance, les collaborations et les projets innovants. N'hésitez pas à me contacter!",
      contactInfo: "Informations de Contact",
      languages: "Langues",
      sendMessage: "Envoyez-moi un message",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      sending: "Envoi en cours...",
      send: "Envoyer le Message",
      messageSent: "Message envoyé!",
      messageSentDesc: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
}


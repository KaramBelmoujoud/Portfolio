import { ThemeProvider } from "../components/theme-provider"
import { LanguageProvider } from "../context/language-context"
import Terminal from "../components/terminal"
import Navbar from "../components/navbar"
import CodeHero from "../components/code-hero"
import TechStack from "../components/tech-stack"
import ProjectsShowcase from "../components/projects-showcase"
import ExperienceTimeline from "../components/experience-timeline"
import GithubActivity from "../components/github-activity"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="theme-preference">
        <div className="min-h-screen bg-[#0d1117] text-slate-200 font-mono">
          <Navbar />
          <main>
            <CodeHero />
            <Terminal />
            <TechStack />
            <ProjectsShowcase />
            <ExperienceTimeline />
            <GithubActivity />
            <ContactForm />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
} 
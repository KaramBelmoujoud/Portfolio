"use client"

import { useLanguage } from "@/context/language-context"

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#0d1117] border-t border-[#30363d]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-center md:text-left text-slate-400">
              © {currentYear} Karam Belmoujoud. {t("footer", "rights")}
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/KaramBelmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/Karam-Belmoujoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:karam_belmo@outlook.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">
          <p>Designed and built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


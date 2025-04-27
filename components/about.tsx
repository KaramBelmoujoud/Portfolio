"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

const About = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            {t("about", "title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="blue-glow border-blue-100 dark:border-blue-900/50">
            <CardContent className="p-6 md:p-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-foreground/90 leading-relaxed mb-6"
              >
                {t("about", "paragraph1")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-foreground/90 leading-relaxed"
              >
                {t("about", "paragraph2")}
              </motion.p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About


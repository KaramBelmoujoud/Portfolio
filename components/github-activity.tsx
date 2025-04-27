"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/context/language-context"
import { Github, GitBranch, GitCommit, GitPullRequest, Star } from "lucide-react"
import { useGitHubData } from "@/hooks/use-github-data"

const GithubActivity = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { stats, contributionCalendar, loading, error } = useGitHubData()

  const statsList = [
    { icon: GitCommit, label: "Commits", value: stats?.commits ?? 0, color: "text-emerald-400" },
    { icon: GitPullRequest, label: "Pull Requests", value: stats?.pullRequests ?? 0, color: "text-blue-400" },
    { icon: GitBranch, label: "Repositories", value: stats?.repositories ?? 0, color: "text-purple-400" },
    { icon: Star, label: "Stars", value: stats?.stars ?? 0, color: "text-yellow-400" },
  ]

  if (loading) {
    return (
      <section className="py-20 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <div className="text-center text-slate-400">Loading GitHub data...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-400">Error loading GitHub data: {error}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-slate-400 text-sm font-mono">// GitHub Activity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">My Coding Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            A visual representation of my open source contributions and GitHub activity.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {statsList.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 text-center"
              >
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-slate-200 mb-1">{stat.value.toLocaleString()}+</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-200">GitHub Contributions</h3>
              </div>
              <a
                href="https://github.com/KaramBelmoujoud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-400 hover:underline"
              >
                View Profile
              </a>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>

                <div className="grid grid-rows-7 grid-flow-col gap-1">
                  {contributionCalendar?.weeks.map((week, weekIndex) =>
                    week.contributionDays.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.5 + weekIndex * 0.01 }}
                        className={`w-3 h-3 rounded-sm ${
                          day.contributionCount === 0
                            ? "bg-[#161b22] border border-[#30363d]"
                            : day.contributionCount <= 2
                              ? "bg-emerald-900"
                              : day.contributionCount <= 4
                                ? "bg-emerald-700"
                                : day.contributionCount <= 6
                                  ? "bg-emerald-600"
                                  : "bg-emerald-500"
                        }`}
                        title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                      />
                    )),
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-4 gap-2 text-xs text-slate-400">
              <span>Less</span>
              <div className="w-3 h-3 rounded-sm bg-[#161b22] border border-[#30363d]"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-900"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-700"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-600"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
              <span>More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GithubActivity


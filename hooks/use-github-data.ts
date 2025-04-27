import { useState, useEffect } from 'react'
import { 
  githubClient, 
  USER_STATS_QUERY, 
  CONTRIBUTION_CALENDAR_QUERY, 
  GitHubStats, 
  ContributionCalendar,
  UserStatsResponse,
  ContributionCalendarResponse
} from '@/lib/github'

const GITHUB_USERNAME = 'KaramBelmoujoud'

export const useGitHubData = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [contributionCalendar, setContributionCalendar] = useState<ContributionCalendar | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch user stats
        const statsData = await githubClient.request<UserStatsResponse>(USER_STATS_QUERY, {
          username: GITHUB_USERNAME,
        })

        const userStats: GitHubStats = {
          commits: statsData.user.contributionsCollection.totalCommitContributions,
          pullRequests: statsData.user.contributionsCollection.totalPullRequestContributions,
          repositories: statsData.user.repositories.totalCount,
          stars: statsData.user.starredRepositories.totalCount,
        }

        // Fetch contribution calendar
        const calendarData = await githubClient.request<ContributionCalendarResponse>(CONTRIBUTION_CALENDAR_QUERY, {
          username: GITHUB_USERNAME,
        })

        setStats(userStats)
        setContributionCalendar(calendarData.user.contributionsCollection.contributionCalendar)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  return { stats, contributionCalendar, loading, error }
} 
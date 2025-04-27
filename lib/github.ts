import { GraphQLClient } from 'graphql-request'

const GITHUB_API_URL = 'https://api.github.com/graphql'

if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
  console.warn('GitHub token is not set. Please add NEXT_PUBLIC_GITHUB_TOKEN to your .env.local file')
}

// Initialize GraphQL client
export const githubClient = new GraphQLClient(GITHUB_API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
})

// Query to fetch user stats and contribution data
export const USER_STATS_QUERY = `
  query UserStats($username: String!) {
    user(login: $username) {
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalRepositoryContributions
      }
      repositories(first: 100) {
        totalCount
      }
      starredRepositories(first: 100) {
        totalCount
      }
    }
  }
`

// Query to fetch contribution calendar data
export const CONTRIBUTION_CALENDAR_QUERY = `
  query ContributionCalendar($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

export interface GitHubStats {
  commits: number
  pullRequests: number
  repositories: number
  stars: number
}

export interface ContributionDay {
  contributionCount: number
  date: string
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

export interface ContributionCalendar {
  totalContributions: number
  weeks: ContributionWeek[]
}

export interface UserStatsResponse {
  user: {
    contributionsCollection: {
      totalCommitContributions: number
      totalPullRequestContributions: number
      totalRepositoryContributions: number
    }
    repositories: {
      totalCount: number
    }
    starredRepositories: {
      totalCount: number
    }
  }
}

export interface ContributionCalendarResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar
    }
  }
} 
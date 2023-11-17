export interface Root {
  author_url: string
  discord_url: string
  version: string
  parser_version: string
  website_url: string
  documentation_url: string
  github_url: string
  parser_github_url: string
  production_api_url: string
  status_url: string
  myanimelist_heartbeat: MyanimelistHeartbeat
}

export interface MyanimelistHeartbeat {
  status: string
  score: number
  down: boolean
  last_downtime: number
}
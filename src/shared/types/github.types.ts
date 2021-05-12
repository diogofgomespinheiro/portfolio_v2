export type GithubRepoProps = {
  date: string;
  name: string;
  mainLanguage: string;
  repoUrl: string;
  demoUrl?: string;
};

export type RawGithubRepo = {
  homepage?: string;
  html_url: string;
  language: string;
  name: string;
  updated_at: string;
} & Record<string, unknown>;

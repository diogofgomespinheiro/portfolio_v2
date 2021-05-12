import { GithubRepoProps, RawGithubRepo } from '@/shared';
import { DEMO_URLS } from '@/lib';

export class RepositoriesMapper {
  data: any;
  repositories: GithubRepoProps[];

  constructor(data: any) {
    this.data = data;
    this.repositories = {} as GithubRepoProps[];
  }

  mapRepositories(): RepositoriesMapper {
    const mappedRepositories: GithubRepoProps[] = [];

    this.data.forEach((repository: RawGithubRepo) => {
      if (repository.fork) return;

      const {} = repository;

      mappedRepositories.push({
        date: new Date(repository.updated_at).toLocaleDateString('en-GB', {
          day: 'numeric',
          year: 'numeric',
          month: 'short'
        }),
        name: repository.name,
        mainLanguage: repository.language || 'Undetermined',
        demoUrl:
          DEMO_URLS[repository.name as keyof typeof DEMO_URLS] ||
          repository.homepage,
        repoUrl: repository.html_url
      });
    });

    this.repositories = mappedRepositories;
    return this;
  }

  getRepositories(): GithubRepoProps[] {
    return this.repositories;
  }
}

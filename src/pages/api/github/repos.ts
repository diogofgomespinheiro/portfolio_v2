import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { GITHUB_API_URL } from '@/lib';
import { RepositoriesMapper } from '@/lib/github/mappers';
import { GithubRepoProps } from '@/shared';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GithubRepoProps[]>
) {
  const { query = {} } = req;
  const { pageNumber, username } = query;
  const url = `${GITHUB_API_URL}/users/${username}/repos?per_page=40&page=${pageNumber}&sort=updated&direction=desc`;

  try {
    const response = await axios.get(url);
    const data = new RepositoriesMapper(response.data)
      .mapRepositories()
      .getRepositories();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

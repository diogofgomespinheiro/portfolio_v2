import { useEffect, useState } from 'react';
import axios, { Canceler } from 'axios';

import { GithubRepoProps } from '@/shared';

export const useRepostorySearch = (username: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [repositories, setRepositories] = useState<GithubRepoProps[]>([]);

  useEffect(() => {
    const url = `/api/github/repos?username=${username}&pageNumber=${pageNumber}`;

    setLoading(true);
    setError(false);
    let cancel: Canceler = () => {};
    axios
      .get<GithubRepoProps[]>(url)
      .then(res => {
        setRepositories(prevRepos => [...prevRepos, ...res.data]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, repositories, hasMore };
};

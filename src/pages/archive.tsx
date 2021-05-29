import {
  Fragment,
  useRef,
  useCallback,
  useState,
  Key,
  LegacyRef,
  ReactElement
} from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';

import Layout from '@/components/layout';
import { useRepostorySearch } from '@/utils/hooks';

import { getArchivePageContent } from '@/lib';
import { ArchivePageProps, GithubRepoProps } from '@/shared';
import * as S from '@/styles/pages/archive.styles';

const ArchivePage = ({ seoMetaTags, navbar }: ArchivePageProps) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { repositories, loading, hasMore } = useRepostorySearch(
    'diogofgomespinheiro',
    pageNumber
  );

  const observer = useRef<IntersectionObserver>();
  const lastRepositoryElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const getRepositoryElement = (
    repository: GithubRepoProps,
    props: {
      key?: Key;
      ref?: LegacyRef<HTMLTableRowElement>;
    } = {}
  ): ReactElement => {
    return (
      <tr {...props}>
        <th>{repository.date}</th>
        <th>{repository.name}</th>
        <th>{repository.mainLanguage}</th>
        <S.IconsContainer>
          {Boolean(repository.demoUrl) && (
            <img
              src="/assets/demo-icon.svg"
              alt="link-icon"
              height={20}
              width={20}
              onClick={() =>
                repository.demoUrl &&
                window.open(`https://${repository.demoUrl}`)
              }
            />
          )}
          {Boolean(repository.repoUrl) && (
            <img
              src="/assets/github-icon.svg"
              alt="github-icon"
              height={20}
              width={20}
              onClick={() =>
                repository.repoUrl && window.open(repository.repoUrl)
              }
            />
          )}
        </S.IconsContainer>
      </tr>
    );
  };

  return (
    <Layout
      headerMenuItemSelectedIndex={navbar.selectedIndex}
      headerMenuItems={navbar.items}
    >
      <Head>{renderMetaTags(seoMetaTags)}</Head>
      <S.Wrapper id="archive">
        <S.Title>Archive</S.Title>
        <S.Container>
          <S.TableContainer>
            <S.TableHeader>
              <tr>
                <th>Date</th>
                <th>Project</th>
                <th>Language</th>
                <th></th>
              </tr>
              <S.LargeSeparator />
            </S.TableHeader>
            <S.TableBody>
              {repositories.map((repository, index) =>
                index + 1 === repositories.length ? (
                  getRepositoryElement(repository, {
                    key: repository.name,
                    ref: lastRepositoryElementRef
                  })
                ) : (
                  <Fragment key={repository.name}>
                    {getRepositoryElement(repository)}
                    <S.SmallSeparator />
                  </Fragment>
                )
              )}
            </S.TableBody>
          </S.TableContainer>
          {loading && <S.Loader />}
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ArchivePageProps> = async ({
  preview = false
}) => {
  const props = await getArchivePageContent(preview);

  return {
    props
  };
};

export default ArchivePage;

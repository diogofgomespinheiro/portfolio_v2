import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { Image } from 'react-datocms';
import {
  ProjectCard,
  Button,
  Tag
} from '@diogop_96/portfolio-component-library';

import { ProjectsSectionProps } from './types';
import * as S from './styles';

const ProjectSection = ({ title, projects }: ProjectsSectionProps) => {
  const router = useRouter();

  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    router.push('/archive');
  };

  const projectCardItems = projects.map(project => {
    const buttons = [
      <Button
        key={`demo-button-${project.name}`}
        disabled={!Boolean(project.demoUrl)}
        onClick={() => window.open(project.demoUrl)}
      >
        Demo
      </Button>,
      <S.RepositoryLink
        key={`repo-button-${project.name}`}
        onClick={() => window.open(project.repositoryUrl)}
      >
        <S.StyledEyeIcon />
        Repository
      </S.RepositoryLink>
    ];

    const listItems = project.techs.map(tech => (
      <Tag key={`${project.name}-${tech}`} transparent disabled>
        {tech}
      </Tag>
    ));

    return (
      <ProjectCard
        key={`${project.name}-card`}
        title={project.name}
        description={project.description}
        imgComponent={<Image data={project.coverImage.responsiveImage} />}
        buttons={buttons}
        listItems={listItems}
      />
    );
  });

  return (
    <S.Container id="projects">
      <S.Title>{title}</S.Title>
      <S.ProjectsContainer>{projectCardItems}</S.ProjectsContainer>
      <Button onClick={handleClick}>View the archive</Button>
    </S.Container>
  );
};

export default ProjectSection;

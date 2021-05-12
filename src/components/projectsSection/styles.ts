import styled from 'styled-components';
import { EyeIcon } from '@diogop_96/portfolio-component-library';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const RepositoryLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StyledEyeIcon = styled(EyeIcon)`
  fill: ${({ theme }) => theme.colors.primary};
`;

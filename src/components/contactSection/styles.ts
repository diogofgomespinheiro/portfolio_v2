import styled from 'styled-components';
import { body1Mixin } from '@diogop_96/portfolio-component-library';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  ${body1Mixin};
`;

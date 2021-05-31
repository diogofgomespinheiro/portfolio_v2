import styled from 'styled-components';
import {
  deviceQueries,
  body1Mixin
} from '@diogop_96/portfolio-component-library';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100%;

  @media screen and (${deviceQueries.laptop.min}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 40px auto;
  object-fit: contain;

  @media screen and (${deviceQueries.tablet.min}) {
    max-width: 550px;
    min-width: 350px;
    margin: 0 0 40px 0;
  }

  @media screen and (${deviceQueries.laptop.min}) {
    width: 50%;
  }
`;

export const InfoContainer = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (${deviceQueries.laptop.min}) {
    width: 50%;
  }
`;

export const PersonalInfoContainer = styled.div`
  & > * {
    margin-bottom: 40px;
  }

  & > h3 {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > p {
    line-break: loose;
    color: ${({ theme }) => theme.colors.secondary};
    ${body1Mixin};
  }
`;

export const TabsWrapper = styled.div``;

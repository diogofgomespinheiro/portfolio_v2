import styled from 'styled-components';
import {
  deviceQueries,
  h5Mixin,
  h3Mixin
} from '@diogop_96/portfolio-component-library';

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  @media screen and (${deviceQueries.tablet.min}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PersonalInfoContainer = styled.div`
  & > h1,
  & > h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > h2 {
    ${h3Mixin};
  }

  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const WelcomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 160px;
  border-radius: 8px 8px 8px 0px;

  background: ${({ theme }) => theme.colors.accent};
  color: #fafbff;

  ${h5Mixin};

  @media screen and (${deviceQueries.mobileL.min}) {
    width: 200px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 40px auto;
  object-fit: contain;

  @media screen and (${deviceQueries.tablet.min}) {
    max-width: 550px;
    margin: 0;
  }
`;

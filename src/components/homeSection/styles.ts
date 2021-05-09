import styled from 'styled-components';
import { deviceQueries, h5Mixin } from '@diogop_96/portfolio-component-library';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 40px;

  width: 100%;
  margin-top: 40px;

  @media screen and (${deviceQueries.tablet.min}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    height: 100vh;
  }
`;

export const PersonalInfoContainer = styled.div`
  & > h1,
  & > h3 {
    color: ${({ theme }) => theme.colors.primary};
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
  margin: 0 auto;

  @media screen and (${deviceQueries.tablet.min}) {
    max-width: 550px;
    margin: 0;
  }
`;

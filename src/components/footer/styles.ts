import styled from 'styled-components';
import { body3Mixin } from '@diogop_96/portfolio-component-library';

export const Footer = styled.footer`
  width: 100%;
  padding: 20px;

  & > span {
    display: block;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};

    ${body3Mixin};

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};

      ${body3Mixin};

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

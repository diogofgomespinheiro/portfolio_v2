import styled, { keyframes } from 'styled-components';
import {
  deviceQueries,
  h5Mixin,
  h6Mixin,
  text
} from '@diogop_96/portfolio-component-library';

const loadAnimation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }

  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;

  @media screen and (${deviceQueries.tablet.min}) {
    padding: 138px 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  min-width: 400px;
  text-align: left;
`;

export const TableHeader = styled.thead`
  width: 100%;

  & > tr {
    color: ${({ theme }) => theme.colors.accent};

    ${h5Mixin};
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
  margin-top: 40px;

  & > tr {
    ${h6Mixin};

    & > th:first-child {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: ${text.weight.regular};
    }

    & > th:nth-child(2) {
      color: ${({ theme }) => theme.colors.primary};
    }

    & > th:nth-child(n + 3) {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: ${text.weight.regular};
    }
  }
`;

export const IconsContainer = styled.th`
  display: flex;
  justify-content: flex-end;

  & > img {
    cursor: pointer;
  }

  & > img:not(:last-child) {
    margin-right: 5px;
  }
`;

export const LargeSeparator = styled.tr`
  height: 40px;
  width: 100%;
`;

export const SmallSeparator = styled.tr`
  height: 20px;
  width: 100%;
`;

export const Loader = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 10px;
  margin: 50px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &,
  &::before,
  &::after {
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${loadAnimation} 2.2s infinite ease-in-out;
    animation: ${loadAnimation} 2.2s infinite ease-in-out;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
  }

  &::before {
    left: -2.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 2.5em;
  }
`;

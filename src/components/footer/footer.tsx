import * as React from 'react';
import {
  GithubIcon,
  LinkedinIcon
} from '@diogop_96/portfolio-component-library';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.SocialLinks>
        <LinkedinIcon
          fill="#DE9D7B"
          onClick={() =>
            window.open('https://www.linkedin.com/in/diogo-fgpinheiro/')
          }
        />
        <GithubIcon
          fill="#DE9D7B"
          onClick={() => window.open('https://github.com/diogofgomespinheiro')}
        />
      </S.SocialLinks>
      <span>
        Design by{' '}
        <a
          href="https://www.behance.net/ritaaaqueiros/projects"
          target="_blank"
          rel="noreferrer"
        >
          Rita Queirós
        </a>{' '}
        &amp; built by{' '}
        <a
          href="https://github.com/diogofgomespinheiro"
          target="_blank"
          rel="noreferrer"
        >
          Diogo Pinheiro
        </a>
      </span>
    </S.Footer>
  );
};

export default Footer;

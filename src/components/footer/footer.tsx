import * as React from 'react';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <span>
        Design by{' '}
        <a
          href="https://www.behance.net/ritaaaqueiros/projects"
          target="_blank"
        >
          Rita Queirós
        </a>{' '}
        &amp; built by{' '}
        <a href="https://github.com/diogofgomespinheiro" target="_blank">
          Diogo Pinheiro
        </a>
      </span>
    </S.Footer>
  );
};

export default Footer;

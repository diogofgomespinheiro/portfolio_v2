import * as React from 'react';
import { Button } from '@diogop_96/portfolio-component-library';

import { ContactSectionProps } from './types';
import * as S from './styles';

const ContectSection = ({
  title,
  description,
  ctaText
}: ContactSectionProps) => {
  return (
    <S.Container role="contact" id="contact">
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button elementType="a" href="mailto:diogo.fgomes.pinheiro@gmail.com">
        {ctaText}
      </Button>
    </S.Container>
  );
};

export default ContectSection;

import * as React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import { HomeSectionProps } from './types';
import * as S from './styles';

const HomeSection = ({
  title,
  subTitle,
  sideImage,
  welcomeMessages
}: HomeSectionProps) => {
  return (
    <>
      <S.Container id="home">
        <S.PersonalInfoContainer>
          <S.WelcomeBox>
            <Typewriter
              onInit={() => void 0}
              options={{
                strings: welcomeMessages,
                autoStart: true,
                loop: true
              }}
            />
          </S.WelcomeBox>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </S.PersonalInfoContainer>
        <S.ImageWrapper>
          <Image
            src={sideImage.url}
            alt={sideImage.alt}
            height={500}
            width={550}
          />
        </S.ImageWrapper>
      </S.Container>
    </>
  );
};

export default HomeSection;

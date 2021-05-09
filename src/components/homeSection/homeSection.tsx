import * as React from 'react';
import Typewriter from 'typewriter-effect';
import { Player } from '@lottiefiles/react-lottie-player';

import { HomeSectionProps } from './types';
import * as S from './styles';

const HomeSection = ({
  title,
  subTitle,
  welcomeMessages
}: HomeSectionProps) => {
  return (
    <S.Container role="home" id="home">
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
        <h3>{subTitle}</h3>
      </S.PersonalInfoContainer>
      <S.ImageWrapper>
        <Player
          autoplay
          loop
          controls={false}
          renderer="svg"
          src="/assets/home-image.json"
        ></Player>
      </S.ImageWrapper>
    </S.Container>
  );
};

export default HomeSection;
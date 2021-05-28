import * as React from 'react';
import Image from 'next/image';
import {
  Tabs,
  Tab,
  TabsList,
  TabsPanels,
  TabsPanel,
  SimpleTabsPanelContent
} from '@diogop_96/portfolio-component-library';

import { AboutSectionProps } from './types';
import * as S from './styles';

const AboutSection = ({
  title,
  description,
  sideImage,
  tabs
}: AboutSectionProps) => {
  const tabsListItems = tabs.map(tab => (
    <Tab key={`${tab.title}-list-item`}>{tab.title}</Tab>
  ));

  const tabsPanelsItems = tabs.map(tab => (
    <TabsPanel key={`${tab.title}-panel-item`}>
      <SimpleTabsPanelContent items={tab.items} />
    </TabsPanel>
  ));

  return (
    <S.Container id="about">
      <S.ImageWrapper>
        <Image
          src={sideImage.url}
          alt={sideImage.alt}
          width={500}
          height={500}
        />
      </S.ImageWrapper>
      <S.InfoContainer>
        <S.PersonalInfoContainer>
          <h3>{title}</h3>
          <p>{description}</p>
        </S.PersonalInfoContainer>
        <S.TabsWrapper>
          <Tabs>
            <TabsList>{tabsListItems}</TabsList>
            <TabsPanels>{tabsPanelsItems}</TabsPanels>
          </Tabs>
        </S.TabsWrapper>
      </S.InfoContainer>
    </S.Container>
  );
};

export default AboutSection;

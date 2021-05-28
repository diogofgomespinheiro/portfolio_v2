import { ImageProps } from '@/shared';

type AboutSectionTabsItem = {
  title: string;
  subTitle?: string;
  icons: ImageProps[];
};

export type AboutSectionTabs = {
  title: string;
  items: AboutSectionTabsItem[];
};

export type AboutSectionProps = {
  title: string;
  sideImage: ImageProps;
  description: string;
  tabs: AboutSectionTabs[];
};

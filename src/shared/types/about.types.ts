import { Icon } from './icon.types';

type AboutSectionTabsItem = {
  title: string;
  subTitle?: string;
  icons: Icon[];
};

export type AboutSectionTabs = {
  title: string;
  items: AboutSectionTabsItem[];
};

export type AboutSectionProps = {
  title: string;
  description: string;
  tabs: AboutSectionTabs[];
};

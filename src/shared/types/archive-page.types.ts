import { SeoMetaTagType } from 'react-datocms';

import { HeaderMenuItem } from './header.types';

export type ArchivePageProps = {
  seoMetaTags: SeoMetaTagType[];
  navbar: {
    selectedIndex: number;
    items: HeaderMenuItem[];
    resumeUrl: string;
  };
};

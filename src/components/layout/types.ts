import { ReactNode } from 'react';

import { HeaderMenuItem } from '@/shared';

export type LayoutProps = {
  preview?: boolean;
  children: ReactNode;
  headerMenuItemSelectedIndex: number;
  headerMenuItems: HeaderMenuItem[];
  enableLinkObserver?: boolean;
  linksQuery?: string;
  resumeUrl: string;
};

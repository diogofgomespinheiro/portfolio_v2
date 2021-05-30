import { HeaderMenuItem } from '@/shared';

export type HeaderProps = {
  menuItems: HeaderMenuItem[];
  resumeUrl: string;
  enableLinkObserver?: boolean;
  linksQuery?: string;
};

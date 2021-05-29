import { HeaderMenuItem } from '@/shared';

export type HeaderProps = {
  menuItems: HeaderMenuItem[];
  enableLinkObserver?: boolean;
  linksQuery?: string;
};

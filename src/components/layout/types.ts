import { ReactNode } from 'react';

export type LayoutProps = {
  preview?: boolean;
  children: ReactNode;
  pageId: 'home' | 'archive' | 'blog';
};

import { ResponsiveImageType } from 'react-datocms';

export type ImageProps = {
  url: string;
  alt: string;
  height?: number;
  width?: number;
  responsiveImage: ResponsiveImageType;
};

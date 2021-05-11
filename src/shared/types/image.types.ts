export type ResponsiveImageProps = {
  alt: string;
  aspectRatio: number;
  base64: string;
  bgColor?: string;
  height: number;
  sizes: string;
  src: string;
  srcSet: string;
  title?: string;
  webpSrcSet: string;
  width: number;
};

export type ImageProps = {
  url: string;
  alt: string;
  height?: number;
  width?: number;
  responsiveImage?: ResponsiveImageProps;
};

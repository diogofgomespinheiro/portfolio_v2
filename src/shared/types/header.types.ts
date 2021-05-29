export type HeaderMenuItem = {
  id: string;
  label: string;
  type: 'scroll' | 'link';
  route: 'string';
  spy: boolean;
  offset: number;
};

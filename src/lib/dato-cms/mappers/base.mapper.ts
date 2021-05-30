import { HeaderMenuItem } from '@/shared';

export class BaseMapper<P> {
  data: any;
  pageKey: string;
  props: P;

  constructor(data: any, pageKey: string) {
    this.data = data;
    this.pageKey = pageKey;
    this.props = {} as P;
  }

  public mapSeoProps(): this {
    const { seo } = this.data[this.pageKey];
    const concatenatedSeo = seo.concat(this.data.site.favicon);

    Object.assign(this.props, { seoMetaTags: concatenatedSeo });
    return this;
  }

  public mapHeaderProps(): this {
    const { navbarSelectedItemIndex, navbarItems, resumeUrl } = this.data[
      this.pageKey
    ];

    const mappedNavbarItems: HeaderMenuItem[] = navbarItems.map(
      (item: Record<string, unknown>) => ({
        id: item.pageId,
        label: item.label,
        type: item.actionType,
        route: item.route,
        spy: item.spy,
        offset: item.offset
      })
    );

    Object.assign(this.props, {
      navbar: {
        selectedIndex: navbarSelectedItemIndex,
        items: mappedNavbarItems,
        resumeUrl: resumeUrl.url
      }
    });
    return this;
  }

  public getProps(): P {
    return this.props;
  }
}

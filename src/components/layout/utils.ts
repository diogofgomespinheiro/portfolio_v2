export const menuItems = {
  home: {
    selectedIndex: 0,
    items: [
      {
        id: 'home',
        label: 'Home',
        type: 'scroll',
        offset: -118
      },
      {
        id: 'about',
        label: 'About',
        type: 'scroll',
        offset: -118
      },
      {
        id: 'projects',
        label: 'Projects',
        type: 'scroll',
        offset: -118
      },
      {
        id: 'contact',
        label: 'Contact',
        type: 'scroll',
        offset: 0
      },
      {
        id: 'archive',
        label: 'Archive',
        type: 'link',
        route: '/archive'
      },
      {
        id: 'blog',
        label: 'Blog',
        type: 'link',
        route: '/blog'
      }
    ]
  },
  archive: {
    selectedIndex: 1,
    items: [
      {
        id: 'home',
        label: 'Home',
        type: 'link',
        route: '/'
      },
      {
        id: 'archive',
        label: 'Archive',
        type: 'scroll',
        offset: 0
      },
      {
        id: 'blog',
        label: 'Blog',
        type: 'link',
        route: '/blog'
      }
    ]
  },
  blog: {
    selectedIndex: 2,
    items: [
      {
        id: 'home',
        label: 'Home',
        type: 'link',
        route: '/'
      },
      {
        id: 'archive',
        label: 'Archive',
        type: 'link',
        route: '/archive'
      },
      {
        id: 'blog',
        label: 'Blog',
        type: 'scroll',
        offset: 0
      }
    ]
  }
};

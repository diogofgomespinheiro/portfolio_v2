export const landingPageQuery = `
  landingPage {
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  site: _site {
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
`;

export const homeSectionQuery = `
  homeSection {
    title
    subTitle
    sideImage {
      url
      alt
    }
    welcomeMessages {
      message
    }
  }
`;

export const aboutSectionQuery = `
  aboutSection {
    sideImage {
      url
      alt
    }
    title
    description
    skills {
      techs {
        icon {
          url
          alt
          height
          width
        }
      }
      specialty
    }
    experience {
      company
      years
    }
    education {
      school
      years
    }
    certifications {
      name
      finishDate
    }
  }
`;

export const projectsSectionQuery = `
  projectsSection {
    title
    projects {
      name
      description
      coverImage {
        url
        alt
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 500, h: 350 }) {
          ...responsiveImageFragment
        }
      }
      techs {
        name
      }
      demoUrl
      repositoryUrl
    }
  }
`;

export const contactSectionQuery = `
  contactSection {
    title
    description
    ctaText
  }
`;

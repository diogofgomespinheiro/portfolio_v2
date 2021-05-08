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
      alt
      url
    }
    title
    description
    skills {
      techs {
        icon {
          url
          alt
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

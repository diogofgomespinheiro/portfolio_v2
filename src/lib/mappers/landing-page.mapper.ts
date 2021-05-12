import { AboutSectionProps, AboutSectionTabs } from '@/components/aboutSection';
import { HomeSectionProps } from '@/components/homeSection';
import { ContactSectionProps } from '@/components/contactSection';
import { ProjectsSectionProps } from '@/components/projectsSection';
import { LandingPageProps, ImageProps } from '@/shared';

export class LandingPagePropsMapper {
  data: any;
  props: LandingPageProps;

  constructor(data: any) {
    this.data = data;
    this.props = {} as LandingPageProps;
  }

  mapSeoProps(): LandingPagePropsMapper {
    const { seo } = this.data.landingPage;
    const concatenatedSeo = seo.concat(this.data.site.favicon);

    Object.assign(this.props, { seoMetaTags: concatenatedSeo });
    return this;
  }

  mapHomeSectionProps(): LandingPagePropsMapper {
    const {
      title,
      subTitle,
      sideImage,
      welcomeMessages
    } = this.data.homeSection;

    const transformedWelcomeMessages = welcomeMessages.map(
      (item: any) => item.message
    );

    const homeSection: HomeSectionProps = {
      title,
      subTitle,
      sideImage,
      welcomeMessages: transformedWelcomeMessages
    };

    Object.assign(this.props, { homeSection });
    return this;
  }

  mapAboutSectionProps(): LandingPagePropsMapper {
    const { title, description } = this.data.aboutSection;

    const aboutSection: AboutSectionProps = {
      title,
      description,
      tabs: this.getAboutSectionTabs()
    };

    Object.assign(this.props, { aboutSection });
    return this;
  }

  mapProjectsSectionProps(): LandingPagePropsMapper {
    const { title, projects } = this.data.projectsSection;
    const transformedProjects = projects.map(
      (project: Record<string, any>) => ({
        ...project,
        techs: project.techs.map((tech: { name: string }) => tech.name)
      })
    );

    const projectsSection: ProjectsSectionProps = {
      title,
      projects: transformedProjects
    };

    Object.assign(this.props, { projectsSection });
    return this;
  }

  mapContactSectionProps(): LandingPagePropsMapper {
    const contactSection: ContactSectionProps = this.data.contactSection;

    Object.assign(this.props, { contactSection });
    return this;
  }

  getProps(): LandingPageProps {
    return this.props;
  }

  private getAboutSectionTabs(): AboutSectionTabs[] {
    const {
      skills,
      experience,
      education,
      certifications
    } = this.data.aboutSection;

    const tabs: AboutSectionTabs[] = [];

    tabs.push({
      title: 'Skills',
      items: skills.map(
        (item: { specialty: string; techs: { icon: ImageProps }[] }) => ({
          title: item.specialty,
          icons: item.techs.map(tech => tech.icon)
        })
      )
    });

    tabs.push({
      title: 'Experience',
      items: experience.map((item: { company: string; years: string }) => ({
        title: item.company,
        subTitle: item.years
      }))
    });

    tabs.push({
      title: 'Education',
      items: education.map((item: { school: string; years: string }) => ({
        title: item.school,
        subTitle: item.years
      }))
    });

    tabs.push({
      title: 'Certifications',
      items: certifications.map(
        (item: { name: string; finishDate: string }) => ({
          title: item.name,
          subTitle: item.finishDate
        })
      )
    });

    return tabs;
  }
}

import { BaseMapper } from './base.mapper';
import { AboutSectionProps, AboutSectionTabs } from '@/components/aboutSection';
import { HomeSectionProps } from '@/components/homeSection';
import { ContactSectionProps } from '@/components/contactSection';
import { ProjectsSectionProps } from '@/components/projectsSection';
import { LandingPageProps, ImageProps } from '@/shared';

export class LandingPagePropsMapper extends BaseMapper<LandingPageProps> {
  public mapHomeSectionProps(): LandingPagePropsMapper {
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

  public mapAboutSectionProps(): LandingPagePropsMapper {
    const { title, description, sideImage } = this.data.aboutSection;

    const aboutSection: AboutSectionProps = {
      title,
      description,
      sideImage,
      tabs: this.getAboutSectionTabs()
    };

    Object.assign(this.props, { aboutSection });
    return this;
  }

  public mapProjectsSectionProps(): LandingPagePropsMapper {
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

  public mapContactSectionProps(): LandingPagePropsMapper {
    const contactSection: ContactSectionProps = this.data.contactSection;

    Object.assign(this.props, { contactSection });
    return this;
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

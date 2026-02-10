import { IDescriptionProps } from "./Tabs.components/Description";
import { ITabProps, TCompanyId } from "./Tabs.components/Tab";

export const INIT_TAB_ID = 'google';

export const INIT_TABS: Array<Omit<ITabProps, 'onClick'>> = [
  { id: 'google', icon: "github", company: 'Google', position: 'Frontend Developer', active: true },
  { id: 'octupus', icon: "github", company: 'Octupus', position: 'Frontend Developer', active: false },
  { id: 'varlik', icon: "github", company: 'Varlik', position: 'Frontend Developer', active: false },
];

export const TABS_DESCRIPTION: Record<TCompanyId, IDescriptionProps> = {
  google: {
    period: '2022 - Present',
    position: 'UI Engineer',
    company: 'Google',
    companyLink: 'https://google.com',
    mainPoints: [
      'Design and implementation of visually appealing and intuitive user interfaces for innovative technology products.',
      'Continuous improvement of the user experience and maintenance of quality standards.',
      'Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product.'
    ],
  },
  octupus: {
    period: '2020 - 2022',
    position: 'Middle Frontend Developer',
    company: 'Octupus',
    companyLink: 'https://google.com',
    mainPoints: [
      'Continuous improvement of the user experience and maintenance of quality standards.',
      'Design and implementation of visually appealing and intuitive user interfaces for innovative technology products.',
      'Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product.'
    ],
  },
  varlik: {
    period: '2019 - 2020',
    position: 'Junior Frontend Developer',
    company: 'Varlik',
    companyLink: 'https://google.com',
    mainPoints: [
      'Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product.',
      'Design and implementation of visually appealing and intuitive user interfaces for innovative technology products.',
      'Continuous improvement of the user experience and maintenance of quality standards.',
    ],
  }
}
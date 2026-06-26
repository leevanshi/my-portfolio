import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Leevanshi Sharma',
  subTitle: 'Full Stack Dev | AI Builder | Founder of eCanteen',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Leevanshi Sharma Portfolio',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'About Me',
      infos: [
        "* I am a Computer Engineering student passionate about building impactful technology solutions.",
        '* As the Founder of eCanteen, I focus on solving real-world problems through software development, AI, cloud technologies, and entrepreneurship.',
        '* I enjoy creating scalable applications, leading teams, organizing events, and contributing to social initiatives.',
        '* Building AI-Powered Products, Scalable Applications & Real-World Solutions.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Projects'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Featured Projects',
      imageList: EXPERIENCE,
      footer: 'Navigate through projects using arrows',
    },
    {
      scale: 15,
      displayAt: displayAt('Awards'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Awards & Honors',
      footer: 'Recognition & Impact',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Skills',
      footer: 'Full Stack & AI Expertise',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL: '#skills',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Contact'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Get In Touch',
      footer: 'Let\'s build something amazing together',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/leevanshi',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL: 'https://linkedin.com/in/leevanshisharma',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:leevanshi@example.com',
          },
        ],
      },
    },
  ],
};

export default configs;

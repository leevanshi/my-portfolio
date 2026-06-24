import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Leevanshi Sharma',
  subTitle: 'Founder | Dev | AI Builder',
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
      title: 'Projects',
      imageList: EXPERIENCE,
      footer: 'Click to explore my work',
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Experience',
      footer: 'Building the future',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Leadership'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Leadership',
      footer: 'Leading teams & initiatives',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL: '#leadership',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'Full Stack & AI Expertise',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/nft-place-logo.png',
            websiteURL: '#skills',
          },
          {
            url: 'websites-preview/snow-hero.png',
            websiteURL: '#skills',
          },
          {
            url: 'websites-preview/minecraft-in-js.png',
            websiteURL: '#skills',
          },
          {
            url: 'websites-preview/fish-chopter.png',
            websiteURL: '#skills',
          },
          {
            url: 'websites-preview/odd-clowns.png',
            websiteURL: '#skills',
          },
          {
            url: 'websites-preview/island-ai.png',
            websiteURL: '#skills',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Contact'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'Get In Touch',
      footer: 'Let\'s build something amazing together',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
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

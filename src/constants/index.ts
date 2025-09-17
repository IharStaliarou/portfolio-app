import {
  Briefcase,
  Code,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const CONTACT_SECTION_ITEMS = [
  {
    component: Github,
    link: 'https://github.com/IharStaliarou',
  },
  {
    component: Linkedin,
    link: 'https://www.linkedin.com/in/ihar-staliarou/',
  },
  { component: Instagram, link: 'https://www.instagram.com/iggygrin/' },
];

export const CONTACT_INFORMATION_ITEMS = [
  {
    title: 'Email',
    value: 'ihar.staliarou.dev@gmail.com',
    icon: Mail,
    href: 'mailto:ihar.staliarou.dev@gmail.com',
  },
  {
    title: 'Phone',
    value: '+375 (29) 325-45-40',
    icon: Phone,
    href: 'tel: +375293254540',
  },
  { title: 'Location', value: 'Mogilev, Belarus', icon: MapPin, href: '' },
];

export const AREAS_OF_ACTIVITY = [
  {
    title: 'Web Development',
    description:
      'Creating responsive websites and web applications with modern frameworks.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing intuitive user interfaces and seamless user experiences.',
    icon: User,
  },
  {
    title: 'Support and Testing',
    description: 'Support and testing of legacy projects.',
    icon: Briefcase,
  },
];

export const SKILLS = [
  // Frontend
  { name: 'HTML', level: 85, category: 'frontend' },
  { name: 'CSS(SCSS/SASS)', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 60, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Redux(RTK/Zustand)', level: 80, category: 'frontend' },
  { name: 'Storybook', level: 70, category: 'frontend' },
  { name: 'Material UI', level: 70, category: 'frontend' },
  { name: 'Ant Design', level: 70, category: 'frontend' },
  { name: 'Zod', level: 70, category: 'frontend' },
  { name: 'React-hook-form', level: 70, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 50, category: 'backend' },
  { name: 'Express', level: 50, category: 'backend' },
  { name: 'NestJS', level: 20, category: 'backend' },
  { name: 'PostgreSQL', level: 30, category: 'backend' },
  { name: 'Prisma', level: 40, category: 'backend' },

  // Tools
  { name: 'Git/GitHub/GitLab', level: 90, category: 'tools' },
  { name: 'Webpack', level: 70, category: 'tools' },
  { name: 'Vite', level: 70, category: 'tools' },
  { name: 'Jira', level: 90, category: 'tools' },
];

export const PROJECTS = [];

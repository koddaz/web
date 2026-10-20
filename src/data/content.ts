import type { ImageSourcePropType } from 'react-native';
import type { IconName } from '../components/icons';

export type ProjectStatus = 'current' | 'completed';

export type Project = {
  id: string;
  title: string;
  years: string;
  status: ProjectStatus;
  statusLabel: string;
  shortDescription: string;
  description: string;
  features?: string[];
  stack: string[];
  highlights: string[];
  platform?: string;
  images: ImageSourcePropType[];
  appStoreUrl?: string;
};

export const profile = {
  name: 'Albert Niklasson',
  role: 'Android & iOS developer',
  bio: "I'm a passionate developer who loves creating innovative solutions. With a focus on modern technologies I build user-friendly, scalable applications. My passion for coding started early and grew into a career where I combine creativity with technical problem-solving.",
  avatarSource: require('../img/profile/20260101_125111.jpg') as ImageSourcePropType,
};

export const experience = {
  title: 'Internship, Mobile app development',
  meta: '2024–2025',
  description:
    'Developed emmiSense, a cross-platform mobile app for iOS and Android. Worked with Swift, SwiftUI, Kotlin and Jetpack Compose.',
};

export const education = {
  title: 'Android and iOS developer',
  meta: 'Malmö Yrkeshögskola · 2025',
  description: 'Specialisation in mobile app development for Android and iOS.',
};

export const skills: string[] = [
  'Swift',
  'SwiftUI',
  'Kotlin',
  'Jetpack Compose',
  'React Native',
  'TypeScript',
  'Python',
  'PostgreSQL',
  'Figma',
  'Git',
];

export const projects: Project[] = [
  {
    id: 'emmisense',
    title: 'emmiSense',
    years: '2024–2025',
    status: 'current',
    statusLabel: 'IN PROGRESS',
    shortDescription: 'Diabetes diary · React Native · 2024–2025',
    description:
      'React Native diabetes management app to log meals, blood glucose, insulin and activity.',
    features: ['Diary', 'Statistics', 'Camera', 'Authentication'],
    stack: ['React Native', 'TypeScript', 'Supabase', 'PostgreSQL'],
    highlights: [
      'Supabase/PostgreSQL based',
      'Deep linking for email verification',
      'Custom hooks for database, camera, calendar and statistics',
      'Automatic session handling with token refresh',
      'Consistent spacing & color system',
    ],
    platform: 'iOS · Android',
    images: [
      require('../img/emmisense/login.jpg'),
      require('../img/emmisense/login2.jpg'),
      require('../img/emmisense/entry.jpg'),
      require('../img/emmisense/home.jpg'),
      require('../img/emmisense/input.jpg'),
      require('../img/emmisense/input2.jpg'),
      require('../img/emmisense/history.jpg'),
      require('../img/emmisense/stats.jpg'),
      require('../img/emmisense/settings.jpg'),
      require('../img/emmisense/settings2.jpg'),
    ],
  },
  {
    id: 'mycrave',
    title: 'MyCrave',
    years: '2024',
    status: 'completed',
    statusLabel: 'COMPLETED',
    shortDescription: 'Restaurant finder · Swift · 2024',
    description:
      'iOS app for finding restaurants near you with an integrated map and location services. Published on the App Store. Group project: contributed to design, mainly implemented Google Maps and Location.',
    stack: ['Swift', 'SwiftUI', 'Maps API', 'Location API'],
    highlights: [
      'Published on App Store',
      'Google Maps integration',
      'Location-based services',
      'iOS native',
    ],
    platform: 'iOS',
    images: [
      require('../img/restfinder/IMG_0002.png'),
      require('../img/restfinder/IMG_0003.png'),
      require('../img/restfinder/IMG_0004.png'),
      require('../img/restfinder/IMG_0005.png'),
    ],
    appStoreUrl: 'https://apps.apple.com/se/app/mycrave/id6741516126',
  },
  {
    id: 'nuerd',
    title: 'Nuerd',
    years: '2024',
    status: 'completed',
    statusLabel: 'COMPLETED',
    shortDescription: 'Math learning game · Kotlin · 2024',
    description:
      'A math game focused on learning the multiplication tables, built for Android with Jetpack Compose.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    highlights: [
      'Android native',
      'Educational focus',
      'Interactive learning',
      'Multiplication tables',
    ],
    platform: 'Android',
    images: [
      require('../img/nuerd/Screenshot_20250630_192806_Nuerd.jpg'),
      require('../img/nuerd/Screenshot_20250630_192825_Nuerd.jpg'),
      require('../img/nuerd/Screenshot_20250630_195029_Nuerd.jpg'),
      require('../img/nuerd/Screenshot_20250630_195033_Nuerd.jpg'),
      require('../img/nuerd/Screenshot_20250630_195045_Nuerd.jpg'),
    ],
  },
];

export type ContactChannelId = 'email' | 'github' | 'linkedin';

export type ContactChannel = {
  id: ContactChannelId;
  label: string;
  value: string;
  displayValue: string;
  iconCircleBg: 'accent' | 'text' | 'accent2';
  icon: IconName;
};

export const contactIntro = 'Open to mobile dev roles. Reach me any of these ways.';

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'albert.niklasson@gmail.com',
    displayValue: 'albert.niklasson@gmail.com',
    iconCircleBg: 'accent',
    icon: 'mail',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'https://github.com/koddaz',
    displayValue: 'github.com/koddaz',
    iconCircleBg: 'text',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/albert-niklasson-6b4a37207',
    displayValue: 'linkedin.com/in/albert-niklasson',
    iconCircleBg: 'accent2',
    icon: 'linkedin',
  },
];

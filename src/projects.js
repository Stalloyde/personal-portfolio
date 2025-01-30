import techAndThreads from './project-screenshots/Tech&Threads.png';
import whereswaldoImg from './project-screenshots/whereswaldo-screenshot.png';
import blogApiImg from './project-screenshots/blogapi-screenshot.png';
import messagingAppImg from './project-screenshots/messagin-app-screenshot.png';
import autocoachImg from './project-screenshots/autocoach-app-screenshot.png';

const projects = [
  {
    name: 'Messaging App',
    description:
      'Manage contacts, create groups and chat in real-time in this messaging site. Below are three demo username-password combinations to test the site out:',
    demoInfo: [
      { username: 'user', password: '123' },
      { username: 'pineapple', password: '123' },
      { username: 'bae2won', password: '123' },
    ],
    techStack: [
      'NodeJS',
      'Express',
      'PostgreSQL',
      'Prisma',
      'React',
      'Typescript',
      'CSS',
      'Socket.io',
    ],
    repo: 'https://github.com/Stalloyde/messagingapp-client',
    live: 'https://messagingapp-client.vercel.app ',
    imageUrl: messagingAppImg,
  },
  {
    name: 'Auto-Coach',
    description:
      'Automates the repetitive task of sending swimmers off on an interval, allowing myself to provide more value to the athletes.',
    techStack: [
      'NodeJS',
      'Express',
      'PostgreSQL',
      'Prisma',
      'React',
      'Typescript',
      'Tailwind',
    ],
    repo: 'https://github.com/Stalloyde/autocoach',
    live: 'https://autocoach.vercel.app',
    imageUrl: autocoachImg,
  },
  {
    name: "Where's Waldo",
    description:
      "A classic Where's Waldo game. Search and identify the characters as quickly as possible.",
    techStack: [
      'NodeJS',
      'Express',
      'Vitest',
      'MongoDB',
      'React',
      'Typescript',
      'CSS',
    ],
    repo: 'https://github.com/Stalloyde/wheres-waldo',
    live: 'https://wheres-waldo-six.vercel.app/',
    imageUrl: whereswaldoImg,
  },
  {
    name: 'Blog Site',
    description:
      'A full-stack single author blog site with public access for reading. Authentication is required to leave comments.',
    description2:
      'The project includes RESTFUL API and a private CMS site where the author can perform CRUD operations on posts and comments.',
    techStack: ['NodeJS', 'Express', 'MongoDB', 'React', 'Typescript', 'CSS'],
    repo: 'https://github.com/Stalloyde/blogapi-client',
    live: 'https://blogapi-client-stalloyde.vercel.app/posts',
    imageUrl: blogApiImg,
  },
  {
    name: 'Tech & Threads',
    description:
      'A front-end e-commerce site with products fetched from FakeStoreAPI, shopping cart feature and full mobile responsiveness.',
    techStack: ['HTML', 'CSS', 'TypeScript', 'React', 'Vitest'],
    repo: 'https://github.com/Stalloyde/shopping-cart',
    live: 'https://shopping-cart-green-one.vercel.app/',
    imageUrl: techAndThreads,
  },
];

export default projects;

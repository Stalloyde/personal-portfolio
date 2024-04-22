import techAndThreads from './project-screenshots/Tech&Threads.png';
import whereswaldoImg from './project-screenshots/whereswaldo-screenshot.png';
import blogApiImg from './project-screenshots/blogapi-screenshot.png';

const projects = [
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

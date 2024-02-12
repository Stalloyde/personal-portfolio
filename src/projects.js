import techAndThreads from './project-screenshots/Tech&Threads.png';
import battleshipImg from './project-screenshots/Battleship-screenshot.png';
import blogApiImg from './project-screenshots/blogapi-screenshot.png';

const projects = [
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
  {
    name: 'Battleship',
    description:
      'A single player classic Battleship game developed with Test-driven development in vanilla JavaScript.',
    techStack: ['HTML', 'CSS', 'Javascript', 'Jest'],
    repo: 'https://github.com/Stalloyde/battleship',
    live: 'https://stalloyde.github.io/battleship/',
    imageUrl: battleshipImg,
  },
];

export default projects;

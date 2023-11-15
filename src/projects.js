import techAndThreads from './project-screenshots/Tech&Threads.png';
import battleshipImg from './project-screenshots/Battleship-screenshot.png';
import memoryCardImg from './project-screenshots/memory-card-screenshot.png';

const projects = [
  {
    name: 'Tech & Threads',
    description: 'A front-end e-commerce site',
    techStack: ['HTML', 'CSS', 'TypeScript', 'React', 'Vitest'],
    repo: 'https://github.com/Stalloyde/shopping-cart',
    live: 'https://shopping-cart-green-one.vercel.app/',
    imageUrl: techAndThreads,
  },
  {
    name: 'Battleship',
    description:
      'A single player classic Battleship game',
    techStack: ['HTML', 'CSS', 'Javascript', 'Jest'],
    repo: 'https://github.com/Stalloyde/battleship',
    live: 'https://stalloyde.github.io/battleship/',
    imageUrl: battleshipImg,
  },
  {
    name: 'Star Wars Memory Card Game',
    description:
      'Memory card game in the theme of Star Wars',
    techStack: ['HTML', 'CSS', 'React'],
    repo: 'https://github.com/Stalloyde/memory-card',
    live: 'https://memory-card-navy.vercel.app/',
    imageUrl: memoryCardImg,
  },
];

export default projects;

import techAndThreads from './project-screenshots/Tech&Threads.png';
import battleshipImg from './project-screenshots/Battleship-screenshot.png';
import sportsTeamDirectoryImg from './project-screenshots/sports-team-directory-screenshot.png';

const projects = [
  {
    name: 'Sports Team Directory',
    description:
      'A directory page of a sports team\'s with full CRUD features.',
    description2:
      'PASSWORD TO CRUD ACTIONS: `password`',
    techStack: ['NodeJS', 'Express','MongoDB', 'Pug'],
    repo: 'https://github.com/Stalloyde/Squad_Roster',
    live: 'https://squadroster-production.up.railway.app/home',
    imageUrl: sportsTeamDirectoryImg,
  },
  {
    name: 'Tech & Threads',
    description: 'A front-end e-commerce site with products fetched from FakeStoreAPI, shopping cart feature and full mobile responsiveness.',
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

import techAndThreads from './project-screenshots/Tech&Threads.png';
import battleshipImg from './project-screenshots/Battleship-screenshot.png';
import membersOnlyImg from './project-screenshots/members-only-screenshot.png';

const projects = [
  {
    name: 'Members Only',
    description:
      'A forum where anyone can post and view anonymous messages. VIP users can view the username of messages. MODERATORS, who are invited to the role with a special password, have additional details of date & time posted and the feature to delete messages. ',
    description2:
      'INVITATION PASSWORD TO MODERATOR ACCOUNT IS NOT AVAILABLE TO PUBLIC',
    techStack: ['NodeJS', 'Express','MongoDB', 'Pug', 'PassportJS', 'CSS'],
    repo: 'https://github.com/Stalloyde/members-only',
    live: 'https://members-only-stalloyde.fly.dev/members/member',
    imageUrl: membersOnlyImg,
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

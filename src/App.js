import React, { useState, useEffect } from 'react';
import projects from './projects';
import { DropDownMenu, Menu } from './Menu';
import './App.css';
import htmlIcon from './Icons/html-5.svg';
import htmlIconDark from './Icons/dark-mode-icons/html-5-dark.svg';
import cssIcon from './Icons/css-3.svg';
import cssIconDark from './Icons/dark-mode-icons/css-3-dark.svg';
import githubIcon from './Icons/github-icon.svg';
import githubIconDark from './Icons/dark-mode-icons/github-icon-dark.svg';
import jsIcon from './Icons/javascript.svg';
import jestIcon from './Icons/jest.svg';
import reactIcon from './Icons/react.svg';
import typescriptIcon from './Icons/typescript-icon.svg';
import linkedinIcon from './Icons/linkedin-icon.svg';
import instagramIcon from './Icons/instagram-icon.svg';
import gmailIcon from './Icons/google-gmail.svg';
import nodejsIcon from './Icons/nodejs-logo.svg';
import nodejsIconDark from './Icons/dark-mode-icons/nodejs-logo-dark.svg';
import expressjsIcon from './Icons/expressjs.svg';
import expressjsIconDark from './Icons/dark-mode-icons/expressjs-dark.svg';
import CV from './CV_EthanChan.pdf';

const Header = ({ isDarkMode, handleDarkModeClick }) => {
  const [isMenuClick, setMenuClick] = useState(false);

  return (
    <header>
      <h1>Ethan Chan</h1>

      <nav>
        <a className='mobile-view-hide' href='#about'>
          About
        </a>
        <a className='mobile-view-hide' href='#projects'>
          Projects
        </a>
        <a className='mobile-view-hide' href='#contact'>
          Contact
        </a>

        {isDarkMode ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            viewBox='0 -960 960 960'
            width='48'
            onClick={handleDarkModeClick}
          >
            <path
              fill='currentColor'
              d='M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            viewBox='0 -960 960 960'
            width='48'
            onClick={handleDarkModeClick}
          >
            <path
              fill='currentColor'
              d='M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z'
            />
          </svg>
        )}
        <Menu isMenuClick={isMenuClick} setMenuClick={setMenuClick} />
      </nav>
      {isMenuClick && (
        <DropDownMenu isMenuClick={isMenuClick} setMenuClick={setMenuClick} />
      )}
    </header>
  );
};

const About = ({ mode }) => {
  const lightImages = [
    {
      src: htmlIcon,
      className: 'about-tech-stack',
      alt: 'html-icon',
      p: 'HTML5',
    },
    {
      src: cssIcon,
      className: 'about-tech-stack',
      alt: 'html-icon',
      p: 'CSS3',
    },
    {
      src: jsIcon,
      className: 'about-tech-stack',
      alt: 'js-icon',
      p: 'ES6',
    },
    {
      src: reactIcon,
      className: 'about-tech-stack',
      alt: 'react-icon',
      p: 'React',
    },
    {
      src: typescriptIcon,
      className: 'about-tech-stack',
      alt: 'typescript-icon',
      p: 'TypeScript',
    },
    {
      src: jestIcon,
      className: 'about-tech-stack',
      alt: 'jest-icon',
      p: 'Jest',
    },
    {
      src: nodejsIcon,
      className: 'about-tech-stack',
      alt: 'nodejs-icon',
      p: 'NodeJS',
    },
    {
      src: expressjsIcon,
      className: 'about-tech-stack',
      alt: 'expressjs-icon',
      p: 'ExpressJS',
    },
    {
      src: githubIcon,
      className: 'about-tech-stack',
      alt: 'github-icon',
      p: 'GitHub',
    },
  ];

  const darkImages = [
    {
      src: htmlIconDark,
      className: 'about-tech-stack',
      alt: 'html-icon',
      p: 'HTML5',
    },
    {
      src: cssIconDark,
      className: 'about-tech-stack',
      alt: 'html-icon',
      p: 'CSS3',
    },
    {
      src: jsIcon,
      className: 'about-tech-stack',
      alt: 'js-icon',
      p: 'ES6',
    },
    {
      src: reactIcon,
      className: 'about-tech-stack',
      alt: 'react-icon',
      p: 'React',
    },
    {
      src: typescriptIcon,
      className: 'about-tech-stack',
      alt: 'typescript-icon',
      p: 'TypeScript',
    },
    {
      src: jestIcon,
      className: 'about-tech-stack',
      alt: 'jest-icon',
      p: 'Jest',
    },
    {
      src: nodejsIconDark,
      className: 'about-tech-stack',
      alt: 'nodejs-icon',
      p: 'NodeJS',
    },
    {
      src: expressjsIconDark,
      className: 'about-tech-stack',
      alt: 'expressjs-icon',
      p: 'ExpressJS',
    },
    {
      src: githubIconDark,
      className: 'about-tech-stack',
      alt: 'github-icon',
      p: 'GitHub',
    },
  ];

  return (
    <>
      <h2>About</h2>
      <p>
        <strong> Full-Stack Developer </strong>
      </p>
      <p>
      A Singapore Permanent Resident currently employed as a swimming coach, I have a
      proven track record of planning and fostering skill development. I’m seeking to leverage
      my analytical and problem-solving skills in a transition to a software developer role.
      Eager to apply strong communication skills, attention to detail and collaborative spirit to
      create intuitive web applications.
      </p>
      <ul>
        {mode === 'light' ? (
          <>
            {lightImages.map((image) => (
              <li key={image.p}>
                <img
                  src={image.src}
                  className={image.className}
                  alt={image.alt}
                />
                <p>{image.p}</p>
              </li>
            ))}
          </>
        ) : (
          <>
            {darkImages.map((image) => (
              <li key={image.p}>
                <img
                  src={image.src}
                  className={image.className}
                  alt={image.alt}
                />
                <p>{image.p}</p>
              </li>
            ))}
          </>
        )}
      </ul>
      <div className='project-links'>
        <a href={CV} download="CV_EthanChan" target='_blank' rel="noreferrer">
          Download my CV
        </a>
    </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>

      {projects.map((project) => {
        if (project.description2) {
          return (
            <article key={project.name}>
              <img
                src={project.imageUrl}
                alt='project-screenshot'
                className='project-screenshot'
              />
              <div className='project-details'>
                <h3>{project.name}</h3>
                {project.description}
                <br></br>
                <br></br>
                <strong>{project.description2}</strong>
                <br></br>
                <br></br>
                This project was developed using:
                <ul>
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className='project-links'>
                  <a href={project.repo}>Repository</a>
                  <a href={project.live}>Live Demo</a>
                </div>
              </div>
            </article>
          )
        } else {
          return (
            <article key={project.name}>
              <img
                src={project.imageUrl}
                alt='project-screenshot'
                className='project-screenshot'
              />
              <div className='project-details'>
                <h3>{project.name}</h3>
                {project.description}
                <br></br>
                <br></br>
                This project was developed using:
                <ul>
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className='project-links'>
                  <a href={project.repo}>Repository</a>
                  <a href={project.live}>Live Demo</a>
                </div>
              </div>
            </article>
          )
        }
      })}
    </>
  );
};

const Contact = ({ mode }) => {
  return (
    <>
      <h2>Contact</h2>
      <div>
        <img src={gmailIcon} className='contact-icons' alt='gmail-icon' />
        <span>ooithong.chan@gmail.com</span>
      </div>
      <div>
        <div>
          <a href='https://github.com/Stalloyde'>
            {mode === 'light' ? (
              <img
                src={githubIcon}
                className='contact-icons'
                alt='linkedin-icon'
              />
            ) : (
              <img
                src={githubIconDark}
                className='contact-icons'
                alt='linkedin-icon'
              />
            )}
            GitHub
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/chan-ooi-thong-ethan/'>
            <img
              src={linkedinIcon}
              className='contact-icons'
              alt='linkedin-icon'
            />
            LinkedIn
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/ethan.learns2code/'>
            <img
              src={instagramIcon}
              className='contact-icons'
              alt='instagram-icon'
            />
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return <>Created by Ethan Chan @ 2023</>;
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState('light');

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    isDarkMode ? setMode('dark') : setMode('light');
  }, [isDarkMode]);

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        handleDarkModeClick={handleDarkModeClick}
      />

      <main className={mode}>
        <section id='about'>
          <About mode={mode} />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact mode={mode} />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;

import React from 'react';

export const DropDownMenu = ({ isMenuClick, setMenuClick }) => {
  return (
    <nav className='drop-down-menu-nav'>
      <a
        href='#about'
        onClick={() => {
          setMenuClick(!isMenuClick);
        }}
      >
        About
      </a>
      <a
        href='#projects'
        onClick={() => {
          setMenuClick(!isMenuClick);
        }}
      >
        Projects
      </a>
      <a
        href='#contact'
        onClick={() => {
          setMenuClick(!isMenuClick);
        }}
      >
        Contact
      </a>
    </nav>
  );
};

export const Menu = ({ isMenuClick, setMenuClick }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='48'
        viewBox='0 -960 960 960'
        width='48'
        className='menu-icon'
        onClick={() => setMenuClick(!isMenuClick)}
      >
        <path
          fill='currentColor'
          d='M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z'
        />
      </svg>
    </>
  );
};

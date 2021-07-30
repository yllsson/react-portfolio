import React from 'react';

const Header = () => {
  return (
    <header>
      <img
        src='/images/icon.png'
        alt="A circular icon with an illustration of Ylva's head facing to the right."
      />

      <nav>
        <a href='#title'>
          <span class='hover'>Home</span>
        </a>
        <a href='#projects'>
          <span class='hover'>Projects</span>
        </a>
        <a href='#contact'>
          <span class='hover'>Contact</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import './Header.css';
import logo from '../../seekerlogo.svg';

const Header = () => {
  return (
    <div className='HeaderContainer'>
      <div className='innerHeaderContainer'>
        <img src={logo} alt='seekerlogo' className='seekerlogo' />
        <ul className='navSearchCriteria'>
          <li>Home</li>
          <li>How it Works</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

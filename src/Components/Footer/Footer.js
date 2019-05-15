import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='FooterContainer'>
      <div className='innerFooterContainer'>
        <div>2019 Seeker</div>
        <ul className='FooterSearchCriteria'>
          <li>T & C</li>
          <li>Privacy</li>
          <li>How it Works</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

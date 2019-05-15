import React from 'react';
import './FirstSection.css';
import Header from '../First_Section/Header';

const FirstSection = () => {
  return (
    <div className='FirstSection'>
      <Header />
      <div className='FirstSectionContainer'>
        <h1 className='firstsectionheader all'>
          <span id='ConnectingThe'> Connecting The </span>World's Gems
        </h1>
        <p className='firstsectionparagraph all'>
          Effortlessly Turning Your Skills into a Profit on a Fast, Convenient
          and Safe Platform!
        </p>
        <div className='firstsectionbuttonDiv all'>
          <button className='firstsectionbuttonApp firstsectionbutton'>
            <img
              src='https://www.actaturcica.com/wp-content/uploads/2018/06/Apple-Grey-Logo-PNG-Transparent.png'
              alt='apple logo'
              width='20px'
              height='20px'
              className='applestoreimg'
            />
            <span id='text'> App Store</span>
          </button>
          <button className='firstsectionbuttonPlay firstsectionbutton'>
            <img
              src='https://cdn0.iconfinder.com/data/icons/mii-ui-vol-3/133/playstore-512.png'
              alt='playstore'
              width='20px'
              height='20px'
              className='playstoreimg'
            />
            <span id='text'> Play Store</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

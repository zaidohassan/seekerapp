import React from 'react';
import './second_section.css';
import brain from '../../brain.svg';
import readbook from '../../readbook.svg';
import mountain from '../../mountain.svg';

const SecondSection = () => {
  return (
    <div className='Second_Container'>
      <div className='first_text'>
        <h1>How It Works</h1>
        <div id='p'>
          <span> Discover how Seeker can help you connect with </span>
          <span> Students looking to learn your skill. </span>
        </div>
        <div id='border' />
      </div>
      <div className='second_text'>
        <div className='pic1'>
          <img src={brain} alt='have' />
          <h1 className='picHeader'>Have A Skill to Teach</h1>
          <span>
            Effortlessly, add your desired skill <br /> with your preferred Rate
            and Availability
          </span>
        </div>
        <div className='pic1'>
          <img src={readbook} alt='connect with students' />
          <h1 className='picHeader'>Connect With Students</h1>
          <span>
            Find & connect with students <br /> looking to learn your skill
          </span>
        </div>
        <div className='pic1'>
          <img src={mountain} alt='no limit on your potiental' />
          <h1 className='picHeader' id='mountain'>
            No Limits On Your Potential
          </h1>
          <span>
            Take Advantage of Seeker's features to <br /> Profit without limits.
            All tutors <br /> keep 100% of all Earnings!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

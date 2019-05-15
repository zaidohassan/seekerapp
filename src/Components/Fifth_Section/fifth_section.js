import React from 'react';
import './fifth_section.css';

const FifthSection = () => {
  return (
    <div className='container5'>
      <div className='innerContainer5'>
        <div id='text5'>
          <h1 id='h5'>Contact Us!</h1>
          <div id='border5' />
        </div>
        <div className='contactContainer'>
          <div className='section1'>
            <input type='text' placeholder='Email' className='inputs' />
            <input type='text' placeholder='Name' className='inputs' />
            <input type='text' placeholder='Subject' className='inputs' />
          </div>
          <div className='section2'>
            <textarea placeholder='Message' id='input4' className='inputs' />
            <div id='button5'>
              <button id='contactbutton'> SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;

import React from 'react';
import './fourth_section.css';
import pic1 from '../../section4pic1.svg';
import pic2 from '../../section4pic2.svg';
import pic3 from '../../section4pic3.svg';

const FourthSection = () => {
  return (
    <div className='container4'>
      <div className='innerContainer4'>
        <div id='text4'>
          <h1>Our Commitment To You</h1>
          <div id='border4' />
        </div>
        <div id='entirePicContainer'>
          <div className='pics' id='pic1'>
            <img src={pic1} alt='secured funds' />
          </div>
          <div className='pics' id='pic2'>
            <img src={pic2} alt='concenience' />
          </div>
          <div className='pics' id='pic3'>
            <img src={pic3} alt='satisfied students' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;

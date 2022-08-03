import React from 'react';
import { Link } from 'react-router-dom';

import './landingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing__page'>
      <div className='landing__image'>
        <img src='/assets/landing.png' alt='landing page' />
      </div>
      <div className='landing__cta'>
        <h1>
          Crypto with <span>passion</span> or <br /> not at all<span>!</span>
        </h1>
        <br />
        <Link to='/cryptocurrencies' className='fill'>
          crypto
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

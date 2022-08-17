import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <section className='header'>
      <div className='header__logo'>
        <img src='/assets/logo.png' alt='Company logo' />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
        </ul>
      </div>
      <div className='contact__socials'>
        <div className='contacts'>
          <span>cryptoking@crypto.co</span>
        </div>
        <span className='line'></span>
        <div className='socials'>
          <span>
            <img src='/assets/social-twitter.svg' alt='' />
          </span>
          <span>
            <img src='/assets/social-facebook.svg' alt='' />
          </span>
          <span>
            <img src='/assets/social-instagram.svg' alt='' />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;

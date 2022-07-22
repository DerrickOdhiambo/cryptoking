import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <section className='header'>
      <div className='header__logo'>
        <img src='/assets/logo.png' alt='' />
      </div>
      <div className='nav__bar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </li>
          <li>
            <Link to='/exchanges'>Exchange</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

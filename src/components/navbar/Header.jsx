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
            <Link to=''>Cryptocurrencies</Link>
          </li>
          <li>
            <Link to=''>Exchange</Link>
          </li>
          <li>
            <Link to=''>News</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

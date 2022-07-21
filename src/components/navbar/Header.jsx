import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <section className='header'>
      <div className='header__logo'>
        <p>
          Crypto<span>King</span>
        </p>
      </div>
      <div className='account'>
        <span>Account</span>
      </div>
    </section>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './landingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing__page'>
      <div className='landing__cta'>
        <h3>Lorem Ipsum Dolor</h3>
        <h1>
          let things go <br /> better with <br /> cryptocurrency
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus delectus, iusto nam ipsa incidunt placeat odio non
          exercitationem
        </p>
        <div className='cta__button'>
          <Link to='/cryptocurrencies' className='fill'>
            <span>
              <span>crypto</span>
              <span>
                <img src='/assets/downward.png' alt='downward arrow' />
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div className='landing__image'>
        <img src='/assets/logo.png' alt='landing page logo' />
      </div>
    </div>
  );
};

export default LandingPage;

import React from 'react';

import './subscribe.scss';

const Subscribe = () => {
  return (
    <div className='subscribe__container'>
      <div className='subscribe'>
        <div className='subscribe__cta'>
          <p>
            subscribe to our newsletter <br /> for more updates
          </p>
        </div>
        <div className='subscribe__form'>
          <div className='form__control'>
            <input type='email' placeholder='Enter your email address ...' />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

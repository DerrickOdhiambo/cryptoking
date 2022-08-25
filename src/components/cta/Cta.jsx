import React from 'react';
import { Link } from 'react-router-dom';

import './cta.scss';

import { IoIosArrowRoundForward } from 'react-icons/io';

const Cta = () => {
  return (
    <div className='cta'>
      <div className='cta__container'>
        <h2>
          Digital currency <br /> evolution
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eos
          <br /> repudiandae quia rem et saepe, iste magnam voluptatum
        </p>
        <div className='cta__button'>
          <Link to='/cryptocurrencies' className='fill'>
            <span>
              <span>get started</span>
              <span id='arrow'>
                <IoIosArrowRoundForward />
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div className='cta__image'>
        <img src='/assets/bitcoin.png' alt='bitcoin graph' />
      </div>
    </div>
  );
};

export default Cta;

import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer'>
        <div className='upper__footer'>
          <div className='about'>
            <h4>about us</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dignissimos laudantium molestiae ut hic aut natus nam similique
              culpa consectetur, ullam minus ea sunt autem eaque nostrum, alias
              praesentium eos.
            </p>
          </div>
          <div className='links'>
            <h4>quick links</h4>
            <p>
              <Link to='/'>Home</Link>
            </p>
            <p>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </p>
            <p>
              <Link to='/news'>News</Link>
            </p>
          </div>
          <div className='support'>
            <h4>support</h4>
            <p>call us today</p>
            <p>012 345 6789</p>
          </div>
          <div className='socials'>
            <h4>socials</h4>
            <span>
              <img src='/assets/social-facebook.svg' alt='facebook icon' />
            </span>
            <span>
              <img src='/assets/social-instagram.svg' alt='onstagram icon' />
            </span>
            <span>
              <img src='/assets/social-twitter.svg' alt='twitter icon' />
            </span>
          </div>
        </div>
        <div className='lower__footer'>
          <span>copyright 2022 all rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

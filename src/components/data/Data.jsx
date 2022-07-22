import React from 'react';

import './data.scss';

const Data = () => {
  return (
    <div className='data__visualization'>
      <h1>Global crypto stats</h1>
      <div className='data__stats'>
        <div className='data'>
          <p>Total cryptocurrencies</p>
          <span>5</span>
        </div>
        <div className='data'>
          <p>total exchanges</p>
          <span>5</span>
        </div>
        <div className='data'>
          <p>total market cap</p>
          <span>5</span>
        </div>
        <div className='data'>
          <p>total 24th volume</p>
          <span>5</span>
        </div>
        <div className='data'>
          <p>total markets</p>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Data;

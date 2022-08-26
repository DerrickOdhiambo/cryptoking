import React from 'react';

import './coinInfo.scss';

const CoinInfo = () => {
  return (
    <div className='info__container'>
      {/* <h3>Why get into cryptocurrency?</h3> */}
      <div className='coin__info'>
        <div className='info'>
          <img src='/assets/building.png' alt='bank building' />
          <p>financial inclusions</p>
        </div>
        <div className='info'>
          <img src='/assets/money.png' alt='money bag' />
          <p>easy payments</p>
        </div>
        <div className='info'>
          <img src='/assets/idea.png' alt='idea light bulb' />
          <p>innovation</p>
        </div>
        <div className='info'>
          <img src='/assets/geography.png' alt='globe' />
          <p>globalization</p>
        </div>
        <div className='info'>
          <img src='/assets/incognito.png' alt='incognito' />
          <p>no counterfeiting</p>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;

import React from 'react';
import millify from 'millify';

import './data.scss';

const Data = ({ globalStats }) => {
  return (
    <div className='data__visualization'>
      <div className='data__graph'>
        <img src='/assets/graph.png' alt='graph icon' />
      </div>
      <div className='data__stats'>
        <h3>Global crypto stats</h3>
        <div className='data__container'>
          <div className='data__stats__1'>
            <div className='data'>
              <p>Total cryptocurrencies</p>
              <span>{globalStats.total}</span>
            </div>
            <div className='data'>
              <p>total market cap</p>
              <span>{millify(globalStats.totalMarketCap)}</span>
            </div>
            <div className='data'>
              <p>total markets</p>
              <span>{millify(globalStats.totalMarkets)}</span>
            </div>
          </div>
          <div className='data__stats__2'>
            <div className='data'>
              <p>total exchanges</p>
              <span>{globalStats.totalExchanges}</span>
            </div>
            <div className='data'>
              <p>total 24h volume</p>
              <span>{millify(globalStats.total24hVolume)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

import React from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import millify from 'millify';

import './data.scss';

const Data = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  if (isFetching) return 'Loading';

  const globalStats = data?.data?.stats;

  return (
    <div className='data__visualization'>
      <h1>Global crypto stats</h1>
      <div className='data__stats'>
        <div className='data'>
          <p>Total cryptocurrencies</p>
          <span>{globalStats.total}</span>
        </div>
        <div className='data'>
          <p>total exchanges</p>
          <span>{globalStats.totalExchanges}</span>
        </div>
        <div className='data'>
          <p>total market cap</p>
          <span>{millify(globalStats.totalMarketCap)}</span>
        </div>
        <div className='data'>
          <p>total 24h volume</p>
          <span>{millify(globalStats.total24hVolume)}</span>
        </div>
        <div className='data'>
          <p>total markets</p>
          <span>{millify(globalStats.totalMarkets)}</span>
        </div>
      </div>
    </div>
  );
};

export default Data;

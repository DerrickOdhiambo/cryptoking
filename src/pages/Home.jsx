import React from 'react';
import { Link } from 'react-router-dom';
import Cryptocurrencies from '../components/crypto/Cryptocurrencies';
import Data from '../components/data/Data';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  if (isFetching) return 'Loading';

  const globalStats = data?.data?.stats;

  return (
    <div>
      <Data globalStats={globalStats} />
      <div className='top__crypto'>
        <div className='coin__title'>
          <h1>Top 10 coins</h1>
          <span>
            <Link to='/cryptocurrencies'>see more</Link>
          </span>
        </div>
        <Cryptocurrencies simplified />
      </div>
    </div>
  );
};

export default Home;

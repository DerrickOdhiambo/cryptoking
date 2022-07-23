import React from 'react';
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
      <Cryptocurrencies simplified />
    </div>
  );
};

export default Home;

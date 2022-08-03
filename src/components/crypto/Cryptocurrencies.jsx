import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';

import { useGetCryptosQuery } from '../../services/cryptoApi';

import './cryptocurrencies.scss';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredList = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredList);
  }, [searchTerm, cryptosList]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className='search__bar'>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <div className='crypto__list__container'>
        {cryptos?.map((currency) => (
          <Link to={`/currency/${currency.uuid}`}>
            <div key={currency.uuid} className='crypto__card__container'>
              <div className='card__title'>
                <div className='title'>
                  <span>{currency.rank}. </span>
                  <span>{currency.name}</span>
                </div>
                <div className='image'>
                  <img src={currency.iconUrl} alt={currency.name} />
                </div>
              </div>
              <div className='card__body'>
                <p>
                  Price <span>{millify(currency.price)}</span>
                </p>
                <p>
                  Market Cap <span>{millify(currency.marketCap)}</span>
                </p>
                <p>
                  Daily Exchange <span>{millify(currency.change)}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;

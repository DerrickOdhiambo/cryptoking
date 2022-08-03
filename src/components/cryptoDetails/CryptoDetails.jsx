import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import Loader from '../loader/Loader';

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../../services/cryptoApi';

import {
  AiOutlineDollar,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
  AiOutlineCheckCircle,
  AiOutlineStop,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';
import { FaHashtag } from 'react-icons/fa';

import './cryptodetails.scss';
import LiveChart from '../chart/LiveChart';

const CryptoDetails = () => {
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ uuid, timePeriod });
  console.log(coinHistory);

  if (isFetching) return <Loader />;

  const cryptoDetails = data?.data?.coin;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiOutlineDollar />,
    },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <FaHashtag /> },
    {
      title: '24h Volume',
      value: `$ ${
        cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])
      }`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AiOutlineDollar />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? (
        <AiOutlineCheckCircle />
      ) : (
        <AiOutlineStop />
      ),
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];

  return (
    <div className='cryto__details__container'>
      <div className='crypto__details__header'>
        <h1>
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </h1>
        <p>
          {cryptoDetails?.name} live price in US dollars. View value statistics,
          markey cap and supply
        </p>
        <select
          defaultValue='5y'
          placeholder='Select Time Period'
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
        <div className='chart'>
          <LiveChart
            currentPrice={millify(cryptoDetails?.price)}
            coinName={cryptoDetails?.name}
            coinHistory={coinHistory}
          />
        </div>
      </div>
      <div className='crypto__details__body'>
        <h2>{cryptoDetails?.name} value statistics</h2>
        <p>An overview showing the stats of {cryptoDetails?.name}</p>
        <div className='body__details'>
          <div className='details'>
            {stats.map(({ title, value, icon, index }) => (
              <div key={index} className='coin__stats'>
                <span className='icon'>{icon}</span>
                <span className='icon__title'>{title}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className='details'>
            {genericStats.map(({ title, value, icon, index }) => (
              <div key={index} className='coin__stats'>
                <span className='icon'>{icon}</span>
                <span className='icon__title'>{title}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='details__footer'>
          <div className='details__description'>
            <h3>What is {cryptoDetails?.name}?</h3>
            <span>{HTMLReactParser(cryptoDetails?.description)}</span>
          </div>
          <div className='details__links'>
            <h3>{cryptoDetails?.name} links</h3>
            {cryptoDetails?.links.map((link, index) => (
              <div key={index} className='links'>
                <span>{link.type}</span>
                <span>
                  <a href={link.url} target='_blank' rel='noreferrer'>
                    {link.name}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;

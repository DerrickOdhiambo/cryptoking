import React from 'react';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';

import './news.scss';

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 3 : 12,
  });

  if (!cryptoNews?.value) return 'Loading ...';

  const demoImage =
    'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=100&h=300&dpr=1';

  return (
    <div className='news__page'>
      {cryptoNews?.value.map((news, i) => (
        <div key={i} className='news__card'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='news__title'>
              <div>
                <p>
                  <span>{news.name}</span>
                </p>
              </div>
              <div>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news.name}
                />
              </div>
            </div>
            <div className='news__description'>
              <p>
                {news.description > 50
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
            </div>
            <div className='news__footer'>
              <div className='avatar'>
                <img
                  src={news.provider[0]?.image?.thumbnail?.contentUrl}
                  alt=''
                />
                <span>{news.provider[0]?.name}</span>
              </div>
              <div className='time__stamp'>
                <span>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;

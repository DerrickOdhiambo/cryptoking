import React from 'react';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';

import './news.scss';
import { Link } from 'react-router-dom';

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 3 : 12,
  });

  if (!cryptoNews?.value) return 'Loading ...';

  const demoImage =
    'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=100&h=300&dpr=1';

  return (
    <div className='news'>
      {simplified && (
        <div className='more__news'>
          <h3>Top news</h3>
          <Link to='/news'>
            <img src='/assets/forward.png' alt='forward arrow' />
          </Link>
        </div>
      )}
      <div className='news__page'>
        {cryptoNews?.value.map((news, i) => (
          <div key={i} className='news__card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news__title'>
                <div className='title__news'>
                  <p>
                    <span>{news.name}</span>
                  </p>
                  <div className='time__stamp'>
                    <span>
                      {moment(news.datePublished).startOf('ss').fromNow()}
                    </span>
                  </div>
                </div>
                <div className='news__image'>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt={news.name}
                  />
                </div>
              </div>
              <div className='news__description'>
                <p>`${news.description.substring(0, 100)} ...`</p>
              </div>
              <div className='news__footer'>
                <div className='avatar'>
                  <img
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    alt=''
                  />
                  <span>{news.provider[0]?.name}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

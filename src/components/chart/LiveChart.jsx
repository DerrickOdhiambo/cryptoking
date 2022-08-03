import React from 'react';

import './livechart.scss';

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LiveChart = ({ currentPrice, coinName, coinHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log(coinHistory);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i]?.timestamp * 1000
      ).toLocaleDateString()
    );
  }

  // console.log(coinTimestamp);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className='chart__container'>
        <div className='chart__header'>
          <p>{coinName} price chart</p>
          <div className='prices'>
            <span>{coinHistory?.data?.change}% </span>
            <span>
              Current {coinName} Price {currentPrice}
            </span>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LiveChart;

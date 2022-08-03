import React from 'react';
import { LineWave } from 'react-loader-spinner';

import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <LineWave
        height='100'
        width='100'
        color='#4fa94d'
        ariaLabel='line-wave'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        firstLineColor=''
        middleLineColor=''
        lastLineColor=''
      />
    </div>
  );
};

export default Loader;

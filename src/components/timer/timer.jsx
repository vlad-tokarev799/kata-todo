import React from 'react';

import './timer.css';

const Timer = () => {
  return (
    <span className="description timer">
      <button className="icon icon-play"></button>
      <button className="icon icon-pause"></button>
      <span className={'timer__time'}>12:25</span>
    </span>
  );
};

export default Timer;

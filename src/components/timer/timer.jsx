import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './timer.css';
import { decreaseTimer, selectTimers } from '../../store/slices/tasks-slice';

const transformTime = (time) => {
  const min = Math.trunc(time / 60);
  const sec = time - min * 60;

  return `${min}:${sec}`;
};

const Timer = (props) => {
  const { id } = props;
  const timers = useSelector(selectTimers);
  const dispatch = useDispatch();

  const [time, setTime] = useState(timers[id] || 0);
  const transformedTime = transformTime(time);
  const [intervalID, setIntervalID] = useState(0);

  useEffect(() => {
    setTime(timers[id]);
  }, [timers]);

  const onStartTimer = () => {
    if (!intervalID) {
      const interval = setInterval(() => {
        dispatch(decreaseTimer(id));
      }, 1000);

      setIntervalID(interval);
    }
  };

  const onPauseTimer = () => {
    clearInterval(intervalID);
  };

  return (
    <span className="description timer">
      <button className="icon icon-play" onClick={onStartTimer}></button>
      <button className="icon icon-pause" onClick={onPauseTimer}></button>
      <span className={'timer__time'}>{transformedTime}</span>
    </span>
  );
};

export default Timer;

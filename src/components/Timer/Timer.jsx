import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer(props) {
  const allTime = 60 * props.minute + props.second;

  const getPadTime = (time) => time.toString().padStart(2, '0');

  const [timeLeft, setTimeLeft] = useState(allTime);
  const [isCounting, setIsCounting] = useState(false);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const second = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const handleStart = () => {
    setIsCounting(true);
  };
  const handleStop = () => {
    setIsCounting(false);
  };

  return (
    <div className="timer">
      <span>{minutes}</span>
      <span>:</span>
      <span>{second}</span>
      {isCounting ? (
        <button onClick={handleStop} className="icon icon-pause"></button>
      ) : (
        <button onClick={handleStart} className="icon icon-play"></button>
      )}
    </div>
  );
}

export default Timer;

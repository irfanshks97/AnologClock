import React, { useEffect, useState } from "react";
import "./AnlogClock.css";
const AnologClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const hrRotation = (hr % 12) * 30 + min / 2;
  const minRotation = min * 6;
  const secRotation = sec * 6;

  return (
    <div className="container">
      <div className="clock">
        <div className="numbers">
          <span style={{ "--i": 0 }}>
            <b>12</b>
          </span>
          <span style={{ "--i": 1 }}>
            <b>3</b>
          </span>
          <span style={{ "--i": 2 }}>
            <b>6</b>
          </span>
          <span style={{ "--i": 3 }}>
            <b>9</b>
          </span>
          <div
            className="needles"
            id="hr"
            style={{ transform: `rotate(${hrRotation}deg)` }}
          >
            <i>{}</i>
          </div>
          <div
            className="needles"
            style={{ transform: `rotate(${minRotation}deg)` }}
            id="min"
          >
            <i>{}</i>
          </div>
          <div
            className="needles"
            id="sec"
            style={{ transform: `rotate(${secRotation}deg)` }}
          >
            <i>{}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnologClock;

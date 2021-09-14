import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const TimeCounter = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="App container text-center">
   
        <div className="row">
       <div className="col-lg-3 col-md-3 col-sm-3 text-center">
       <CountdownCircleTimer 
        {...timerProps}
        colors={[["#636e72"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}    >
        {({ elapsedTime }) =>
          renderTime(<p>Days</p>, getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
       </div>
      <div className="col-lg-3 col-md-3 col-sm-3 text-center">
      <CountdownCircleTimer  
        {...timerProps}
        colors={[["#636e72"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}       >
        {({ elapsedTime }) =>
          renderTime( <p>Hours</p>, getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      </div>

        <div className="col-lg-3 col-md-3 col-sm-3 text-center">
        <CountdownCircleTimer  
        {...timerProps}
        colors={[["#636e72"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime(<p>minutes </p>, getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 text-center">
        <CountdownCircleTimer  
        {...timerProps}
        colors={[["#636e72"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {({ elapsedTime }) =>
          renderTime( <p>Seconds</p>, getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
        </div>
        </div>
    </div>
  );
}

export default TimeCounter
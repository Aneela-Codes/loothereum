import {React, useEffect, useRef, useState} from 'react'

const Countdown = () => {
    const [timerDays, setDays] = useState('00')
    const [timerHours, setHours] = useState('00');
    const [timerMinutes, setMinutes] = useState('00')
    const [timerSeconds, setSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () =>{
        const countDownDate = new Date("August 14 2021 00:00:00").getTime();
        console.log(countDownDate);
        interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = countDownDate - now;
                console.log(distance);
            const days = (Math.floor(distance / (1000 * 60 * 60 *24)))*-1;
            const hours = (Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))*-1;
            const minutes= (Math.floor((distance %(1000 *60*60)) / (1000 * 60)))*-1;
            const seconds = (Math.floor((distance % (1000 * 60)) / 1000)) * -1;
           console.log(
               
           );
            console.log(days);
            console.log(hours);
            console.log(minutes);
            console.log(seconds);
          if(distance < 0) {
                // clearInterval(interval.current)

                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
          }
          else{
            clearInterval(interval.current)

                // setDays(days)
                // setHours(hours)
                // setMinutes(minutes)
                // setSeconds(seconds)
          }
        }, 1000)
    }
    
    useEffect (()=> {
        startTimer()
        return ()=> {
            clearInterval(interval);

        }
    })
    return (
        <div className="container">
            <div className="countdown_timer text-center">
            <h1 className="text-center">Next Reward Distribution in...</h1>
                <div className="row row_container">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="days">
                      <h2>{timerDays}</h2>
                      <p>Days</p>
                  
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                    <div className="hours">
                      <h2>{timerHours}</h2>
                      <p>Hours</p>
                  
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                    <div className="minutes">
                      <h2> {timerMinutes} </h2>
                      <p>Minutes</p>
                  
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                    <div className="seconds">
                      <h2>{timerSeconds}</h2>
                      <p>Seconds</p>
                  
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown

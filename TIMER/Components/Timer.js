import React, {useEffect, useState} from 'react';
import './timer.css';

const Timer = () =>{
    const [seconds, setSeconds]= useState(0);
    const [minutes, setMinutes]= useState(0);
    
    var timer ;
    useEffect (()=>{
        timer = setInterval(()=>{
            setSeconds(seconds+1);
            if (seconds ===59){
                setMinutes (minutes+1);
                setSeconds (0);
            }
        
        },1000)
        return ()=>clearInterval (timer);
    });
    return (

        <div ClassName = "Timer"> 
    <div ClassName = "container">
    <div ClassName = "timer_container" >
        <h1>Timer</h1>
        <h1>{minutes} : {seconds}</h1>
    </div>

    </div>
    
    
    </div>
    
    )
    }
    




export default Timer

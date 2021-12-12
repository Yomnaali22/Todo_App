import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const ref = useRef('')
    
    useEffect(() => {
    let interval;
    if(isRunning){
        interval = setInterval(() => {
        setTime(previousTime => previousTime + 1);
    }, 1000);
} else if (!isRunning) {
    clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isRunning]);


return (
    <div className="stopwatch">
        <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}Hours:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}Mins:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}sec</span>
        </div>
        <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>       
        </div>
    </div>
    );
};

export default Stopwatch;
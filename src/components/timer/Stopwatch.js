import React, { useEffect } from 'react'
import {  useRef } from 'react'
import { useStopwatch } from 'react-timer-hook';
import { makeStyles } from "@material-ui/core/styles";

export default function Stopwatch() {
    const { 
        seconds, 
        minutes, 
        hours, 
        isRunning, 
        start, 
        pause, 
        reset 
    } = useStopwatch({ autoStart: false});

    const ref = useRef(null)

    useEffect(() => {
        ref.current.innerHTML = localStorage.getItem('time')
    }, [])

    const timeInfo = () => {
        ref.current.innerHTML = `
        User Name: name

        Client: client Name

        Time Allocated For the task: ${hours}Hours: ${minutes}Minutes: ${seconds}Seconds`

        localStorage.setItem('time', ref.current.innerHTML)
    }

    const buttonHandler = () => {
    }

    return (
        <div>
            <h1>
            {isRunning ? 'Running' : 'Not running'}
            </h1>
            <h2>
            {hours}hours: {minutes}minutes : {seconds}seconds
            </h2>
            <div>
                {!isRunning && (
                    <button onClick={start}>Start</button> )}

                {isRunning && (
                <button onClick={() => {
                    reset(()=> console.log('now') , false)
                    timeInfo()
                }}>Reset</button>
                )}

                {isRunning && (
                    <button onClick={pause}>Pause</button>
                )}
                <button onClick={buttonHandler} >X</button>
            </div>
            <h1 ref={ref}>
            </h1>
        </div>
    )
}

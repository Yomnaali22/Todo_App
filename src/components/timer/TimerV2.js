import React from 'react'
import Timer from "react-compound-timerv2";

export default function TimerV2() {
    return (
            <Timer startImmediately={false}>
                {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <div>
                        <Timer.Hours /> hours
                        <Timer.Minutes /> minutes
                        <Timer.Seconds /> seconds
                        </div>
                        <br />
                        <div>
                            <button onClick={start}>Start</button>
                            <button onClick={pause}>Pause</button>
                            <button onClick={resume}>Resume</button>
                            <button onClick={stop}>Stop</button>
                            <button onClick={reset}>Reset</button>
                            </div>
                            </React.Fragment>
                            )}
                            </Timer>
                            )
                        }

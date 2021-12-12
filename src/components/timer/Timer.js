import React from 'react'

export default function Timer() {
    return (
        <div>
            
        </div>
    )
}

    /*
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [thePause, setPause] = useState(false)

    const ref = useRef(null)

    const startHandler = () => {
        setIsActive(!isActive)
        ref.current = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
    }
    
    const resetHandler = () => {
        setIsActive(!isActive);
        clearInterval(ref.current);
        setTime(0)
    }
    
    const pauseHandler = () => {
        setPause(!thePause)
        clearInterval(ref.current);
    }
    */

    
/**what will appear on the page
 * First we need 3 button 
 * 1- start button is rendered once the page loads
 * 2- reset button is renedered when we press the start button
 * 3- pause button is rendered when we pres the start button 
 * 4- the start button is renedered once again when we press the pause button
 * 
 * second we need a timer that has hours, mins, seconds
 */

/**How to implement the button logic 
 * buttons will be rendered based on a condition a false or true value (state)
 * the value is set to default false
 * if(false) => render the start button "<button onClick={()=> turn the value to true}>start</button>"
 * if(true) => render both pause and reset button "button onClick={() => turn the value to false}"
 */

/**how to implement the timer logic 
 * the whole timer changes so we need to handle this by state
 * hours, mins, seconds = 0 as a start 
 * once the seconds is level up to 60 the state of min changes to 1 and so for the mins 
 * const [time, setTime]= useState({hours: 0, mins:0, sec: 0})
 * 1- start button will have an onclick handler which will start couting 
 * startHandler = () => {
 * setTime({...time, second: second => second + 1})
 * if(time.sec <= 60){
 * setTime({...time, mins: min => min + 1})
 * } else if (time.mins <= 60){
 * setTime({...time, hours: hour => hour + 1})
 * }
 * }
 * 
 * 2- the reset button will set the entire state to 0
 * setTime({...time, hours:0, mins: 0, sec: 0)}
 * 
 * 
 * 3- the pause button will 
 */
import React, {useState} from "react";
import './Switch.css'

export const Switch = () => {
    const [switchOpt, setSwitchOpt] = useState(false)
    const onClickOnHandler = () => {
        setSwitchOpt(true)
    }
    const onClockOffHandler = () => {
      setSwitchOpt(false)
    }
    const spanClass = switchOpt ? `circle on` : `circle off`
    const btnOnClass = switchOpt ? `on` : ``
    const btnOffClass = !switchOpt ? `off` : ``
    return (
        <div className='switch_wrapper'>
            <button onClick={onClickOnHandler} className={btnOnClass}>On</button>
            <button onClick={onClockOffHandler} className={btnOffClass}>Off</button>
            <span className={spanClass}></span>
        </div>
    );
}
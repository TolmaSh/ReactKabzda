import React from "react";
import './Switch.css'

type propsType = {
    /**
     * Switch value
     */
    switchOpt: boolean
    /**
     * Optional click handler on/off
     */
    toggleSwitch: (onOff: boolean) => void
}

export const Switch:React.FC<propsType> = ({switchOpt,toggleSwitch,...props}) => {

    const spanClass = switchOpt ? `circle on` : `circle off`
    const btnOnClass = switchOpt ? `on` : ``
    const btnOffClass = !switchOpt ? `off` : ``
    return (
        <div className='switch_wrapper'>
            <button onClick={() => toggleSwitch(true)} className={btnOnClass}>On</button>
            <button onClick={() => toggleSwitch(false)} className={btnOffClass}>Off</button>
            <span className={spanClass}></span>
        </div>
    );
}
import React from "react";
import './Switch.css'

type propsType = {
    switchOpt: boolean
    onChangeSwitch: (onOff: boolean) => void
}

export const Switch:React.FC<propsType> = ({switchOpt,onChangeSwitch,...props}) => {

    const spanClass = switchOpt ? `circle on` : `circle off`
    const btnOnClass = switchOpt ? `on` : ``
    const btnOffClass = !switchOpt ? `off` : ``
    return (
        <div className='switch_wrapper'>
            <button onClick={() => onChangeSwitch(true)} className={btnOnClass}>On</button>
            <button onClick={() => onChangeSwitch(false)} className={btnOffClass}>Off</button>
            <span className={spanClass}></span>
        </div>
    );
}
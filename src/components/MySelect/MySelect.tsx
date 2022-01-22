import React, {ChangeEvent, useState} from 'react';
import './MySelect.css'
import {DataType} from "../../App";


type MySelectPropsType = {
    /**
     * Select items
     */
    data: DataType[],
    /**
     * Color for select background
     */
    backgroundColor?: string
    /**
     * Color for select text
     */
    Color?: string
}

const MySelect = (props: MySelectPropsType) => {
    const [value, setValue] = useState('2')
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (

        <div className="box">
            <select value={value} onChange={onChangeSelect}
                    style={{backgroundColor: props.backgroundColor, color: props.Color}}>
                {props.data.map(e => <option key={e.id} value={e.id}>{e.value}</option>)}
            </select>
        </div>
    );
};

export default MySelect;
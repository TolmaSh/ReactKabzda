import React, {ChangeEvent, useState} from 'react';
import './MySelect.css'
import {DataType} from "../../App";


type MySelectPropsType = {
   data: DataType[]
}

const MySelect = (props: MySelectPropsType) => {
    const [value, setValue] = useState('2')
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (

        <div className="box" >
            <select value={value} onChange={onChangeSelect}>
                {props.data.map(e => <option key={e.id} value={e.id}>{e.value}</option>)}
            </select>
        </div>
    );
};

export default MySelect;
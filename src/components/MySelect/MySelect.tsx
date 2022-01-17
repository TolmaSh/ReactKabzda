import React, {ChangeEvent, useState} from 'react';

const MySelect = () => {
    const [value,setValue] = useState('2')
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={onChangeSelect}>
            <option>None</option>
            <option value={'1'}>Kiev</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Minsk</option>
        </select>
    );
};

export default MySelect;
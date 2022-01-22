import React from 'react';

interface MyInputProps  {
    defaultValue: string
}

export const MyInput = ({defaultValue}: MyInputProps) => {


    return (
        <>
            <input type='text' value={defaultValue} />
        </>
    );
}


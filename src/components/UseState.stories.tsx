import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/UseState',
    description: 'demo description',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const UseStateBasic = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <button onClick={() => setValue(value + 1)}>Click</button>
            <div>{value}</div>
        </>
    )
}





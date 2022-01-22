import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MyInput} from "./MyInput";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/MyInput',
    component: MyInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MyInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />;

export const Input = Template.bind({})
Input.args = {
    defaultValue: 'Default Input'
}

export const SaveWithRefUnControlledInput = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValue = () => {
        const input = inputRef.current as HTMLInputElement
        setValue(input.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={saveValue}>save</button>
            --- <span>{value}</span>
        </>
    );
}
export const SaveWithOnChangeUnControlledInput = () => {
    const [value, setValue] = useState<string>("")
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <input type="text" onChange={onChangeValueHandler}/> --- <span>{value}</span>
        </>
    );
};





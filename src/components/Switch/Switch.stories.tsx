import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Switch} from "./Switch";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Switch',
    component: Switch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const ToggleModeSwitch: ComponentStory<typeof Switch> = (args) => {
    const [value, setValue] = useState(false)
    return (
        <Switch {...args} switchOpt={value} toggleSwitch={() => setValue(!value)} />
    )
}

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const OnSwitch = Template.bind({})
OnSwitch.args = {
    switchOpt: true,
    toggleSwitch: x=>x
}
export const OffSwitch = Template.bind({})
OffSwitch.args = {
    switchOpt: false,
    toggleSwitch: x => x
}




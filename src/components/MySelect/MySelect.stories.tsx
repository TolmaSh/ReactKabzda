import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import MySelect from "./MySelect";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/MySelect',
    component: MySelect,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MySelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


const Template: ComponentStory<typeof MySelect> = (args) => <MySelect {...args} />;

export const Select = Template.bind({})
Select.args = {
    data: [
        {id: 1, value: 'Kiev'},
        {id: 2, value: 'Minsk'},
        {id: 3, value: 'Moscow'},
        {id: 4, value: 'London'},
        {id: 5, value: 'Nevada'}
    ]
}





import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {toggleAccordion: {action: 'clicked'}},
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const AccordionData = [
    {id: 1, value: "Viktor"},
    {id: 2, value: "Alex"},
    {id: 3, value: "Mike"},
    {id: 4, value: "Vadym"}
]

export const ToggleModeAccordion: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion {...args}  collapsed={collapsed} toggleAccordion={() => setCollapsed(!collapsed)}/>
    )
}
ToggleModeAccordion.args = {
    title: 'ToggleMode',
    data: AccordionData
}

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args = {
    title: 'Menu',
    collapsed: true,
    data: AccordionData
}
export const UnCollapsedAccordion = Template.bind({})
UnCollapsedAccordion.args = {
    title: 'Users',
    collapsed: false,
    data: AccordionData
}





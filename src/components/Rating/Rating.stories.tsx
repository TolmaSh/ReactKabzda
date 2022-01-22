import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, starType} from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        starColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingWithoutSwitchFunction = Template.bind({})
    RatingWithoutSwitchFunction.args = {
    starValue: 1,
    onClickHandler: x=>x
  }
  export const RatingWithSwitchFunction: ComponentStory<typeof Rating>  = (args) => {
    const [value, setValue] = useState<starType>(1)
      return (
          <Rating {...args} starValue={value} onClickHandler={(value) => setValue(value)} />
      )
  }


// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };


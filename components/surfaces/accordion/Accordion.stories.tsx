import type { Meta, StoryObj } from '@storybook/react';

import ControlledAccordions from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ControlledAccordions> = {
  title: 'Surfaces/Accordion',
  component: ControlledAccordions,
  tags: ['autodocs'],
  argTypes: {
   
  },
};

export default meta;
type Story = StoryObj<typeof ControlledAccordions>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    
  },
};
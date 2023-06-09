import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Letter or Icon',
      defaultValue: 'None',
    }
  },
  
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
  },
};

export const Letter: Story = {
  args: {
    children: 'C',
  },
};


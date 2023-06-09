import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@mui/material';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    // label: {
    //   defaultValue : 'filled',
    //   description: 'stuff',
    // },
    variant:{
      description: 'Outlined or Filled',
      defaultValue: 'filled',
      withToolbar: true,
    }
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    label: 'Chip Filled',
  },
};

export const Secondary: Story = {
    args: {
      label: 'Chip Outlined',
      variant: 'outlined',
    },
  };
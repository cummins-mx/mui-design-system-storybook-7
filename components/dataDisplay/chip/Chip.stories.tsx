import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@mui/material';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
   
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
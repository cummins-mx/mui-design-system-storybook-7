import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from '@mui/material';

const meta: Meta<typeof Paper> = {
  title: 'Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Basic: Story = {
  args: {
    elevation: 3,
    sx: 'width: 150px; height: 150px;',
  },
};

export const Overflow: Story = {
  args: {
    elevation: 3,
    sx: 'width: 350px; height: 150px; overflow: auto',  
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
};

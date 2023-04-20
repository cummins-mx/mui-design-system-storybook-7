import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={activeTheme} >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    
  },
};
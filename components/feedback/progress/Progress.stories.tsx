import type { Meta, StoryObj } from '@storybook/react';

import { CircularProgress } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
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
type Story = StoryObj<typeof CircularProgress>;

export const Primary: Story = {
  args: {
    
  },
};
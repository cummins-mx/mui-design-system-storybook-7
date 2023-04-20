import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
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
type Story = StoryObj<typeof Alert>;

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'Error text',
  },
};

export const Warning: Story = {
    args: {
      severity: 'warning',
      children: 'Warning text',
    },
  };

  export const Info: Story = {
    args: {
      severity: 'info',
      children: 'Info text',
    },
  };

  export const Success: Story = {
    args: {
      severity: 'success',
      children: 'Success text',
    },
  };
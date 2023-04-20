import type { Meta, StoryObj } from '@storybook/react';

import { Chip, Divider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
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
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  args: {

  },
};

export const WithText: Story = {
    args: {
        children: 'Text',
    },
  };
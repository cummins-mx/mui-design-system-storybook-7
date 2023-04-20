import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
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
type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  args: {
    children: 'Link',
  },
};


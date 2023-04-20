import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

import GridTemplate from './GridTemplate';

const meta: Meta<typeof GridTemplate> = {
  title: 'Templates/GridTemplate',
  component: GridTemplate,
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
type Story = StoryObj<typeof GridTemplate>;

export const Basic: Story = {
  args: {
  },
};


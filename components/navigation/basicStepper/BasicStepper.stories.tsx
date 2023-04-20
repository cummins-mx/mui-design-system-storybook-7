import type { Meta, StoryObj } from '@storybook/react';

import BasicStepper from './BasicStepper.tsx';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof BasicStepper> = {
  title: 'Navigation/BasicStepper',
  component: BasicStepper,
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
type Story = StoryObj<typeof BasicStepper>;

export const Basic: Story = {
  args: {
  },
};


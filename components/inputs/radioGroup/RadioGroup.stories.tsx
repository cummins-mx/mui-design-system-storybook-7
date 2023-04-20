import type { Meta, StoryObj } from '@storybook/react';

import RadioButtonsGroup from './radioGroup';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof RadioButtonsGroup> = {
  title: 'Inputs/Radio Buttons Group',
  component: RadioButtonsGroup,
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
type Story = StoryObj<typeof RadioButtonsGroup>;

export const Primary: Story = {
  args: {
    row: true,
    label: 'Options',
  },
};
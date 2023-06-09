import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: {
      description: 'Default checked state'
    },
    disabled: {
      description: 'Is the checkbox enabled?'
    }
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
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    defaultChecked: true,
    disabled: false

  },
};

export const Unchecked: Story = {
  args: {
    defaultChecked: false,
  },
};

export const UncheckedDisabled: Story = {
  args: {
   disabled: true
  },
};

export const CheckedDisabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true
  },
};
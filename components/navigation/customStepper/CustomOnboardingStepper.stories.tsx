import type { Meta, StoryObj } from '@storybook/react';

import CustomOnboardingStepper from './CustomOnboardingStepper.tsx';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

import { themes } from '@storybook/theming';


const meta: Meta<typeof CustomOnboardingStepper> = {
  title: 'Navigation/Custom Stepper',
  component: CustomOnboardingStepper,
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
type Story = StoryObj<typeof CustomOnboardingStepper>;


const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', 'step 4', 'step 5'];
export const Contained: Story = {
  args: {
   steps: steps
  },
};

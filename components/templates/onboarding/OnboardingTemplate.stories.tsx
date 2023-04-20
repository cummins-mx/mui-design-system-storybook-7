import type { Meta, StoryObj } from '@storybook/react';
import OnboardingTemplate from './OnboardingTemplate';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';
import { Typography } from '@mui/material';

import CustomOnboardingStepper from '../../navigation/customStepper/CustomOnboardingStepper.tsx';

const meta: Meta<typeof OnboardingTemplate> = {
  title: 'Templates/Onboarding',
  component: OnboardingTemplate,
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
type Story = StoryObj<typeof OnboardingTemplate>;


const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', 'step 4', 'step 5'];

export const Primary: Story = {
  args: {
    leftContent: <CustomOnboardingStepper steps={steps}/>,
    rightContent: <Typography variant='body1'>Content</Typography>
  },
};
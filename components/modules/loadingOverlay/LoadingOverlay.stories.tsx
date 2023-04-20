import type { Meta, StoryObj } from '@storybook/react';
import SimpleBackdrop from './LoadingOverlay'
import image from './engine.png'

import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SimpleBackdrop> = {
  title: 'Modules/Loading Backdrop',
  component: SimpleBackdrop,
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
type Story = StoryObj<typeof SimpleBackdrop>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Creating your Fleet Account',
    subtitle: 'Did you know?',
    body: 'Lorem ipsum...',
    imageSrc: image.src,
  },
};
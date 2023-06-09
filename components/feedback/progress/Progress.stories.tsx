import type { Meta, StoryObj } from "@storybook/react";
import LinearProgress from "@mui/material/LinearProgress";

import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof CircularProgress> = {
  title: "Feedback/Progress",
  component: CircularProgress,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "determinate | indeterminate",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={activeTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const CircularIndeterminate: Story = {
  args: {},
};

export const CircularDeterminate: Story = {
  args: {
    variant: "determinate",
    value: 75,
  },
};

export const LinearIndeterminate: Story = {
  args: {},
  render: () => <LinearProgress />,
};

export const LinearDeterminate: Story = {
  args: {},
  render: () => <LinearProgress variant="determinate" value={35} />,
};

import type { Meta, StoryObj } from "@storybook/react";
import { Card, Typography } from "@mui/material/";

import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Card> = {
  title: "Surfaces/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider theme={activeTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {},
  render: () => {
    return (
      <Card>
        <Typography variant="h5">This is a basic Card</Typography>
      </Card>
    );
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Typography variant="h5">This is an outlined Card</Typography>
      </Card>
    );
  },
};

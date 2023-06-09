import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";

import { ArgTypes } from "@storybook/blocks";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "contained | outlined | text",
    },
    children: {
      description: "The content to render within the button",
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
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

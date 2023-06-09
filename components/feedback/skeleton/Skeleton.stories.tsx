import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Variant",
      type: { name: "string", required: false },
      description: "The component supports 4 shape variants.",
      table: {
        type: { summary: "text | circular | rectangular | rounded" },
        defaultValue: { summary: "text" },
      },
      control: {
        type: "text",
      },
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
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: {
    sx: { fontSize: "1rem" },
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 40,
    height: 40,
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: 240,
    height: 60,
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: 240,
    height: 60,
  },
};

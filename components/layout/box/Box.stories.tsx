import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import Box from "@mui/material/Box";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    title: {
      name: "SX",
      description: "All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need.",
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
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    sx: {
      width: 300,
      height: 300,
      backgroundColor: "primary.dark",
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7],
      },
    },
  },
};

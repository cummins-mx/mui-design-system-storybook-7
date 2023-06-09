import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Fab> = {
  title: "Inputs/Floating Action Button",
  component: Fab,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "small | medium | large",
    },
    variant: {
      description: "The variant to use.",
    },
    color: {
      description: "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
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
type Story = StoryObj<typeof Fab>;

export const Basic: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <Fab {...args}>
      <AddIcon />
    </Fab>
  ),
};

export const Extended: Story = {
  args: {
    color: "primary",
    variant: "extended",
  },
  render: (args) => (
    <Fab {...args}>
      <AddIcon />
      Add new
    </Fab>
  ),
};

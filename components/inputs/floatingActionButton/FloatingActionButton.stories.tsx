import type { Meta, StoryObj } from "@storybook/react";

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
      table: {
        disable: true,
      },
    },
    color: {
      description: "The color of the component.",
      table: {
        disable: true,
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
type Story = StoryObj<typeof Fab>;

export const Basic: Story = {
  args: {
    color: "primary",
    size: "large",
  },
  render: (args) => (
    <Fab {...args}>
      <AddIcon />
    </Fab>
  ),
};

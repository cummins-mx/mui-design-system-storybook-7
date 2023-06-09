import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Tooltip> = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { title: "Hello" }, // setting default value below in argTypes is a bug found here https://github.com/storybookjs/storybook/issues/21016
  argTypes: {
    title: {
      name: "Title",
      type: { name: "string", required: true },
      description: "Text to display in tooltip.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" },
      },
      control: {
        type: "text",
      },
    },
    placement: {
      name: "Placement",
      description: `Tooltip placement.`,
      type: { name: "string", required: false },
      table: {
        defaultValue: { summary: "bottom" },
        type: {
          summary: `bottom-end
        | bottom-start
        | bottom
        | left-end
        | left-start
        | left
        | right-end
        | right-start
        | right
        | top-end
        | top-start
        | top`,
        },
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
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Tooltip {...args}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  ),
};

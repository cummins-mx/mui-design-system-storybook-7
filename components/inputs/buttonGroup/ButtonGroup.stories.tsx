import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

import { ArgTypes } from "@storybook/blocks";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof ButtonGroup> = {
  title: "Inputs/Button Group",
  component: ButtonGroup,
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
type Story = StoryObj<typeof ButtonGroup>;

export const Basic: Story = {
  args: {
    children: <Button>Button</Button>,
  },
};

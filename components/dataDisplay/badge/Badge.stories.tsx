import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";
import { Children } from "react";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
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
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    badgeContent: 4,
    color: "primary",
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon color="info" />
    </Badge>
  ),
};

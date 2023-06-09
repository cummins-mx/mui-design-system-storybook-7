import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: { count: 10, variant: "text" },
  argTypes: {
    count: {
      name: "Count",
      type: { name: "number", required: false },
      description: "Number of pages shown.",
    },
    variant: {
      name: "Variant",
      type: { name: "string", required: false },
      description: "The selected variant of the component.",
      defaultValue: { summary: "text" },
      options: ["text", "outlined"],
      control: {
        type: "radio",
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
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  args: {},
};

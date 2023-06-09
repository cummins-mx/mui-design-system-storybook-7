import type { Meta, StoryObj } from "@storybook/react";
import Rating from "@mui/material/Rating";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Rating> = {
  title: "Inputs/Rating",
  component: Rating,
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
type Story = StoryObj<typeof Rating>;

export const Controlled: Story = {
  args: {
    value: 2,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 3,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 3,
  },
};

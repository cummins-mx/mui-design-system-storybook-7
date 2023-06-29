import type { Meta, StoryObj } from "@storybook/react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Variant",
      description: "The Button comes with three variants:",
      table: {
        type: { summary: "contained | outlined | text" },
        defaultValue: { summary: "contained" },
      },
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    fullWidth: {
      name: "Full Width",
      description: "If true, the button will take up the full width of its container.",
      table: {
        type: { summary: "true | false" },
        defaultValue: { summary: "true" },
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
type Story = StoryObj<typeof Button>;

export const FullWidth: Story = {
  args: {
    variant: "contained",
    fullWidth: true,
  },
  render: (args) => <Button {...args}>Submit</Button>,
};

export const Loading: Story = {
  args: {
    variant: "contained",
    fullWidth: true,
  },
  render: (args) => (
    <LoadingButton {...args} loading loadingPosition="start" startIcon={<SaveIcon />}>
      Loading
    </LoadingButton>
  ),
};

export const Icon: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <IconButton {...args}>
      <DeleteIcon />
    </IconButton>
  ),
};

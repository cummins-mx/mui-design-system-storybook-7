import type { Meta, StoryObj } from "@storybook/react";

import { Autocomplete, TextField, Chip } from "@mui/material";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Autocomplete> = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={activeTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      name: "Variant",
      type: { name: "string", required: "false" },
      control: "select",
      options: ["standard", "filled", "outlined"],
      description: "Variant",
      table: {
        type: { summary: "standard | filled | outlined" },
        defaultValue: { summary: "standard" },
      },
    },
    label: {
      name: "Label",
      type: { name: "string", required: "false" },
      description: "Select title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

export const Standard: Story = {
  args: {
    top100Films: top100Films,
    variant: "outlined",
  },
  render: ({ top100Films, variant }) => (
    <Autocomplete
      multiple
      id="tags-filled"
      options={top100Films.map((option) => option.title)}
      defaultValue={[top100Films[1].title]}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) => value.map((option: string, index: number) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
      renderInput={(params) => <TextField {...params} variant={variant} label="freeSolo" placeholder="Favorites" />}
    />
  ),
};

export const Outlined: Story = {
  args: {
    top100Films: top100Films,
    variant: "filled",
  },
  render: ({ top100Films, variant }) => (
    <Autocomplete
      multiple
      id="tags-filled"
      options={top100Films.map((option) => option.title)}
      defaultValue={[top100Films[1].title]}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) => value.map((option: string, index: number) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
      renderInput={(params) => <TextField {...params} variant={variant} label="freeSolo" placeholder="Favorites" />}
    />
  ),
};

export const Filled: Story = {
  args: {
    top100Films: top100Films,
    variant: "outlined",
  },
  render: ({ top100Films, variant }) => (
    <Autocomplete
      multiple
      id="tags-filled"
      options={top100Films.map((option) => option.title)}
      defaultValue={[top100Films[1].title]}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) => value.map((option: string, index: number) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
      renderInput={(params) => <TextField {...params} variant={variant} label="freeSolo" placeholder="Favorites" />}
    />
  ),
};

import type { Meta, StoryObj } from "@storybook/react";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    labelPlacement: {
      name: "Label Placement",
      description: "The position of the label",
      table: {
        type: { summary: "top | start | end | bottom" },
        defaultValue: { summary: "end" },
      },
      control: "select",
      options: ["top", "start", "end", "bottom"],
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
type Story = StoryObj<typeof Checkbox>;

export const FilterList: Story = {
  args: {},
  render: (args) => {
    const [state, setState] = useState({
      gilad: true,
      jason: false,
      antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    return (
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Label</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />} label="Gilad Gray" />
          <FormControlLabel control={<Checkbox checked={jason} onChange={handleChange} name="jason" />} label="Jason Killian" />
          <FormControlLabel control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />} label="Antoine Llorca" />
        </FormGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    );
  },
};

export const BasicLabel: Story = {
  args: {
    labelPlacement: "end",
  },
  render: (args) => (
    <FormControl>
      <FormGroup>
        <FormControlLabel {...args} control={<Checkbox />} label="Label" />
      </FormGroup>
    </FormControl>
  ),
};

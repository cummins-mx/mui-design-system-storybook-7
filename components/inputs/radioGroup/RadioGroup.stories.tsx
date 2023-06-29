import type { Meta, StoryObj } from "@storybook/react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof RadioGroup> = {
  title: "Inputs/Radio Group",
  component: RadioGroup,
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
type Story = StoryObj<typeof RadioGroup>;

export const RadioList: Story = {
  args: {},
  render: (args) => (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Label</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="one" name="radio-buttons-group">
        <FormControlLabel value="one" control={<Radio />} label="One" />
        <FormControlLabel value="two" control={<Radio />} label="Two" />
        <FormControlLabel value="three" control={<Radio />} label="Three" />
      </RadioGroup>
      <FormHelperText>Helper text</FormHelperText>
    </FormControl>
  ),
};

export const Placement: Story = {
  args: {},
  render: (args) => (
    <FormControl>
      <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
        <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
        <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" />
        <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
  ),
};

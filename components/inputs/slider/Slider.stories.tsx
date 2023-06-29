import type { Meta, StoryObj } from "@storybook/react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { useState } from "react";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Slider> = {
  title: "Inputs/Slider",
  component: Slider,
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
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: {},
  render: () => {
    const marks = [
      {
        value: 0,
        label: "0",
      },
    ];

    function valuetext(value: number) {
      return `${value}°C`;
    }

    return (
      <>
        <Typography variant="subtitle2" id="input-slider" gutterBottom>
          Input
        </Typography>
        <Slider aria-label="Custom marks" defaultValue={20} getAriaValueText={valuetext} step={10} valueLabelDisplay="auto" marks={marks} />
      </>
    );
  },
};

export const Range: Story = {
  args: {},
  render: () => {
    const marks = [
      {
        value: 0,
        label: "0",
      },
      {
        value: 20,
        label: "20",
      },
      {
        value: 40,
        label: "40",
      },
      {
        value: 60,
        label: "60",
      },
      {
        value: 80,
        label: "80",
      },
      {
        value: 100,
        label: "100",
      },
    ];

    function valuetext(value: number) {
      return `${value}°C`;
    }

    const [value, setValue] = useState<number[]>([20, 60]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    return (
      <>
        <Typography variant="subtitle2" id="input-slider" gutterBottom>
          Input
        </Typography>
        <Slider getAriaLabel={() => "Temperature range"} value={value} onChange={handleChange} valueLabelDisplay="auto" marks={marks} getAriaValueText={valuetext} />{" "}
      </>
    );
  },
};

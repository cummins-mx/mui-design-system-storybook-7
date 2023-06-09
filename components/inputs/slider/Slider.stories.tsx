import type { Meta, StoryObj } from "@storybook/react";
import Slider from "@mui/material/Slider";
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
    const [value, setValue] = useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };
    return <Slider aria-label="Volume" value={value} onChange={handleChange} />;
  },
};

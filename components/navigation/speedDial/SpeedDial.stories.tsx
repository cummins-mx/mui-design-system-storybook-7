import type { Meta, StoryObj } from "@storybook/react";
import { ArgTypes } from "@storybook/blocks";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof SpeedDial> = {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
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
type Story = StoryObj<typeof SpeedDial>;

export const Basic: Story = {
  args: {},
  render: () => {
    const actions = [
      { icon: <FileCopyIcon />, name: "Copy" },
      { icon: <SaveIcon />, name: "Save" },
      { icon: <PrintIcon />, name: "Print" },
      { icon: <ShareIcon />, name: "Share" },
    ];
    return (
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: "absolute", bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </SpeedDial>
      </Box>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useState, useRef } from "react";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof ButtonGroup> = {
  title: "Inputs/Button Group",
  component: ButtonGroup,
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
    disableElevation: {
      table: {
        disable: true,
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
type Story = StoryObj<typeof ButtonGroup>;

export const SplitButton: Story = {
  args: {
    variant: "contained",
    disableElevation: true,
  },
  render: (args) => {
    const options = ["Menu item 1", "Menu item 2", "Menu item 3"];

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
      console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
      setSelectedIndex(index);
      setOpen(false);
    };

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }

      setOpen(false);
    };

    return (
      <>
        <ButtonGroup {...args} ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button size="small" aria-controls={open ? "split-button-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-label="select merge strategy" aria-haspopup="menu" onClick={handleToggle}>
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem key={option} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    );
  },
};

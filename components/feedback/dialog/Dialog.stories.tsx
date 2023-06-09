import type { Meta, StoryObj } from "@storybook/react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { useState } from "react";

//theming
import { ThemeProvider } from "@emotion/react";
import activeTheme from "../../../themes/activeTheme";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
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
type Story = StoryObj<typeof Dialog>;

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export const Basic: Story = {
  args: {},
  render: () => {
    function SimpleDialog(props: SimpleDialogProps) {
      const { onClose, selectedValue, open } = props;

      const handleClose = () => {
        onClose(selectedValue);
      };

      const handleListItemClick = (value: string) => {
        onClose(value);
      };

      return (
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Set backup account</DialogTitle>
          <List sx={{ pt: 0 }}>
            {emails.map((email) => (
              <ListItem disableGutters>
                <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disableGutters>
              <ListItemButton autoFocus onClick={() => handleListItemClick("addAccount")}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Add account" />
              </ListItemButton>
            </ListItem>
          </List>
        </Dialog>
      );
    }

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (value: string) => {
      setOpen(false);
      setSelectedValue(value);
    };

    return (
      <div>
        <Typography variant="subtitle1" component="div">
          Selected: {selectedValue}
        </Typography>
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { MenuItem, TextField } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import activeTheme from '../../../themes/activeTheme';

const meta: Meta<typeof TextField> = {
  title: 'Inputs/Text Field',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={activeTheme} >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled'
  },
};

export const Validated: Story = {
    args: {
      variant: 'filled',
      label: 'Error',
      error: true,
      helperText: "Incorrect entry.",
    },
  };

  export const Select: Story = {
    args: {
    select: true,
    variant: 'filled',
    label: 'Select',
    helperText: "Please select your currency",
    children: <MenuItem key='1' value='1'>One</MenuItem>,
    },
  };


  export const Password: Story = {
    args: {
      variant: 'filled',
      label: 'Password',
      type: "password"
    },
  };

  // export const PasswordShow: Story = {
  //   args: {
  //     variant: 'filled',
  //     label: 'Password',
  //     type: ()=> showPassword ? 'text' : 'password',
  //     endAdornment: 
  //       <InputAdornment position="end">
  //         <IconButton
  //           aria-label="toggle password visibility"
  //           onClick={handleClickShowPassword}
  //           onMouseDown={handleMouseDownPassword}
  //           edge="end"
  //         >
  //           {showPassword ? <VisibilityOff /> : <Visibility />}
  //         </IconButton>
  //       </InputAdornment>
      
  //   },
  // };
import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete, TextField } from '@mui/material';

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;



// const items = [{title: 'Cars'}, {title: 'Trucks'}]

// export const MultipleCheckboxes: Story = {
//   args: {
//     multiple: false,
//     options: items,
//     renderInput: (params) => (
//         <TextField {...params} label="Select all that apply" placeholder="Favorites" />
//       )

//   },
// };
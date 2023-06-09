import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete, TextField, Chip } from '@mui/material';


const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    freeSolo: {
      description: 'Is the user able to type in a selection?',
      defaultValue: true,
    },

  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];


export const FreeSolo: Story = {
  args: {
    top100Films: top100Films,
  },
  render: ({top100Films})=>(
    
      <Autocomplete
      multiple
      id="tags-filled"
      options={top100Films.map((option) => option.title)}
      defaultValue={[top100Films[1].title]}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="freeSolo"
          placeholder="Favorites"
        />
      )}
    />

      
  )
};
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup(args) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{args.label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="one"
        name="radio-buttons-group"
        {...args}
      >
        <FormControlLabel value="one" control={<Radio />} label="One" />
        <FormControlLabel value="two" control={<Radio />} label="Two" />
        <FormControlLabel value="three" control={<Radio />} label="Three" />
      </RadioGroup>
    </FormControl>
  );
}
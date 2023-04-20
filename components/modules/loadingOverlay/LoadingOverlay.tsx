import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Typography, Stack } from '@mui/material';

export default function SimpleBackdrop({title, subtitle, body, imageSrc}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
          <Stack spacing={2} direction="column" alignItems='center' justifyContent="center">
            <Typography variant="h5">{title}</Typography>
              
              <div style={{width: '35%', boxSizing: 'border-box'}}>
            {/* <img src={imageSrc} alt="Loading" width="100%" height="100%" /> */}
            <CircularProgress color="inherit" size='100px' />
            </div>
            <Typography variant="subtitle1">{subtitle}</Typography>
            <Typography variant="body2">{body}</Typography>
        </Stack>

      </Backdrop>
    </div>
  );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link, TextField} from '@mui/material';
import { Button, FormControlLabel, Typography } from '@mui/material';
import './styles.css';

interface Content {
    leftContent: React.FC;
    rightContent: React.FC;
}


export default function OnboardingTemplate({leftContent, rightContent}:Content) {
  return (
    <Box className='onboarding-template-wrapper' >
      <Grid container spacing={4} sx={{margin: '0px'}}>
        <Grid item xs={12} sm={6} md={5} lg={3}  sx={{paddingRight: '32px'}} >
        {leftContent}
        </Grid>
        <Grid item  xs={12} sm={6} md={7} lg={9} className='right-column' >
        {rightContent}
        </Grid>
      </Grid>
    </Box>
  );
}
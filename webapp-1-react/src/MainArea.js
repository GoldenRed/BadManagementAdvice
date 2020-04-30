import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Advice from './Advice.js';

const useStyles = makeStyles({
  root: {
    width:'150%',
    margin: '10%',
    padding: '10px',
  },
});

export default function MainArea() {
  const classes = useStyles();
  return(
    <Paper 

    elevation={6} 
    className={classes.root}
    >
      <Advice />
    </Paper>
    ); 
  }
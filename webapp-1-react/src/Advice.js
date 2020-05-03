import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'150%',
    margin: '10%',
    padding: '10px',
  },
});

export default function Advice({adviceDetails}) {
  const classes = useStyles();

  const { adviceNumber, adviceBody, adviceUser, adviceDate, advicePoints } = adviceDetails;
  
  return(
    <Paper 
    elevation={6} 
    className={classes.root}
    >

      <Typography variant="h6" gutterBottom>
        Advice ID: {adviceNumber}
      </Typography>
      
      <Typography variant="h4" gutterBottom>
        {adviceBody}
      </Typography>

      <Typography variant="caption" gutterBottom>
        Submitted by {adviceUser} on {adviceDate}
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
        Points: {advicePoints}
      </Typography>
      
    </Paper>
  );

}
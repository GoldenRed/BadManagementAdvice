import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'150%',
    margin: '10%',
    padding: '10px',
  },
});

const getPrettyDate = (uglyDate) => {
  var d = new Date(0);
  d.setUTCSeconds(uglyDate/1000);
  return d.toString();
}

export default function Advice({adviceDetails}) {
  const classes = useStyles();

  const { adviceBody, adviceUser, adviceDate, advicePoints } = adviceDetails;
  
  
  const adviceDatePretty = getPrettyDate(adviceDate);

  return(
    <Paper 
    elevation={6} 
    className={classes.root}
    >

      <Typography variant="h6" gutterBottom>
        Advice
      </Typography>
      
      <Typography variant="h4" gutterBottom>
        {adviceBody}
      </Typography>

      <Typography variant="caption" gutterBottom>
        Submitted by {adviceUser} on {adviceDatePretty}
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
        Points: {advicePoints}
      </Typography>
      
    </Paper>
  );

}
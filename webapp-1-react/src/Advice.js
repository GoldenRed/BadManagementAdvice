import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Advice() {


  const number = 1;
  const user = "Yared";
  const date = "2020-04-30";
  const advice = "Suggest that the only reason you didn't advance as far ahead as your own manage rwas becase of some made up feel good reason like maintaining worklife balance.";
  return(
  <div>

    <Typography variant="h6" gutterBottom>
      Advice Number: {number}
    </Typography>
    
    <Typography variant="h4" gutterBottom>
      {advice}
    </Typography>

    <Typography variant="caption" gutterBottom>
      Submitted by: {user}
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      Date: {date}
    </Typography>

  </div>
  );

}
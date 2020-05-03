import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Advice() {


  const adviceNumber = 1;
  const adviceUser = "Yared";
  const adviceDate = "2020-04-30";
  const adviceBody = "Insert bad advice here. Insert bad advice here. Insert bad advice here. Insert bad advice here. Insert bad advice here. Insert bad advice here.";
  const advicePoints = 10;
  return(
  <div>

    <Typography variant="h6" gutterBottom>
      Advice Number: {adviceNumber}
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
  </div>
  );

}
import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import BottomBar from './Bottom.js';
import HeaderBar from './Header.js';
import Advice from './Advice.js';
import getRandomAdvice from './fetchAdvice.js';



function App() {

  const [AdviceInfo, setAdviceInfo] = useState({init:true}); //start with init == True to deal with initial loading issues

  console.log(AdviceInfo)
  if(AdviceInfo.init)
  {
    return(
      <Grid justify="center" container>
      <Grid item xs={12}>
        <HeaderBar />
      </Grid>

      <Grid justify="center" container>
        <Typography variant="h1" gutterBottom>
          Remember!
        </Typography>
        <Typography variant="h1" gutterBottom>
          Please use this advice responsibly.
        </Typography>
        <Typography variant="h1" gutterBottom>
          Press Gimme More to begin.
        </Typography>
      </Grid>


        <Grid item xs={12}>
          <BottomBar setAdviceInfo={setAdviceInfo} />
        </Grid>
    </Grid>
    )
  }
  else{

    return (
      
      <Grid justify="center" container>
      <Grid item xs={12}>
        <HeaderBar />
      </Grid>

      <Grid container>
        <Advice adviceDetails={AdviceInfo} />
      </Grid>


        <Grid item xs={12}>
          <BottomBar setAdviceInfo={setAdviceInfo} />
        </Grid>
    </Grid>
    );
  };
}

export default App;

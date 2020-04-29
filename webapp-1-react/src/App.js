import React from 'react';
import { Grid } from '@material-ui/core';
import BottomBar from './Bottom.js';
import HeaderBar from './Header.js';


function App() {
  return (

    <Grid justify="center" container>
      <Grid item xs={12}>
        <HeaderBar />
      </Grid>

      <Grid container>
      
      </Grid>


        <Grid item xs={12}>
          <BottomBar />
        </Grid>
    </Grid>


  );
}

export default App;

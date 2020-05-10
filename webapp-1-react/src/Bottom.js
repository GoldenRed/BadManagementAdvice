import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from '@material-ui/icons/Add';
import getRandomAdvice from './fetchAdvice.js';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '50%',
    bottom: '0',
    padding: '0% 25%',
  },
});


export default function BottomBar({setAdviceInfo}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  
  function gimmeMoreFunc() {
    getRandomAdvice().then((data) => {
      setAdviceInfo(data);
    });
  }

  return (
    <Paper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction onClick={gimmeMoreFunc} label="Gimme More!" icon={<ArrowForwardIosIcon />} />
        <BottomNavigationAction label="I Like!" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Meh" icon={<ThumbDownIcon />} />
        <BottomNavigationAction label="Lemme Contribute!" icon={<AddIcon />} />
      </BottomNavigation>
   </Paper>
  );
}
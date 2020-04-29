import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function BottomBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        <BottomNavigationAction label="Gimme More!" icon={<ArrowForwardIosIcon />} />
        <BottomNavigationAction label="I Like!" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Meh" icon={<ThumbDownIcon />} />
        <BottomNavigationAction label="Lemme Contribute!" icon={<AddIcon />} />
      </BottomNavigation>
   </Paper>
  );
}
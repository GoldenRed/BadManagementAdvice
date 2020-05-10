import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    textDecoration: 'None',
    color: '#666666'
    };

  return (
    <div>
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="http://yared.se" style={linkStyle}>About Creator</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://github.com/GoldenRed/yared-serverless-webapp-1" style={linkStyle}>About Project</a></MenuItem>
      </Menu>
    </div>
  );
}
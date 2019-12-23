import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    props.selectItem(event.target.name)
  };

  // return (
  //   <div>
  //     <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  //       Open Menu
  //     </Button>
  //     <Menu
  //       id="simple-menu"
  //       anchorEl={anchorEl}
  //       keepMounted
  //       open={Boolean(anchorEl)}
  //       onClose={handleClose}
  //     >
  //       <MenuItem name="profile" onClick={handleClose}>Profile</MenuItem>
  //       <MenuItem name="account" onClick={handleClose}>My account</MenuItem>
  //       <MenuItem name="logout" onClick={handleClose}>Logout</MenuItem>
  //     </Menu>
  //   </div>
  // );

  return (
    <select onChange={event => props.selectItem(event.target.value)}>
      <option value="Driss">Driss</option>
      <option value="Moe">Mohsine</option>
      <option value="Abdel">Abdelghani</option>
      <option value="Simo">Simo</option>
      <option value="logout">Ahmed</option>
      <option value="logout">Abdel</option>

    </select>
  )
}

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

  return (
    <select onChange={event => props.selectItem(event.target.value)}>
      <option value="Choose Driver...">Driss</option>
      <option value="Driss">Driss</option>
      <option value="Moe">Mohsine</option>
      <option value="Abdel">Abdelghani</option>
      <option value="Simo">Simo</option>
      <option value="logout">Ahmed</option>
      <option value="logout">Hamza</option>

    </select>
  )
}

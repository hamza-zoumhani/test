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
      <option value="none">Choose Driver...</option>
      <option value="Driss">Driss</option>
      <option value="Hamza">Hamza</option>
      <option value="Mohsine">Mohsine</option>
      <option value="Abdelghani">Abdelghani</option>
      <option value="Simo">Simo</option>
      <option value="Ahmed">Ahmed</option>
      <option value="Ouzenou">Ouzenou</option>

    </select>
  )
}

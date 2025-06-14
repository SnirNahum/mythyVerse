<<<<<<< HEAD
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function NavBarDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
=======
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBarDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
>>>>>>> d9bd0bdc9edb474f247c8126948e091cad0a7028

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="dropdown-button"
<<<<<<< HEAD
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
=======
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
>>>>>>> d9bd0bdc9edb474f247c8126948e091cad0a7028
        onClick={handleClick}
      >
        Open Dropdown
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
<<<<<<< HEAD
          "aria-labelledby": "dropdown-button",
=======
          'aria-labelledby': 'dropdown-button',
>>>>>>> d9bd0bdc9edb474f247c8126948e091cad0a7028
        }}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}

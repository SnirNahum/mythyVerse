import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
<<<<<<< HEAD
import { useState } from "react";

export default function UniverseDropdown({ entities, entityName }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = anchorEl;
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {entityName}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {entities.map((element, idx) => (
          <Typography key={idx} sx={{ p: 2 }} className="dropdown-entities">
            {typeof element === "string" ? element : element.name}
          </Typography>
        ))}
      </Popover>
    </div>
  );
=======

export default function UniverseDropdown({ entities }) {
  return <div>{entities.map((item, idx)=>{})}</div>;
>>>>>>> d9bd0bdc9edb474f247c8126948e091cad0a7028
}

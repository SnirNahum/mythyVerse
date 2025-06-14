import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CardsPage from "./CardsPage";
import UniverseButton from "./Utils.jsx/UniverseButton";

export default function UniverseModal({universes}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <UniverseButton handleOpen={handleOpen}/>
      {/* <Button onClick={handleOpen}>Universes</Button> */}
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-conatiner">
          <CardsPage universes={universes}/>
        </Box>
      </Modal>
    </div>
  );
}

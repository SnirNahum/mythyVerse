import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CardsPage from "./CardsPage";
import UniverseButton from "./Utils.jsx/UniverseButton";

export default function UniverseModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <UniverseButton handleOpen={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-container">
          <div className="scroller">
            <CardsPage onClose={handleClose}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

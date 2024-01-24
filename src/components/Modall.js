import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const Modall = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Model</Button>
      <Modal  open={open} onClose={() => setOpen(false)}>
      <Box position="absolute" top="50%" left="50%">
        <Typography>It is a modal</Typography>
        <Button variant="contained" onClick={()=>setOpen(false)}>Click Me</Button>
      </Box>
      </Modal>
    </div>
  );
};

export default Modall;

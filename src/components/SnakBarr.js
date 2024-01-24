import { Alert, Box, Snackbar } from "@mui/material";
import React, { useState } from "react";

const SnakBarr = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Snackbar
        onClose={() => setOpen(false)}
        open={open}
        autoHideDuration={2000}
      >
        <Alert severity="success">This is a success message</Alert>
      </Snackbar>
    </Box>
  );
};

export default SnakBarr;

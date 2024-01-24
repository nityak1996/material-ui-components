import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

const Ratingg = () => {
  const [value, setVale] = useState();
  return (
    <Box>
      <Rating
        precision={0.1}
        defaultValue={1.6}
        value={value}
        size="large"
        onChange={(e, val) => setVale(val)}
      />
      <Typography>Rate {value !== undefined ? value : 0}</Typography>
    </Box>
  );
};

export default Ratingg;

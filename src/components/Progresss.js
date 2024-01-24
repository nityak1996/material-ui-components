import { Box, CircularProgress, LinearProgress } from "@mui/material";

const Progresss = () => {
  return (
    <Box>
    <CircularProgress color="secondary" variant="determinate" value={50}/>
    <LinearProgress color="inherit" variant="determinate" value={30}/>
    </Box>
  );
};

export default Progresss;

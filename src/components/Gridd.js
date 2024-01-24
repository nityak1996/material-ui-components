import { Box, Grid } from "@mui/material";

const Gridd = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{ background: "yellow" }}
        >
          Item
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{ background: "yellow" }}
        >
          Item
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{ background: "yellow" }}
        >
          Item
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{ background: "yellow" }}
        >
          Item
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gridd;

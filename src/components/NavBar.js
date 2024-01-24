import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="warning"
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

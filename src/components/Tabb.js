import { Tabs, Tab, Toolbar, AppBar } from "@mui/material";
import { useState } from "react";

const Tabb = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="First" />
            <Tab label="Second" />
            <Tab label="Third" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Tabb;

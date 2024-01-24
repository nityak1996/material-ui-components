import { Box, Button, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const arrOptions = ["profile", "Balance", "Logout"];
const Drawerss = () => {
const [open,setOpen] = useState(false)

  return (
    <Box>
  <Button onClick={()=>setOpen(true)}>Open</Button>
      <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}   >
        <List>
          {arrOptions.map((elem) => (
            <ListItemButton  onClick={()=>setOpen(false)}> 
              <ListItemText primary={elem} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Drawerss;

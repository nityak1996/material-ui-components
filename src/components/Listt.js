import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const Listt = () => {
  const array = ["First", "Second", "Third", "Fourth", "Fifth"];
   const [open,setOpen] = useState(false)
  return (
    <Box>
      <List>
        <ListItem divider>
          <ListItemButton onClick={()=>setOpen(true)}>
          <ListItemIcon>{">"}</ListItemIcon>
            <ListItemText primary={"Expand List"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={open}>
        <List sx={{ marginLeft:25, width: 300, background: "grey" }}>
          {array.map((listElm) => (
            <ListItem divider>
              <ListItemButton onClick={()=>setOpen(false)} >
                <ListItemIcon>{">"}</ListItemIcon>
                <ListItemText primary={listElm} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default Listt;

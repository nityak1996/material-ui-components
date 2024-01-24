import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"


const Dialogg = () => {

const[open,setOpen] = useState(false)

  return (
    <div>
    <Button  onClick={()=>setOpen(true)}>Click Here</Button>
    <Dialog open={open} onClose={()=>setOpen(false)}>
    <DialogTitle>This is my Dialog</DialogTitle>
    <DialogContent>
    A diolog is a popup window which can ask user something ike an information
    </DialogContent>

<DialogActions>
<Button onClick={()=>setOpen(false)}>Cancel</Button>
<Button onClick={()=>setOpen(false)}>Agree</Button>
</DialogActions>

    </Dialog>

    
    </div>
  )
}

export default Dialogg
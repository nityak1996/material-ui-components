import { Alert, Box } from '@mui/material'
import React, { useState } from 'react'

const Alertt = () => {
    const[show,setShow]= useState(true)
  return (
    <Box>
    {show && <Alert onClose={()=>setShow(false)} severity='info'>this is info alert</Alert>}
    </Box>
  )
}

export default Alertt
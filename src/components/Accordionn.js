import {
    Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Accordionn = () => {

const [accordian,setAccordian] = useState("")

  return (
    <Box>
      <Accordion expanded={accordian==="test1"} onChange={()=>setAccordian("test1")}>
      <AccordionSummary expandIcon={">"}>
        <Typography>Test 1</Typography>
      </AccordionSummary>
    <AccordionDetails>
        <Typography>Hey I am Nitya kumar singh .</Typography>
      </AccordionDetails>
      
      </Accordion> 
      <Accordion expanded={accordian==="test2"} onChange={()=>setAccordian("test2")} >
      <AccordionSummary expandIcon={">"}>
        <Typography>Test 2</Typography>
      </AccordionSummary>
    <AccordionDetails>
        <Typography>Hey I am Nitya kumar singh .</Typography>
      </AccordionDetails>
      
      </Accordion>
    </Box>
  );
};

export default Accordionn;

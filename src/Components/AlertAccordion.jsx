import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Alert from "@mui/material/Alert";

export default function AlertAccordion({message,threat}) {
  let title="Danger";
  if(threat === "warning.dark"){
    threat = "warning"
    title="Attention Required"
  }
  else if(threat==="warning.light"){
    threat = "warning"
    title="Non Severe Issue"
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       
          <Alert variant="outlined" severity={threat}>{title}</Alert>
        </AccordionSummary>
        <AccordionDetails>
          {message}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

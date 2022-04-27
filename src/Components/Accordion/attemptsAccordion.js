import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "../Table/Table";
import "./style.scss";

function AttemptsAccordion({ data, accordionVisible, handleChange }) {
  const propForTable = {
    page: "education",
    data: data || [],
    headers: {
      titles: ["#", "Status", "Language", "Date"],
      fields: ["id", "status", "language", "date"],
    },
  };
  return (
    <Accordion expanded={accordionVisible} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Last attempt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table propForTable={propForTable} />
      </AccordionDetails>
    </Accordion>
  );
}

export default AttemptsAccordion;

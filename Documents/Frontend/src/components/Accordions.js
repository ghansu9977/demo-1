import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import PersonalForm from "./PersonalForm";
import ProfessionalForm from "./ProfessionalForm";
import EducationalForm from "./EducationalForm";
import MedicalForm from "./MedicalForm";
import FooterMenu from "./FooterMenu";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Personal Profile
        </AccordionSummary>
        <AccordionDetails>
          <PersonalForm />
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Reset</Button>
          <Button>Submit</Button>
        </AccordionActions> */}
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Professional Profile
        </AccordionSummary>
        <AccordionDetails>
          <ProfessionalForm />
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Reset</Button>
          <Button>Submit</Button>
        </AccordionActions> */}
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Educational Profile
        </AccordionSummary>
        <AccordionDetails>
          <EducationalForm />
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Reset</Button>
          <Button>Submit</Button>
        </AccordionActions> */}
      </Accordion>

      <Accordion sx={{ mb: 7.5, pb: 5 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Medical Profile
        </AccordionSummary>
        <AccordionDetails>
          <MedicalForm />
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Reset</Button>
          <Button>Submit</Button>
        </AccordionActions> */}
      </Accordion>
      <FooterMenu />
    </div>
  );
}

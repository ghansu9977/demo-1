import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FooterMenu from "./FooterMenu";
import Button from "@mui/material/Button";

export default function ProfessionalView() {
  const [date, setDate] = React.useState(dayjs("1965-06-20"));
  const [profession, setProfession] = React.useState("");

  const handleProfession = (event) => {
    setProfession(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#93CA9B",
        background: "linear-gradient(135deg, #8DA0C8 , #90EE90)",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
          backgroundColor: "#63e6be",
          display: "flex",
          justifyContent: "center",
          padding: "0 1.5rem",
          height: "86vh",
          boxShadow: "5px 5px 15px black",
          borderRadius: "5px",
          marginTop: "1.1rem",
          marginBottom: "1.1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <TextField id="standard-basic" label="Full Name" variant="standard" />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField
            id="standard-basic"
            label="Organization"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Designation"
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date of Birth"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField id="standard-basic" label="Mobile" variant="standard" />
          <TextField id="standard-basic" label="Address" variant="standard" />
          <TextField
            id="standard-basic"
            label="Aditional Information"
            variant="standard"
          />

          <label htmlFor="image" style={{ color: "#454545" }}>
            Upload Image
          </label>
          <input type="file" id="image" />
        </FormControl>
      </Box>
    </div>
  );
}

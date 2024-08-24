import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const createProfile = () => {
    navigate("/createProfile");
  };
  return (
    <Fab
      size="medium"
      color="primary"
      aria-label="add"
      onClick={createProfile}
      sx={{ position: "fixed", bottom: "5rem", right: "3rem" }}
    >
      <AddIcon />
    </Fab>
  );
}

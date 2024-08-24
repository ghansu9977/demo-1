import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function SendProfile() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <List sx={{ pt: 1 }}>
        {messageExamples.map(({ primary, secondary, person }, index) => (
          <ListItemButton key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />

            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

const messageExamples = [
  {
    primary: "Rahul Vishwakarma",
    secondary: "PE2354",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Bhola Vishwakarma",
    secondary: `PE8575`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Vishal Gehlot",
    secondary: "PR3856",
  },
  {
    primary: "Ghanshyam Kushwah",
    secondary: "PR4232",
  },
  {
    primary: "Ashish Ajmera",
    secondary: `ED7453`,
    person: "/static/images/avatar/5.jpg",
  },
];

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import FooterMenu from "./FooterMenu.js";

const messages = [
  {
    id: 1,
    secondary: "Vishal Gehlot Send you his profile.",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    secondary: `Ghanshyam Kushwah View your profile.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    secondary: "Bhola Vishwakarma Send you his profile.",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    secondary: "Rahul Vishwakarma View your profile.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    secondary: "Raj Thakur Send you his profile.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    secondary: `Abhimanyu Rajput View your profile.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    secondary: `Ritesh Patil Send you his profile.`,
    person: "/static/images/avatar/1.jpg",
  },
];

export default function Notification() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Notifications
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <FooterMenu />
    </React.Fragment>
  );
}

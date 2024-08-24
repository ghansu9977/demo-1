import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

export default function FooterMenu() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const home = () => {
    navigate("/home");
  };

  const search = () => {
    navigate("/search");
  };

  const message = () => {
    navigate("/chat");
  };

  const notification = () => {
    navigate("/notification");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          onClick={home}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Search"
          onClick={search}
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Message"
          onClick={message}
          icon={<MessageIcon />}
        />
        <BottomNavigationAction
          label="Notification"
          onClick={notification}
          icon={<NotificationsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

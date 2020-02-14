import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { styled } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Home,
  LocalTaxi,
  DirectionsBus,
  People,
  PaymentOutlined,
  AccountBalance,
  NotificationsNone,
  Settings,
  ExitToApp,
  AirlineSeatReclineExtra
} from "@material-ui/icons";
import BarChartIcon from "@material-ui/icons/BarChart";

const StyledLink = styled(NavLink)({
  color: "#19857b",
  textDecoration: "none"
});

//Navigation Menu and setting Dashobaord to true on load

const menus = [
  { name: "DashBoard", icons: <Home /> },
  { name: "Vehicles", icons: <DirectionsBus /> },
  { name: "Drivers", icons: <AirlineSeatReclineExtra /> },
  { name: "Customers", icons: <People /> },
  { name: "Rides", icons: <LocalTaxi /> },
  { name: "Support Tickets", icons: <ShoppingCartIcon /> },
  { name: "Push Notifications", icons: <NotificationsNone /> },
  { name: "Loans", icons: <AccountBalance /> },
  { name: "Analytics", icons: <BarChartIcon /> },
  { name: "Payments", icons: <PaymentOutlined /> },
  { name: "Settings", icons: <Settings /> }
];

// Rendering of JSX Menus list Items

function RenderMenuItem({ name, selected, icons, handleDrawerToggle }) {
  const url = name
    .split(" ")
    .join("-")
    .toLowerCase();

  return (
    <StyledLink onClick={handleDrawerToggle} to={`/${url}`}>
      <ListItem selected={url === selected} button>
        <ListItemIcon>{icons}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </StyledLink>
  );
}

export const MainListItems = ({ selected, handleDrawerToggle }) => {
  return (
    <Fragment>
      {menus.map((item, idx) => (
        <RenderMenuItem
          key={idx}
          handleDrawerToggle={handleDrawerToggle}
          selected={selected}
          {...item}
        />
      ))}
    </Fragment>
  );
};

export const SecondaryListItems = () => (
  <StyledLink color="primary" to="/">
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </StyledLink>
);

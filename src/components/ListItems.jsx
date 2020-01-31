import React, { Fragment, useState } from "react";
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
  { name: "DashBoard", state: true, icons: <Home /> },
  { name: "Vehicles", state: false, icons: <DirectionsBus /> },
  { name: "Drivers", state: false, icons: <AirlineSeatReclineExtra /> },
  { name: "Customers", state: false, icons: <People /> },
  { name: "Rides", state: false, icons: <LocalTaxi /> },
  { name: "Support Tickets", state: false, icons: <ShoppingCartIcon /> },
  { name: "Push Notifications", state: false, icons: <NotificationsNone /> },
  { name: "Loans", state: false, icons: <AccountBalance /> },
  { name: "Analytics", state: false, icons: <BarChartIcon /> },
  { name: "Payments", state: false, icons: <PaymentOutlined /> },
  { name: "Settings", state: false, icons: <Settings /> }
];

// Rendering of JSX Menus list Items

function RenderMenuItem({ name, icons, state, highlightMenuItem }) {
  return (
    <StyledLink
      onClick={highlightMenuItem}
      to={`/${name
        .split(" ")
        .join("-")
        .toLowerCase()}`}
    >
      <ListItem selected={state} button>
        <ListItemIcon>{icons}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </StyledLink>
  );
}

export const MainListItems = () => {
  const [isSeleted, setSelected] = useState(menus);

  //Remove Highligted Menus
  function highlightMenuItem(itemToHiglight) {
    const removeHighlightMenus = isSeleted.map(item => {
      if (item.state === true) {
        return { ...item, state: false };
      }
      return item;
    });

    //Add Highligt Menus to Menu Clicked
    const makeActive = removeHighlightMenus.map(item => {
      if (item.name === itemToHiglight.name) {
        return { ...item, state: true };
      }
      return item;
    });

    setSelected([...makeActive]);
  }

  return (
    <Fragment>
      {isSeleted.map((item, idx) => (
        <RenderMenuItem
          key={idx}
          highlightMenuItem={() => highlightMenuItem(item)}
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

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
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

const StyledLink = styled(NavLink)`
  color: #19857b;
  text-decoration: none;
`;

export const mainListItems = (
  <Fragment>
    <StyledLink to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/vehicles">
      <ListItem button>
        <ListItemIcon>
          <DirectionsBus />
        </ListItemIcon>
        <ListItemText primary="Vehicles" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/drivers">
      <ListItem button>
        <ListItemIcon>
          <AirlineSeatReclineExtra />
        </ListItemIcon>
        <ListItemText primary="Drivers" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/customers">
      <ListItem button>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/rides">
      <ListItem button>
        <ListItemIcon>
          <LocalTaxi />
        </ListItemIcon>
        <ListItemText primary="Rides" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/support-tickets">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Support Tickets" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/notifications">
      <ListItem button>
        <ListItemIcon>
          <NotificationsNone />
        </ListItemIcon>
        <ListItemText primary="Push Notifications" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/loans">
      <ListItem button>
        <ListItemIcon>
          <AccountBalance />
        </ListItemIcon>
        <ListItemText primary="Loans" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/analytics">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/payments">
      <ListItem button>
        <ListItemIcon>
          <PaymentOutlined />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/settings">
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </StyledLink>
  </Fragment>
);

export const secondaryListItems = (
  <StyledLink color="primary" to="/">
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </StyledLink>
);

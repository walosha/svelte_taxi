import React from "react";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Home,
  DriveEtaOutlined,
  People,
  PaymentOutlined,
  AttachMoney,
  NotificationsNone
} from "@material-ui/icons";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <Link href="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link href="/vehicles">
      <ListItem button>
        <ListItemIcon>
          <DriveEtaOutlined />
        </ListItemIcon>
        <ListItemText primary="Vehicles" />
      </ListItem>
    </Link>
    <Link href="/drivers">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Drivers" />
      </ListItem>
    </Link>
    <Link href="/customers">
      <ListItem button>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
    </Link>
    <Link href="/rides">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Rides" />
      </ListItem>
    </Link>
    <Link href="/support-tickets">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Support Tickets" />
      </ListItem>
    </Link>
    <Link href="/notifications">
      <ListItem button>
        <ListItemIcon>
          <NotificationsNone />
        </ListItemIcon>
        <ListItemText primary="Push Notifications" />
      </ListItem>
    </Link>
    <Link href="/loans">
      <ListItem button>
        <ListItemIcon>
          <AttachMoney />
        </ListItemIcon>
        <ListItemText primary="Loans" />
      </ListItem>
    </Link>
    <Link href="/analytics">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
    </Link>
    <Link href="/payments">
      <ListItem button>
        <ListItemIcon>
          <PaymentOutlined />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItem>
    </Link>
    <Link href="/settings">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <Link color="primary" href="/">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </Link>
);

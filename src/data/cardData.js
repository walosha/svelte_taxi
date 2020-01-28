import React from "react";
import {
  AccountCircleRounded,
  DirectionsBus,
  DriveEtaOutlined,
  House
} from "@material-ui/icons";

export const cardData = [
  {
    title: "Total Customers",
    amount: "45,765",
    percentChange: 6.7,
    icon: <AccountCircleRounded />,
    colorDark: "green",
    colorLight: "#c0e0c7"
  },
  {
    title: "Total Trips",
    amount: "5,765",
    percentChange: 6.7,
    icon: <DriveEtaOutlined />,
    colorDark: "blue",
    colorLight: "#d0dce8"
  },
  {
    title: "Total Drvers",
    amount: "1,765",
    percentChange: 6.7,
    icon: <DirectionsBus />,
    colorDark: "#e909f4",
    colorLight: "#dec3e0"
  },
  {
    title: "Loan Disbursed",
    amount: "1,200,765",
    percentChange: 6.7,
    icon: <House />,
    colorDark: "#e5af0d",
    colorLight: "#d3caad"
  }
];
export const notificationData = [
  {
    title: "Total Messages",
    amount: "905,765",
    bg: "green"
  },
  {
    title: "Total Recipients",
    amount: "5,75",
    bg: "blue"
  },
  {
    title: "In-App Notification",
    amount: "11,765",
    bg: "#e909f4"
  },
  {
    title: "SMS and Email Notification ",
    amount: "100,765",
    bg: "#e5af0d"
  }
];

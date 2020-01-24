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
    amount: "1765",
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

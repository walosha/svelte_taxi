import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Button, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import InputField from "../components/TextField";
import SectionHeader from "../components/SectionHeader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    display: "flex",
    height: "50%",
    width: "100%"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        indicatorColor="primary"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="management settings"
        className={classes.tabs}
      >
        <Tab label="Change Password" {...a11yProps(0)} />
        <Tab label="Access and Authorization" {...a11yProps(1)} />
        <Tab label="Notification" {...a11yProps(2)} />
        <Tab label="Log" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid justify="center" container spacing={3}>
          <Grid md={12} item>
            <InputField id="old password" label="Old password" />
            <InputField id="new password" label="New password" />
          </Grid>
          <Grid sm={12} item>
            <InputField id="confirm password" label="Confirm password" />
          </Grid>
          <Grid md={12} item>
            <Button variant="contained" color="primary">
              Change Password
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container justify="center" spacing={3}>
          <Grid item md={8}>
            <SectionHeader
              title="Roles"
              content="Set Up Administrative Roles for Certain Users Here"
            />
          </Grid>
          <Grid item md={5}>
            <Button variant="contained" color="primary">
              Change Password
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}

import React, { forwardRef } from "react";
import { Dialog, DialogContent, DialogContentText } from "@material-ui/core";
import { Grid, Typography, Button } from "@material-ui/core";
import { Slide, Box } from "@material-ui/core";
import Select from "./Select";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({ isOpen, setOpenDialog }) {
  const handleClose = () => {
    setOpenDialog(prevProps => !prevProps);
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <div style={{ padding: "2rem 2rem" }}>
        <Grid alignItems="center" alignContent="center" container>
          <Grid item md={6}>
            <Select />
          </Grid>
          <Grid item md={6}>
            <Grid item>
              <Typography
                component="p"
                variant="subtitle1"
                id="alert-dialog-slide-title"
              >
                Vehicle and Driver has been located
              </Typography>
            </Grid>
            <Box
              style={{ position: "absolute", top: " 8px", right: "-6px" }}
              component="span"
            >
              <Button onClick={handleClose} color="primary">
                &times;
              </Button>
            </Box>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are Let
                Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are Let
                Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </Grid>
            <Grid item md={7}>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are Let
                Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are Let
                Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
      </div>
    </Dialog>
  );
}

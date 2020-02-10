import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

export default function Pagination() {
  function handleClick() {
    console.log("button");
  }
  return (
    <ButtonGroup variant="contained" aria-label="split button">
      <Button color="primary" size="small" onClick={handleClick}>
        <ArrowBack />
      </Button>
      <Button onClick={handleClick}>1</Button>
      <Button color="primary" size="small" onClick={handleClick}>
        <ArrowForward />
      </Button>
    </ButtonGroup>
  );
}

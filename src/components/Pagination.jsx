import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

export default function Pagination() {
  const [page, setPage] = useState(1);

  function goBack() {
    if (page <= 1) {
      return;
    } else {
      setPage(prev => prev - 1);
    }
  }
  function goForward() {
    setPage(prev => prev + 1);
  }

  return (
    <ButtonGroup variant="contained" aria-label="split button">
      <Button color="primary" size="small" onClick={goBack}>
        <ArrowBack />
      </Button>
      <Button>{page}</Button>
      <Button color="primary" size="small" onClick={goForward}>
        <ArrowForward />
      </Button>
    </ButtonGroup>
  );
}

import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const RefreshButton = ({ clicked }) => {
  return (
    <Tooltip title="Refresh graph">
      <IconButton aria-label="refresh" color="primary" onClick={clicked}>
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RefreshButton;

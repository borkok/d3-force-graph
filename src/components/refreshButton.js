import React from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const RefreshButton = ({clicked}) => {
    return <Tooltip title="Refresh graph">
        <IconButton aria-label="refresh" color="primary" onClick={clicked}>
            <RefreshIcon/>
        </IconButton>
    </Tooltip>;
};

export default RefreshButton;
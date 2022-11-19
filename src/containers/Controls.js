import React from "react";
import Source from "./Source";
import ChargePicker from "./ChargePicker";
import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';

const Controls = () => {
    return (

            <Grid container justifyContent="space-between" sx={{width: '100%'}}>
                <Grid xs={4} display="flex" justifyContent="center">
                    <Source/>
                </Grid>
                <Grid xs={2} display="flex" justifyContent="center">
                    <ChargePicker/>
                </Grid>
            </Grid>
    )
};

export default Controls;

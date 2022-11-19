import React from "react";
import "./App.css";
import RelationVisualizer from "./containers/RelationVisualizer/RelationVisualizer";
import Controls from "./containers/Controls";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function App() {
    return (
        <div>
            <Grid container
                  spacing={2}
                  flexDirection={"column"}
                  align-items={"center"}
                  justify-content={"center"}
                  className="App"
                  sx={{ width: '100%'}}
            >
                <Grid sx={{ml: 1, mr: 1}}>
                    <Box sx={{
                        borderRadius: '10px',
                        bgcolor: 'grey.200'
                    }}
                    >
                        <Controls/>
                    </Box>
                </Grid>
                <Grid sx={{ml: 1, mr: 1}}>
                    <Box sx={{
                        borderRadius: '10px',
                        bgcolor: 'grey.200',
                        minHeight: '700px'
                    }}
                    >
                        <RelationVisualizer/>

                    </Box>
                </Grid>

            </Grid>
        </div>
    );
}

export default App;

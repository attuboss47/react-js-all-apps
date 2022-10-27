import React from "react";
import { Grid,TextField,Button } from "@mui/material";


export const Todom=()=>{
    return(
    
        <div className="main1" >
        <Grid   container spacing={2}>
            <Grid item xs={10} >
                <TextField fullWidth label="Input" variant="outlined" />

            </Grid>
            <Grid item xs={2} >
                <Button fullWidth variant="contained" >Add</Button>    
            </Grid>

        </Grid>
        </div>

    )
}
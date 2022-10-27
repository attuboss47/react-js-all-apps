import React from "react";
import { Button,TextField,Grid } from "@mui/material";

export const Employee=()=>{
    return(
        <div className="sub" >
            <Grid container  spacing={3}>
                <Grid item xs={4} > 
                <TextField label="First Name"  variant="outlined" fullWidth />

                </Grid>
                <Grid item xs={4}>
                    <TextField label="Middle Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Last Name" variant="outlined" fullWidth />

                </Grid>
                <Grid item xs={6}>
                    <TextField label="Mobile" variant="outlined" fullWidth/>

                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email" variant="outlined" fullWidth />
                </Grid>
                 <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success " >Submit</Button>

                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="error" >Cancel</Button>
                </Grid>

            </Grid>
            
           
        </div>
    )
}
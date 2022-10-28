import React from "react"
import { Grid,TextField,Button } from "@mui/material"
import Select from "react-select"

export const Registration=()=>{
    return(
<div>
    <h1>registration page</h1>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <TextField 
            label="Customer Id"
            variant="outlined"
            type="number"
            fullWidth

            />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            label="First Name"
            variant="outlined"
            type="text"
            fullWidth

            />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            label="Last Name"
            variant="outlined"
            type="text"
            fullWidth

            />
        </Grid>
        <Grid item xs={4}>
          <Select  />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            label="Account Type"
            variant="outlined"
            type="number"
            fullWidth

            />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            label="password"
            variant="outlined"
            type="password"
            fullWidth

            />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            label="re-enter password"
            variant="outlined"
            type="password"
            fullWidth

            />
        </Grid>
    </Grid>
    <Grid container spacing={2}>
      
        <Grid item xs={6}>
            <Button variant="contained" >Submit</Button>
        </Grid>
        <Grid item xs={6}>
            <Button variant="contained" >cancel</Button>
        </Grid>
    </Grid>
</div>


    )
}
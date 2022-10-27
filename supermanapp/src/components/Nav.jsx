import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <div className="back">
         <Grid container spacing={1}>
            <Grid item xs={0}>
                <Link to="/home" >Home</Link>
            </Grid>
            <Grid item xs={0}>
                <Link to="/customer" >Customer</Link>
            </Grid>
            <Grid item xs={0}>
                <Link to="/users" >Users</Link>
            </Grid>
         </Grid>
        </div>
    )
}
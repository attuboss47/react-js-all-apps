import React from "react";
import { Grid } from "@mui/material";
import {Link} from "react-router-dom";

export const Nav=()=>{
    return(
        <div className="nav">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Link to="/home">Home</Link>
                </Grid>
                <Grid  item xs={1}>
                    <Link to="/aboutus">About Us</Link>
                </Grid>
                <Grid  item xs={1}>
                    <Link to="/cart">Cart</Link>
                </Grid>
                <Grid  item xs={1}>
                    <Link to="/help">Help</Link>
                </Grid>
                <Grid  item xs={1}>
                    <Link to="/support">Support</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/customer">Customer</Link>
                </Grid>
                <Grid item xs={1}> 
                    <Link to="/product"  >Product</Link>
                </Grid>
            </Grid>
        </div>
    )
}
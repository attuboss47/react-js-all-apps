import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Link to="/home">Home</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/customer">Customer</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/products">Products</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/video">Video</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/greet">Greet</Link>
                </Grid>
            </Grid>
        </div>
    )
}
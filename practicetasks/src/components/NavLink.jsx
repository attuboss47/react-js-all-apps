import React from "react";
import {Grid} from "@mui/material";
import { Link } from "react-router-dom";
// import { ShoppingCartCheckout } from "@mui/icons-material";

export const NavLink=()=>{
    return(
        <div>
            <Grid container spacing={3}>

            <Grid item xs={2}>
            <Link to="/home">Home</Link>
            </Grid >

            <Grid item xs={2}>
            <Link to="/products">Customer</Link>
            </Grid>

            <Grid item xs={2}>
            <Link to="/support">Support</Link>
            </Grid>

            <Grid item xs={2}>
            <Link to="/help">help</Link>
            </Grid>
            <Grid item xs={2}>
                <Link to="/product">Product</Link>
            </Grid>
            {/* <Grid item xs={2}> */} 
                {/* <Link to="/cart"><ShoppingCartCheckoutIcon/></Link> */}
            {/* </Grid>    */}
            </Grid>
        </div>
    )
}
import React from "react";
import { Grid,} from "@mui/material";
import { Link } from "react-router-dom" 



export const Nav=()=>{

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                <Link to="/product list" >Product List</Link>
                </Grid>
            </Grid>

        </div>
    )
}
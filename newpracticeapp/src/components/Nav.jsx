import React from "react"
import {Grid} from "@mui/material"
import {Link} from "react-router-dom"

export const Nav =()=>{
    return(
        <div className="navbar">
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Link to="/home" >Home</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/productlist" >ProductList</Link>
                </Grid>
            </Grid>
        </div>
    )
}
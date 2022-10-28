import React from "react"
import { NavItem } from "./NavItem"
import { Grid } from "@mui/material"

export const Nav=()=>{
    return(
        <div className="nav"> 
            <Grid container spacing={1}>
            <NavItem path="/home" title="Home" xs={1} />
            <NavItem path="/banking" title="Banking" xs={1} />
            <NavItem path="/cards" title="Cards" xs={1} />
            <NavItem path="/loans" title="Loans" xs={1} />
            <NavItem path="/support" title="Support" xs={1} />
            <NavItem path="/regitration" title="Registration" xs={1} />
            </Grid>
        </div>
       
        

    )
}
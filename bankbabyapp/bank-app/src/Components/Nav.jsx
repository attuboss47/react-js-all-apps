import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
       <div className="nav">
        <Grid container spacing={1}>
            <NavItem path="/" title="Home" xs={1}/>
            <NavItem path="/banking" title="Banking" xs={1}/>
            <NavItem path="/cards" title="Cards" xs={1}/>
            <NavItem path="/loans" title="Loans" xs={1}/>
            <NavItem path="/support" title="Support" xs={1}/>
            <NavItem path="/register" title="Register" xs={1}/>
         </Grid>
       </div>
    )
}
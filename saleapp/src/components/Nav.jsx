import React from "react";
import { Grid} from "@mui/material";
import { Link } from "react-router-dom";
export const Nav =()=>{
    return(
        <div  className="subx">
            {/* <marquee behavior="" direction=""> */}
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Link to="/home" element > Home</Link>
                </Grid>
                <Grid item xs={1}>
                <Link to="/customer"  >customer</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/support">support</Link>
                </Grid>
                <Grid  item xs={1}>
                    <Link to="/greet" >Greet</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/user list" >User List</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/products" > Products</Link>
                </Grid>
            
                <Grid item xs={1}>
                    <Link to="/allusers" > Alluser</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/device" > Devices</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/student" >Students</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/employee" >Employee</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/abcd" >useRef</Link>
                </Grid>
            
            </Grid>
            {/* </marquee> */}
        </div>
    )
}
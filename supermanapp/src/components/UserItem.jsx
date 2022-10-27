import React from "react"
import { Grid,Card,CardContent } from "@mui/material"

export const UserItem=({item})=>{
return(
    <Grid item xs={3}>
        <Card sx={{bgcolor: item.isActive ? "green" : "red"}}>
            <CardContent>
                <h2>{`${item.fname}-${item.lname}`}</h2>
                <h3>{item.email}</h3>
                <h3>{item.mobile}</h3>
                <h3>{item.address}</h3>
                <h3>{item.isActive}</h3>
                <h3>{item.occupation}</h3>
            </CardContent>
        </Card>
    </Grid>
)}
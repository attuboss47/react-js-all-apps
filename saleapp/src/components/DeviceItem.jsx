import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const DeviceItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: item.isActive ?"green":"red" }}>
                <CardContent>
                    <h2>{item.name}</h2>
                    <h2>{item.model}</h2>
                    <h2>{item.made}</h2>
                    <h2>{item.make}</h2>
                    <h2>{item.isActive}</h2>
                </CardContent>
            </Card>
        </Grid>
    )
}
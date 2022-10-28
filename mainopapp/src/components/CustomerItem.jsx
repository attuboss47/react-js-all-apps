import React from "react"
import { Grid,Card,CardContent } from "@mui/material"

export const CustomerItem=({item})=>{

    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: "yellowgreen"}}>
                <CardContent>
                    <h1>Name:{item.name}</h1>
                    <h2>City:{item.city}</h2>
                    <h3>Email:{item.email}</h3>
                    <h4>Number:{item.number}</h4>
                    {/* <h5>{item.name}</h5> */}
                    {/* <h6>{item.name}</h6> */}
                </CardContent>
            </Card>
        </Grid>


)
}
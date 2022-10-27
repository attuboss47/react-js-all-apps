import React from "react"
import { Grid,Card,CardContent } from "@mui/material"



export const CustomerItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: "red"}}>
                <CardContent>
                    {/* <img src={item.ig} alt="" /> */}
                    <h3>Name:{item.name}</h3>
                    <h3>Number:{item.number}</h3>
                    <h3>City:{item.city}</h3>
                </CardContent>
            </Card>
        </Grid>
    


    )
}
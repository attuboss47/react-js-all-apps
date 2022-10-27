import React from "react";
import {Grid,Card,CardContent} from "@mui/material"


export const ProductItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: "coral",height:300,padding:1}}>
                <CardContent>
                    <p>{item.userId}</p>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.body }</p>
                </CardContent>
            </Card>
        </Grid>
        
    )
}
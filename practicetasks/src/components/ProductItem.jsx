import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
export const ProductItem=({item})=>{
    return(
        
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <h3>{item.name}</h3>
                        <h4>{item.city}</h4>
                        <h5>{item.number}</h5>
                    </CardContent>
                </Card>
            </Grid>           
        
    )
}
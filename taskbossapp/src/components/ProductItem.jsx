import React from "react"
import { Grid,Card,CardContent } from "@mui/material"

export const ProductItem=({item})=>{
    return(
        <Grid item xs={4}>
                <Card sx={{bgcolor:"greenyellow"}}> 
                    <CardContent>
                        <h3>{item.id}</h3>
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.description}</h3>
                        <h3>{item.category}</h3>
                        {/* <h3>{item.image}</h3> */}


                        <img src={item.image} alt="" width={150} />
                        {/* <h3>{item.id}</h3>
                        <h3>{item.name}</h3>
                        <h3>{item.email}</h3>
                        <h3>{item.address.geo.lat}</h3> */}
                    </CardContent>
                </Card>
        </Grid>

    )
}
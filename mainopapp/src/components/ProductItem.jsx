import React from "react"
import { Grid,Card,CardContent,Rating } from "@mui/material"

export const ProductItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: "cadetblue"}}>
                <CardContent>
                    <h3>{item.title.slice(0,25)}</h3>
                    <h3>{item.price}</h3>
                    <h3>{item.description.slice(0,10)}</h3>
                    <h3>{item.category}</h3>
                    <img src={item.image} alt="" width={150} height={150}/>
                    <Rating name="" value={item.rating.rate} />
                    {"("+item.rating.count+")"}
                </CardContent>
            </Card>
        </Grid>
    )
}
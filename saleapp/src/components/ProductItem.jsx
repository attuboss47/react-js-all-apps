import React from "react"
import {Grid,Card,CardContent,Rating} from "@mui/material"

export const ProductItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{ bgcolor: "greenyellow"}}>
                <CardContent>
                    <img src={item.image} alt=""  width={200} height={200}/>
                    <h3>{item.title.slice(0,25+"...")}</h3>
                    <h3>{item.category}</h3>
                    <br />
                    <Rating name="abcd" value={item.rating.rate}  />
                    {" (" +item.rating.count +") " }
                </CardContent>
            </Card>

        </Grid>

        
    )
}
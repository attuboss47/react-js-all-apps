import React from "react"
import { Grid,Card,CardContent,Rating } from "@mui/material"

export const EmpItem=({item})=>{
    console.log(item)
    return(
        <Grid item xs={3}>
                <Card sx={{bgcolor: item.house}}>
                    <CardContent>
                        <h2>{item.name}-{item.age}</h2>
                        <h2>{item.dept}</h2>
                        <h2>{item.age}</h2>
                        <h3>{item.city}</h3>
                        <Rating value={item.Rating} />
                    </CardContent>
                </Card>
        </Grid>

    )
}
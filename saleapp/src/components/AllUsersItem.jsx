import React from "react"
import { Grid,Card,CardContent } from "@mui/material"

export const AllUserItem=({item})=>{
    return(
<Grid item xs={3}>
    <Card>
        <CardContent>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <h3>{item.username}</h3>
            <h3>{item.email}</h3>
        </CardContent>
    </Card>
</Grid>
)
}
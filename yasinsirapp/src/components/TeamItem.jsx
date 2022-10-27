import { ViewAgenda } from "@mui/icons-material"
import { Grid,Card,CardContent } from "@mui/material"
import React from "react"


export const TeamItem=({item})=>{
    return(
        <Grid item xs={2}>
            <Card>
                <CardContent>

                    <h3>{item.name}</h3>
                    {item.type} - {item.level}
                    <h5>{item.age}</h5>
                </CardContent>
            </Card>
        </Grid>

    )
}
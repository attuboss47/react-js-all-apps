import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const StudentItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <h3>{item.name}</h3>
                    {item.cls}-{item.div}
                </CardContent>
            </Card>

        </Grid>

    )
}
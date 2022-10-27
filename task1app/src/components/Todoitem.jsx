import React from "react";
import { Card,Grid,CardContent } from "@mui/material";

export const Todoitem=({item})=>{
    return(

        <Grid item xs={4}>
            <Card className="boss">
                <CardContent>
                    {item}
                </CardContent>
            </Card>

        </Grid>
    )
}
import { Card, CardContent, Grid } from "@mui/material"
import React from "react"
 
export const AccountSummaryItem=({item})=>{
    return(
        <>
        <Grid item xs={4}>
            <Card sx={{textAlign:"center" , bgcolor:"steelblue", color:"white", fontWeight:"bolder"}}>
                <CardContent>
                 {item}
                </CardContent>
            </Card>
        </Grid>
        </>
    )
}
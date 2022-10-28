import React from 'react'
import {Grid,Card, CardContent} from "@mui/material"

export const AccountsummaryItem = ({item}) => {
  return (
    <Grid item xs={4}>
        <Card sx={{textAlign:"center", bgcolor:"Green", color: "white", fontWeight: "bolder"}}>
            <CardContent>
                    {item}
            </CardContent>
        </Card>
    </Grid>
  )
}

export default AccountsummaryItem

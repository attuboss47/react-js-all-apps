import React from "react"
import { Grid,Card,CardContent } from "@mui/material"


export const StudentItem=({item,options})=>{
    return(
       <Grid item xs={3}>

         <Card sx={{bgcolor: item.house}}>
            <CardContent>
                <h3>{`${item.fname}-${item.lname}`}</h3>
                <h3>{`${item.class}-${item.div}`}</h3>
                {/* <h3>{`${item.}-${item.}`}</h3> */}
                <h5>{`Fav sport:${item.favsports}`}</h5>
                <h5>{item.gender}</h5>
            </CardContent>
         </Card>

       </Grid>
    )
}
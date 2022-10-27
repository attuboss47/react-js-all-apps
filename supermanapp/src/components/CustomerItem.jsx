import React from "react";
import { Grid,Card,CardContent,Button} from "@mui/material";

export const CustomerItem=({item})=>{
    

    
    return(
        <Grid item xs={3}>
            <Card className="card" sx={{bgcolor: "gold"}}>
                <CardContent>
                    <h1>Name:{item.name}</h1>
                    <h2>Age:{item.age}</h2>
                    <h3>Number:{item.number}</h3>
                    <h4>Email:{item.email}</h4>

                <Grid container spacing={2}>
                    <Grid item xs={6} fullwidth>
                        <Button variant="contained">Delete</Button>
                    </Grid>
                    <Grid item xs={6} fullwidth>
                        <Button variant="contained">Edit</Button>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
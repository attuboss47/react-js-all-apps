import React from "react";
import { Grid,Card,CardContent,Button } from "@mui/material";
// import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineOutlinedSharp";

 
export const ProItem =({item})=>{
    const handleAdd=()=>{

    }
    return(
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <h4> Name:{item.product}</h4>
                    <h5>Price:{item.price}</h5>
                    <h5>Discount:{item.off} </h5>
                    <img src={item.image} alt="" />
                    {/* <h4><StarOutlineSharpIcon/></h4> */}
                    <Button onClick={handleAdd} >Add to Cart</Button>
                </CardContent>
            </Card>
        </Grid>
        
    )
}
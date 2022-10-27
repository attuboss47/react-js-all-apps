import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import {ProItem} from "./ProItem"



export const ProList=()=>{
    const [data,setData]=useState([])
    const [product,setProduct]=useState("")
    const [price,setPrice]=useState("")
    const [off,setOff]=useState("")
    const [image,setImage]=useState("")

    const handleSubmit=()=>{
        const prod={product,price,off,image}
        setData([prod,...data])
        setProduct("")
        setPrice("")
        setOff("")
        setImage("")
    }
    return(
        <div>
            <h1>Product</h1>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <TextField variant="outlined" label="Product" value={product} onChange={(e)=>setProduct(e.target.value)} fullWidth  />
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" label="Price" value={price} onChange={(e)=>setPrice(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" label="off" value={off} onChange={(e)=>setOff (e.target.value) } fullWidth  />
                </Grid>
                <Grid item xs={2}  >
                    <TextField variant="outlined" label="image" onChange={(e)=>setImage(e.target.value)}fullWidth />

                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleSubmit} fullWidth>Add</Button>
                </Grid>
                {
                    data.length>0 && data.map(item=>
                        <ProItem item={item} />)
                }


            </Grid>
        </div>
    )
}
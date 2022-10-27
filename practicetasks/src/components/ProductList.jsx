import React, { useState } from "react";
import { Grid,Button,TextField } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const ProductList=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [city,setCity]=useState("")
    const [number,setNumber]=useState("")

    const handleAdd=()=>{
        const arr={name,city,number}
        setData([arr,...data])
        setName("")
        setCity("")
        setNumber("")
    }
    
    return(
        <div>
            <h1></h1>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField radiant="outlined"  onChange={(e)=>setName(e.target.value)} label="Name" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField radiant="outlined"  onChange={(e)=>setCity(e.target.value)} label="City" fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <TextField radiant="outlined" onChange={(e)=>setNumber(e.target.value)} label="Number" fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={handleAdd}>Add</Button>
                    
                </Grid>
                {
                  data.length>0 &&  data.map(item=>
                        <ProductItem item ={item} />
                        )

                }

            </Grid>

        </div>
    )
}
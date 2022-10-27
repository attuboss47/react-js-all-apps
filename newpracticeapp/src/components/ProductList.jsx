import React, { useEffect, useState } from "react"
import { ProductItem } from "./ProductItem"
import {Grid,TextField,Button} from "@mui/material"
import axios from "axios"

export const ProductList=()=>{
    const [data,setData]=useState([])

    const getdata=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(result.data)
        console.log(result.data)
    }
    useEffect(()=>{
        getdata()
    },[])
    
    return(
        <div>
            <h1>ProductList</h1>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField label="Search" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth>Search</Button>
                </Grid>

                {
                    data.length>0 && data.map(item=>
                        <ProductItem item={item} />
                        )
                }

            </Grid>
        </div>
    )
}
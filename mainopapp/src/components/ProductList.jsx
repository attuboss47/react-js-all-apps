import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const ProductList=()=>{
    const [data,setData]=useState([])


    const getData=async()=>{
        const result= await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <h1>ProductList</h1>
            <Grid container spacing={2}>
                {
                    data.length>0 && data.map(item=>
                        <ProductItem item={item} />
                        )
                }
                
            </Grid>
        </div>
    )
}
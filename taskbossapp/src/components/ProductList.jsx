import React, { useState,useEffect } from "react";
import { Grid } from "@mui/material";
import {ProductItem} from "./ProductItem"
import axios from "axios"

export const ProductList=()=>{
   const [data,setData]=useState([])
   const getData= async()=>{
        // const result= await axios.get("https://jsonplaceholder.typicode.com/users")
        const result= await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
    }
    useEffect(()=>{
            getData()
    },[])
    return(
        <div>
            <Grid container spacing={2}>
                

                </Grid>
                {
                    data.length>0 && data.map(item=>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>

                            <ProductItem item={item}/>
                            </Grid>

                        </Grid>
                        )
                }
            </Grid>
        </div>
    )
}
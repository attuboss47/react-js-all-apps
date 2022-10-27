import React from "react"
import { Grid } from "@mui/material"                                                                                
import { useState,useEffect } from "react"
import axios from "axios"
import { UserItem } from "./UserItem"

export const UserList=()=>{
    const[data,setData]=useState([])

    const getData=async()=>{
        const result=await axios.get("http://localhost:6060/attuboss47")
        setData(result.data)
        console.log(result.data)
    }
    useEffect(()=>{
        getData()   
    },[])
    return(
        <div>
            <Grid container spacing={2}>
                {
                    data.length>0 && data.map((item)=>(
                        <UserItem item={item}/>

                    ))
                }
            </Grid>
        </div>
    )
}
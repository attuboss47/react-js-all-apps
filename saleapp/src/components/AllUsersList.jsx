import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { AllUserItem } from "./AllUsersItem";

export const AllUsersList=()=>{
    const [data,setData]=useState([])

    const getData= async()=>{
        const result= await axios.get("http://localhost:8080/allusers")
        setData(result.data.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            ghsddfghjkdfg
            <Grid container spacing={2}>
                {
                    data.map((item)=> <AllUserItem item={item} />)
                }
            </Grid>
        </div>
    )
}
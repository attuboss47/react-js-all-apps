import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DeviceItem } from "./DeviceItem";
import axios from "axios";

export const DeviceList =()=>{
    const[data,setData]=useState([])
    const getData= async()=>{
      const result= await axios.get("http://localhost:8080/devices")
      setData(result.data)
    }
    useEffect(()=>{
    getData()
    },[])
    return(
        <div>
            <br /><br /><br />
            <Grid container spacing={2}>
                {
                 data.length>0 && data.map((item)=>(
                    <DeviceItem item={item} />
                 ))
                }
            </Grid>
        </div>
    )
}
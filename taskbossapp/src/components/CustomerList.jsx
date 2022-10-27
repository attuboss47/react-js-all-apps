import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";
import {CustomerItem} from "./CustomerItem"
export const CustomerList=()=>{

    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [city,setCity]=useState("")
    // const [ig,setIg]=useState("")


    const handleAdd=()=>{
    const arr={name,number,city}
    setData([arr,...data])
    setName("")
    setNumber("")
    setCity("")
    // setIg("")
    }

    return(
        <div className="background">
            <br />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} label="Name" fullWidth />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" value={number} onChange={(e)=>setNumber(e.target.value)} label="Number" fullWidth/>
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" value={city} onChange={(e)=>setCity(e.target.value)} label="City" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </Grid>
                {
                    data.length>0 && data.map(item=>
                        <CustomerItem item={item} />
                        )
                }
            </Grid>
        </div>
    )
}
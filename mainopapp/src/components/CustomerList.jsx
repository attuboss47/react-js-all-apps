import { Grid,TextField,Button } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { CustomerItem } from "./CustomerItem"

export const CustomerList=()=>{
    
    const[data,setData]=useState([])
    const[name,setName]=useState("")
    const[city,setCity]=useState("")
    const[number,setNumber]=useState("")
    const[email,setEmail]=useState("")
    const in1=useRef()
    const in2=useRef()
    


    const handleAdd=()=>{
    const result={name,city,number,email}
    if(name.trim()!=="")
    setData([result,...data])
    setName("")
    setCity("")
    setNumber("")
    setEmail("")
    
}
useEffect(()=>{
    in1.current.focus()
},[])
useEffect(()=>{
    in2.current.focus()
},[city])
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField label="Name" variant="standard"  value={name} inputRef={in1} onChange={(e)=>setName(e.target.value)}  fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <TextField label="City" variant="standard" value={city} inputRef={in2} onChange={(e)=>setCity(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <TextField label="Number" variant="standard" value={number} onChange={(e)=>setNumber(e.target.value)}fullWidth />
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleAdd} fullWidth>Add</Button>
                </Grid>
                {
                    data.length>0 && data.map(item=>
                        <CustomerItem item={item}  />
                        )
                }
            </Grid>
        </div>
    )
}
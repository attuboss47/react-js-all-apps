import React,{useEffect, useRef, useState} from "react";
import { Grid,TextField,Button } from "@mui/material";
import { CustomerItem } from "./CustomerItem";

export const CustomerList=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [city,setCity]=useState("")
    const inputRef1=useRef()
    const inputRef2=useRef()
    const inputRef3=useRef()

    const handleAdd=()=>{
        const arr={name,mobile,city}
        setData([arr,...data])
        setName("")
        setMobile("")
        setCity("")

    }
    useEffect(()=>{
        inputRef1.current.focus()
    },[])
    useEffect(()=>{
        inputRef2.current.focus()
    },[])
    useEffect(()=>{
        inputRef3.current.focus()
    },[])

    return(

<div>
    <h1></h1>
            <Grid container spacing={3}>
                
                <Grid item xs={6}>
                    <TextField variant="outlined"  value={name} onChange={(e)=>setName(e.target.value)}  label="Name" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" inputRef={inputRef1}  value={mobile} onChange={(e)=> setMobile(e.target.value)} label="Mobile" fullWidth />

                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" inputRef={inputRef1}  value={city} onChange={(e)=> setCity(e.target.value)} label="City" fullWidth />

                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </Grid>



                {
                    data.length >0 && data.map(item=> 
                        <CustomerItem item={item} />
                        )
                }

            </Grid>

        </div>
    )
}
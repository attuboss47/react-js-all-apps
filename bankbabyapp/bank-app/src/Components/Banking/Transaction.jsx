import React, { useState,useEffect } from 'react'
import {Grid,Card,CardContent, TextField, Button} from "@mui/material"
import {AccountSummary} from "./AccountSummary"
import Select from "react-select"
import axios from "axios"

export const Transaction = () => {
const [transOption, setTransOption]=useState([])
const [accNo, setAccNo]=useState(789798797)
const [accType, setAccType]=useState("S")
const [amnt, setAmnt]=useState(0)
const [trasType, setTransType]=useState("D")
const [isValid, setIsValid]= useState(false)
 
const getdata=async()=>{
const result= await axios.get("http://localhost:7500/trastype")
     setTransOption(result.data)
     console.log(result.data)
}

useEffect(()=>{
    if(amnt>0){setIsValid(true) }
    else{setIsValid(false) }
},[amnt])

useEffect(()=>{
  getdata()
},[])

const handelSubmit=()=>{
    const payload={
        accNo,
        accType,
        amnt,
        trasType,
    }
    axios.post("http://localhost:7500/transaction",payload)
    setAmnt(0)
}
  return (
   <React.Fragment>
    <Card>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AccountSummary/>
                </Grid>
                <Grid item xs={4}>Type: </Grid>
                <Grid item xs={8}>
                    <Select options={transOption} onChange={(val)=>setTransType(val.value)}/>
                </Grid>
                <Grid item xs={4}>Amount</Grid>
                <Grid item xs={8}>
                    <TextField label="Amount" value={amnt} variant="standard" onChange={(e)=>setAmnt(e.target.value)}/>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" disabled={!isValid} color="success" fullWidth onClick={handelSubmit}>Submit</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" fullWidth>Cancel</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
   </React.Fragment>
  )
}

export default Transaction

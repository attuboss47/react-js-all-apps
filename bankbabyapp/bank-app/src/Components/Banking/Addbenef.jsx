import React, { useState, useEffect } from 'react'
import { Button, Grid, TextField, Alert } from '@mui/material'
import Select from "react-select"
import axios from "axios"


export const Addbenef = ({accounttypeOption}) => {
    const [accNo, setAccNo]=useState(11367)
    const [refaccNo, setrefAccNo]=useState(3983583583)
    const [accType, setAccType]= useState({})
    const [name, setName]= useState("")
    const [limit, setLimit]=useState(1000)
    const [isActive]= useState(true)
    const [isValid, setIsValid]=useState(false)
    const [msg, setMsg]=useState()



useEffect(()=>{
setTimeout(()=>{
    setMsg("")
},3000)
},[msg])
 useEffect(()=>{
      accNo && name && limit>=1000 &&  accType ? setIsValid(true) : setIsValid(false)
 },[accNo,name,limit,accType])

 const handelClear=()=>{
    setAccNo("")
    setAccType({})
    setrefAccNo("")
    setName("")
    setLimit("")
 }

 const handelBenef= async()=>{
    const payload ={
        accNo,
        name, 
        accType:accType.value,
     refaccNo,
        isActive,
        limit
    }
    const result = await axios.post("http://localhost:7500/addbenefs",payload)
    console.log(result.data)
    result.status === 200 && setMsg(result.data)
    result.status === 200 && handelClear()

 }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
            <TextField value={accNo} label="Beneficiary Account Number" variant='outlined' fullWidth 
            onChange={e=>setAccNo(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
                <Select value={accType}  placeholder="Select Account Type" options={accounttypeOption}
                onChange={(val)=>setAccType(val)}/>
        </Grid>
        <Grid item xs={4}>
            <TextField value={name} label="Beneficiary Account Name" variant='outlined' fullWidth
            onChange={e=>setName(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
            <TextField value={limit} onChange={e=>setLimit(e.target.value)} label="Beneficiary Account Max Limit" variant='outlined' fullWidth/>
        </Grid>
        <Grid item xs={4}>
           <Button variant="contained" fullWidth disabled={!isValid} onClick={handelBenef}
           >Add Beneficiary </Button>
        </Grid >
        <Grid item xs={4}>
           <Button variant="contained" fullWidth onClick={handelClear} >Clear</Button>
           </Grid>

           <Grid item xs={8}></Grid>
           <Grid item xs={4}>
            { msg && <Alert severity="success">{msg}</Alert> }
           </Grid>
        </Grid>
    
      </React.Fragment>
  )
}

export default Addbenef

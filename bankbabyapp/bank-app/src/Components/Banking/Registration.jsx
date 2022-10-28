import React,{useEffect, useState} from 'react'
import {Grid, TextField, Button} from "@mui/material"
import Select from "react-select"
import axios from "axios"

 export const Registration = () => {
    const [accType, setAccType]=useState([])
    const [accounttypeOption,setaccounttypeOption]=useState()
    const [id,setId]=useState("")
    const [fname, setFname]=useState("")
    const [lname, setLname]=useState("")
    const [password,setPassword]= useState("")
    const [repassword,setrePassword]= useState("")
    const [accDetail, setAccDetail]= useState({})

const getData=async()=>{
    const result = await axios.get("http://localhost:7500/acctype")
    setaccounttypeOption(result.data)
}

useEffect(()=>{
    getData()
},[])


const handelSubmit =()=>{
setAccDetail({id,fname,lname,password,repassword,accType})
const payload = accDetail
}



  return (
    <div>
      <h1>Registration</h1>
      <Grid container spacing={3}>
         <Grid item xs={3}>
            <TextField 
             label ="Customer ID"
             variant='outlined'
            type="number"
            fullWidth
            onChange={e=>setId(e.target.value)}
             />
         </Grid>
         <Grid item xs={3}>
            <Select
            //  value={accType}
             options={accounttypeOption}
            //  onChange={(val=>setAccType(val))}
             placeholder= "select account type"
             />
         </Grid>
         <Grid item xs={3}>
            <TextField 
             label ="First Name"
             variant='outlined'
            type="text"
            fullWidth
            onChange={e=>setFname(e.target.value)}
             />
         </Grid>
         <Grid item xs={3}>
            <TextField 
             label ="Last Name"
             variant='outlined'
            type="text"
            fullWidth
            onChange={e=>setLname(e.target.value)}
        
             />
         </Grid>

        {/* <Select options/> */}

         <Grid item xs={3}>
            <TextField    label ="Password"  variant='outlined'  type="password" fullWidth
             onChange={e=>setPassword(e.target.value)}
         />
         </Grid>
         <Grid item xs={3}>
            <TextField 
             label ="Re-enter Password" variant='outlined'  type="password" fullWidth
             onChange={e=>setrePassword(e.target.value)}
             />
         </Grid>

         <Grid item xs={3}>
            {}
         </Grid>

        <Grid item xs={6}>
          <Button variant ="contained" onClick={handelSubmit}>Submit </Button>
        </Grid>
        <Grid item xs={6}>
          <Button  variant ="contained" >Calcel</Button>
        </Grid>
        <Grid item xs={3}>
            {}
         </Grid>
      </Grid>
    </div>
  )
}

export default Registration

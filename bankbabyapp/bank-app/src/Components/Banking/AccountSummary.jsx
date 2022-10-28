import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Grid } from '@mui/material'
import {AccountsummaryItem} from "./AccountsummaryItem"


export const AccountSummary = () => {

    const [data,setData]=useState({})

const getData =async()=>{
    const payload ={
        accNo:789798797,
    }
   const result = await axios.post("http://localhost:7500/balance",payload)
   setData(result.data)
}
useEffect(()=>{
    getData()
},[])

  return (
    <React.Fragment>
      <Grid container spacing={2}>

        <AccountsummaryItem item="Total Credits"/>
        <AccountsummaryItem item="Total Debits"/>
        <AccountsummaryItem item="Total Balance"/>
        <AccountsummaryItem item={data.creditAmnt}/>
        <AccountsummaryItem item={data.debitsAmnt}/>
        <AccountsummaryItem item={data.balance}/>

      </Grid>
    </React.Fragment>
  )
}

export default AccountSummary

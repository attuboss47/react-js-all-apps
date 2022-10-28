import React,{useEffect, useState} from 'react'
import {Addbenef} from "./Addbenef"
import {Card, CardContent} from "@mui/material"
import axios from "axios"




export const Beneficiary = () => {
  const [accounttypeOption,setaccounttypeOption]=useState([])

const getData=async()=>{
  const result = await axios.get("http://localhost:7500/acctype")
  setaccounttypeOption(result.data)
}

useEffect(()=>{
  getData()
},[])

  return (
    <React.Fragment>
      <Card>
        <CardContent>
        <Addbenef accounttypeOption={accounttypeOption}/>
        </CardContent>
        </Card>
    </React.Fragment>
  )
}

export default Beneficiary

import React, { useEffect, useState,useRef } from "react"
import { Grid,Button,TextField } from "@mui/material"
import axios from "axios"
import Select from "react-select"
import { EmpItem } from "./EmpItem"




export const EmpList=()=>{
const houseRef=useRef()
const cityRef=useRef()
const deptRef=useRef()
const [data,setData]=useState([])
const [houseData,setHouseData]=useState([])
const [cityData,setCityData]=useState([])
const [deptData,setDeptData]=useState([])
const [house,setHouse]=useState("")
const [city,setCity]=useState("")
const [dept,setDep]=useState("")
// const [txtHouse,setTxtHouse]=useState("")

 

// const handleSearch=()=>{
//     getDatafilt({})
// }

   const getData=async ()=>{
    const result= await axios.get("http://localhost:4040/students")
    setData(result.data)
    const opt1=await axios.get("http://localhost:4040/houses")
    setHouseData(opt1.data)
    const opt2=await axios.get("http://localhost:4040/cities")
    setCityData(opt2.data)
    const opt3=await axios.get("http://localhost:4040/departments")
    setDeptData(opt3.data)
} 


const getFiltData=async(payload)=>{
    const result=await axios.post("http://localhost:4040/filt",payload)
    setData(result.data)
}
const handleSearch=()=>{
    getFiltData({house,city,dept})
    houseRef.current.focus()
}



// useEffect(()=>{

// },[])

useEffect(()=>{
    getFiltData({house})
    cityRef.current.focus()
},[house])

useEffect(()=>{
    getFiltData({city})
    deptRef.current.focus()
},[city])

useEffect(()=>{
    getFiltData({dept})
},[dept])

useEffect(()=>{
    getData()
    houseRef.current.focus()

},[])
    return(

        <div>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <TextField variant="standard" label=" add houses" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth>add </Button>
                </Grid>
                <Grid item xs={3}>
                    <Select options={houseData} ref={houseRef} onChange={(val)=>setHouse(val.label)}  />

                </Grid>
                <Grid item xs={3}>
                    <Select options={cityData} ref={cityRef} onChange={(val)=>setCity(val.label)} />

                </Grid>
                <Grid item xs={3}>
                    <Select options={deptData} ref={deptRef}  onChange={(val)=>setDep(val.label)} />

                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleSearch}>Advance Search</Button>
                </Grid>
                {
                    data.length>0 && data.map(item=>
                     <EmpItem item={item} />  
                      )
                }
            </Grid>
        </div>
    )
}
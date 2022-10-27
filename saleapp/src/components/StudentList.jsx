import React,{useState,useEffect, useRef} from "react"
import { Grid,Button } from "@mui/material"
import{StudentItem} from "./StudentItem"
import axios from "axios"
import Select from "react-select"


export const StudentList=()=>{
    const[data,setData]=useState([])
    const classRef=useRef()
    const changeHouseRef=useRef()
    const divisiRef=useRef()
    const optionshouse=[
        {value:"green",label:"green"},
        {value:"orange",label:"orange"},
        {value:"purple",label:"purple"},
        {value:"red",label:"red"}
    ]
    const optionsClass=[
        {value1:"all",label:"all"},
        {value1:"1",label:"1"},
        {value1:"2",label:"2"},
        {value1:"3",label:"3"},
        {value1:"4",label:"4"},
        {value1:"5",label:"5"},
        {value1:"6",label:"6"},
        {value1:"7",label:"7"},
        {value1:"8",label:"8"},
        {value1:"9",label:"9"},
        {value1:"10",label:"10"}
    ]
    const optionsDiv=[
        {value:"A",label:"A"},
        {value:"B",label:"B"},
        {value:"C",label:"C"},
        {value:"D",label:"D"}
    ]
    const handelChangeHouse= async(selected)=>{
        const payload={house: selected.value}
        const result= await axios.post("http://localhost:5051/housewise",payload)
        setData(result.data)
    }

    const getData= async()=>{
        const result=await axios.get("http://localhost:5051/all")
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(

        <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Select  options={optionsClass} ref={classRef} />
                    </Grid>
                    <Grid item xs={3}>
                        <Select onChange={handelChangeHouse} options={optionshouse} ref={changeHouseRef} />
                    </Grid>
                    <Grid item xs={3}>
                        <Select options={optionsDiv} ref={divisiRef} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" fullWidth>Search</Button>
                    </Grid>

                    {
                        data.map((item)=>
                            <StudentItem item={item}/>

                            )
                    }

                </Grid>
        </div>
    )
}
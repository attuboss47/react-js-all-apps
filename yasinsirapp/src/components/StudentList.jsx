import React,{useState} from "react";
import { Grid,TextField,Button } from "@mui/material";
import { StudentItem } from "./StudentItem";

export const StudentList =()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [cls,setCls]=useState("")
    const [div,setDiv]=useState("")

    const handleAdd=()=>{
        const student={name,cls,div}
        setData([student,...data])
        
    }
    return(
        <div className="subb">
            <Grid container spacing={3}>

                <Grid item xs={4}>
                    <TextField variant="outlined" onChange={(e)=>setName(e.target.value)} label="Full Name" fullWidth />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" onChange={(e)=>setCls(e.target.value)} label="Class" fullWidth />

                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" onChange={(e)=>setDiv(e.target.value)} label="Division" fullWidth  />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleAdd} >Add</Button>
                </Grid>
            {
                data.length>0 && data.map(item=>
                    <StudentItem item={item}/>
                    
                    )
            }

            </Grid>
        </div>
    )
}
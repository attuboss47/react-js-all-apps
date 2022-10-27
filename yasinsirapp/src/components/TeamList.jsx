import React,{useState} from "react";
import { Grid ,TextField,Button} from "@mui/material";
import { TeamItem } from "./TeamItem";

export const TeamList=()=>{
    const[data,setData]=useState([])
    const [name,setName]=useState("")
    const[type,setType]=useState("")
    const [level,setLevel]=useState("")
    const [age,setAge]=useState("")


    const handleAdd=()=>{
        const member={name,type,level,age}
        if(name.trim()!==""){
        setData([member,...data])
        setName("")
        setType("")
        setLevel("")
        setAge("")
    }}
    return(
        <div className="subb">

            <Grid container spacing={3}>

                <Grid item xs={4}> 
                <TextField variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} label="name"  fullWidth />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" value={type} onChange={(e)=>setType(e.target.value)} label="type " fullWidth />

                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" value={age} label="age" onChange={(e)=>setAge(e.target.value)}  />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" value={level} onChange={(e)=>setLevel(e.target.value)} label="level"  fullWidth />

                </Grid>
                <Grid item xs={2}>
                    <Button onClick={handleAdd} variant="contained">Add</Button>

                </Grid>
                {
                    data.length>0 && data.map(item=>
                        <TeamItem item={item} /> 
                        )
                }
            </Grid>

        </div>
    )
}
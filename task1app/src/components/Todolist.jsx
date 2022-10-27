import React,{useState} from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Todoitem } from "./Todoitem";

export const Todolist=()=>{

    const [name,setName]=useState("")
    const [data,setData]=useState([])
    const attuBoss=()=>{
        if(name.trim()!== "" ){

        setData([...data,name]) 
        setName("")}
   
    }

    return(
        <div>


    
     <Grid container spacing={2}> 
    <Grid item xs={8}>
        <TextField label="Enter name" varient="outlined" 
        value={name}
        fullWidth onChange={(e)=>setName(e.target.value)} />
    </Grid>
    <Grid item xs={4}>
        <Button onClick={()=>attuBoss()} variant="contained" fullWidth >Add</Button> 

     </Grid>
     {
        data.map(item=>(<Todoitem item={item} />  ))
        
     }
    
    </Grid> 


        </div>
    )
}
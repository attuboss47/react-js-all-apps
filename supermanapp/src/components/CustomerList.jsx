import React,{useState} from "react";
import { Grid,TextField,Button } from "@mui/material";
import { CustomerItem } from "./CustomerItem";

export const CustomerList=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")



    const handleAdd=()=>{
        const result={name,age,number,email}
        if(name.trim()!=="")
        setData([result,...data])
        setName("")
        setAge("")
        setNumber("")
        setEmail("")


    }
    

    return(
        <div >
            <br /><br />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField className="input" label="Name" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined"  fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <TextField className="input" label="Age" value={age} onChange={(e)=>setAge(e.target.value)} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField className="input" label="Number" value={number} onChange={(e)=>setNumber(e.target.value)} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={3}>
                    <TextField className="input" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" fullWidth />
                </Grid>
                
                <Grid item xs={2}>
                    <Button onClick={handleAdd} variant="contained" fullWidth>Add</Button>
                </Grid>

                {
                  data.length>0 && data.map((item)=>(
                    <CustomerItem item={item}/>
                    
                  ))
                }
            </Grid>
        </div>
    )
}
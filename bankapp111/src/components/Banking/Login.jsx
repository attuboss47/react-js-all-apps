import React,{useState} from "react"
import { Grid,Button,TextField } from "@mui/material"
import axios from "axios"


export const Login=()=>{
    const [custid,setCustid]=useState(0)
    const [password,setPassword]=useState()

    const handleLogin=async()=>{
        const payload={
            custid,
            password,
        }
        const result= await axios.post("http://localhost:7500?login",payload)
        console.log(result.data)
    }
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField  variant="outlined" onChange={e=>setCustid(e.target.value)}  fullWidth label="Customer Id" />
                </Grid>
                <Grid item xs={3}>
                    <TextField  variant="outlined" fullWidth label="Password" type="password" onChange={e=>setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleLogin} fullWidth>Cancel</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>Login</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
import React, { useState,useEffect }  from "react";
import { Button,Card,CardContent,Grid } from "@mui/material";

export const Greet =()=>{
    const [msg,setMsg]=useState("Welcome!!!!!")

    const [count,setCount]=useState(1)
    useEffect(()=>{
        
//    sdeMsg("I am changed ")
  count>0 && count<6 && setMsg(" have nice sleep")
  count >4 && count<=11 && setMsg("Good morning")
  count ===12 && setMsg("good afternoon")
  count>12 && count<18  &&setMsg(" good afternoon")
  count>17 && count<24 && setMsg("good night")
  count===24 && setMsg("Mid night")
    },[count])

    useEffect(()=>{

        const current = new Date();
        const hr = current.getHours();  
        const min = current.getMinutes();
        const sec = current.getSeconds();
        setCount(hr+":"+min+":"+sec )
        // setTimeout(()=>{
        //     sdetMsg("Hello ..!!!")
        // },3000) 
    },[count])
    return(
        <div>
            <h1>{msg}</h1>
            <Grid container spacing={3}>
            <Grid item xs={2}>
                <Button onClick={()=>count <30 && setCount(count+2)} variant="contained" fullWidth>+</Button>                
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <h3>{count}</h3>
                    </CardContent>
                </Card>

            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>count>0 && setCount (count-2)} variant="contained" fullWidth>-</Button>


            </Grid>
            </Grid>
        </div>
    )
}
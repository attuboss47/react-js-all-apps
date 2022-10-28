import React, { useEffect, useState } from "react"
import { Grid,Card,Button,CardContent } from "@mui/material"

export const Greet=()=>{
    const [msg,setMsg]=useState("hello everyone")
    const [count,setCount]=useState(1)



    useEffect(()=>{
        count>0     && count<6   && setMsg("hii")
        count>4     && count<11  && setMsg("muzammil bhai") 
        count===12  && setMsg("Good Afternoon")
        count>12    && count<18  && setMsg
        count>17    && count<24 && setMsg("dinner ho gaya")
        count===24  && setMsg("so jao 12 baj gaye")

    },[count])

    useEffect(()=>{

        // const current = new Date()
        // const hr=current.getHours()
        // const min=current.getMinutes()
        // const sec= current.getSeconds()
        // // setCount(hr+":"+min+":"+sec)
    },[])

    const handleAdd=()=>{
        count<24 &&  setCount(count+1)
    }
    const handleDel=()=>{
        count> 0 && setCount(count-1)
    }

    return(
        <div>
            {/* <h1>counter automatically</h1> */}
            <h1>{msg}</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {/* <Button onClick={handleAdd} >increase</Button> */}
                    {/* <Button variant="contained" onClick={()=>handleAdd(setCount(count+2))} fullWidth >increase</Button> */}
                    <Button onClick={()=>count<24&&setCount(count+1)} fullWidth variant="contained">Increase</Button>
                </Grid>
                <Grid item xs={4}> 
                    <Card>
                        <CardContent>
                            <h1>{count}</h1>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Button onClick={()=>count>0&&setCount(count-1)} fullWidth variant="contained">Decrease</Button>
                    {/* <Button onClick={handleDel}>Decrease</Button>     */}
                    {/* <Button variant="contained" onClick={()=>handleDel(setCount(count-2))} fullWidth>Decrease</Button>     */}
                </Grid>

            </Grid>



        </div>
    )

}
import React,{useState} from "react"
// import { Grid,TextField,Button } from "@mui/material"


export const Countergg =()=>{
    const [count,setCount]=useState(0)
    return(
        <div>
            <br /><br /><br />
            <button  onClick={()=> count<50 && setCount(count+3)}>+</button>
            {/* <h1>{count}</h1>   */}
            <input type="number" value={count} />
            <button   onClick={()=> count>0 && setCount(count-3)}>-</button>
            
        </div>
    

    )
}
/* <Grid container spacing={2}>
                <Grid item xs={3}>
                </Grid>
               
              
                <Grid item xs={3}>
            
                </Grid>
            </Grid> */
// import React,{useState} from "react";
// import { Grid,TextField,Button, Card, CardContent } from "@mui/material";
// import { ArticleItem } from "./ArticleItem";

// export const Articles =()=>{
//    const [name,setName]=useState("")
//    const [data,setData]=useState([])
//    const handleAdd=()=>{
//     if (name.trim() !== "")
//     setData([...data,name])
//     setName("")
//    }

//     return(
//     <div className="name">
//         <Grid container spacing={4}>
//             <Grid item xs={8}>
//                 <TextField value={name} label=" Enter Article" onChange={(e)=>setName(e.target.value)} variant="outlined" fullWidth />
//             </Grid>
//             <Grid item xs={4}>
                
//                 <Button fullWidth  variant="contained" onClick={handleAdd} >Add</Button>
//             </Grid>
//             {
//                 data.map(item=>(<ArticleItem item={item} />))
//             }            
//         </Grid>

//     </div>
//     )
// }
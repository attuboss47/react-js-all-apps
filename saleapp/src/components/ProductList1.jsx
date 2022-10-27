// import React, { useEffect, useState } from "react"
// import { Grid } from "@mui/material"
// import { ProductItem1 } from "./ProductItem1"
// import axios from "axios"
// export const ProductList1=()=>{
//     const [data,setData]=useState([])

//     const getData= async()=>{
//         const result = await axios.get("https://fakestoreapi.com/products")        
//         setData(result.data)
//         console.log(result.data)
//     }

//     useEffect(()=>{
//     getData()
//     },[])



//     return(
//         <div>
//             <h1>top floor boys</h1>
//             <Grid container spacing={2}>
//             {
//                     data.length>0 && data.map((item)=>
//                     <ProductItem1  item={item} />

                    
//                     )
//                 }
                
//             </Grid>
            
//         </div>

//     )
// }
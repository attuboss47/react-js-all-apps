import React, {useState, useEffect } from "react"
import {TableHead, TableBody, TableCell} from "@mui/material"
import axios from "axios"
import {ProductItem} from "./ProductItem"
export const ProductList=()=>{
    const [data,setData]=useState([])


    const getData= async()=>{
        const result= await axios.get("https://www.ag-grid.com/example-assets/olympic-winners.json")
        setData(result.data)
    }
    
    useEffect (()=>{
    getData()
    },[])
    return(
        <div>
            <h1>this is my trial</h1>

              <TableBody className="tablebody">
                    
                    
              <TableHead >  
                        <TableCell  className="tablecellak" align="" ><h3>Name</h3></TableCell>
                        <TableCell  className="tablecellak"align="right"><h3>Age</h3></TableCell>
                        <TableCell  className="tablecellak" align=""><h3>Country</h3></TableCell>
                        <TableCell  className="tablecellak"align="right"><h3>Year</h3></TableCell>
                        <TableCell  className="tablecellak"align=""><h3>Sport</h3></TableCell>
                        <TableCell  className="tablecellak"align="right"><h3>Gold</h3></TableCell>
                        <TableCell  className="tablecellak"align="right"><h3>Silver</h3></TableCell>
                        <TableCell  className="tablecellak" align="right"><h3>Bronze</h3></TableCell>
                        <TableCell  className="tablecellak" align="right"><h3>Total</h3></TableCell>
                        
                        </TableHead>
                        
        
                
            {/* <Grid container spacing={2}> */}
                {
                    data.length && data.slice(0,30).map((item)=>(
                        <ProductItem item={item} />
                        ))
                    }
            {/* </Grid> */}
                    </TableBody>
        
        </div>
    )
}
import React from "react"
import {TableBody,TableRow,TableCell } from "@mui/material"

export const ProductItem =({item})=>{

    return(



    
            <TableBody>
                    

                
                    <TableRow  className="tablecell" >                    
                    <TableCell className="tablecell">{item.age}</TableCell>
                    <TableCell className="tablecell">{item.athlete}</TableCell>
                    <TableCell className="tablecell">{item.country}</TableCell>
                    <TableCell className="tablecell">{item.year}</TableCell>
                    <TableCell className="tablecell">{item.sport}</TableCell>
                    <TableCell className="tablecell">{item.gold}</TableCell>
                    <TableCell className="tablecell">{item.silver}</TableCell>
                    <TableCell className="tablecell">{item.bronze}</TableCell>
                    <TableCell className="tablecell">{item.total}</TableCell>
                    
                </TableRow>
            </TableBody>

            // <table border={4}>
             
            //     <tr>
            //         <td>{item.athlete}</td>
            //         <td>{item.age}</td>
            //         <td>{item.country}</td>
            //     </tr>
            // </table>

        

        
            
            
            
        
    )
}
// import React, { useState } from "react";
// export const Todo=()=>{
//     const [text,setText]=useState("")
//     const[data,setData]=useState([])
//     const handleAdd=()=>{
//         setData([...data,text])
//     }
//     const handleDelete=(index)=>{
//         const deleted=data.filter((item,i)=>i !==index)
//         setData(deleted)
//     }
//     return(
//         <div>
//             <input type="text" onChange={(e)=>setText(e.target.value)}/>
//             <button onClick={handleAdd}>Add</button>
//             {
//                 data.map((item,index)=>{
//                     return(
//                         <div>
//                             <h1>{index+1}. {item}</h1>
//                         <button onClick={()=>handleDelete(index)}>Delete</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }


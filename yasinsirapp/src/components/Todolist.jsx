// import { listClasses } from "@mui/material";
// import { isEditable } from "@testing-library/user-event/dist/utils";
// import React, { useState } from "react";

// export const Todolist=()=>{ 
//     const[text,setText]=useState("")
//     const[data,setData]=useState([])
//     const[isEdit,setIsEdit]=useState(false)
//     const[indexNum,setIndexNum]=useState(null)
//       const handleAdd=()=>{
//         if(text.trim()!=="")
//         if(isEdit==true){
//             data.splice(indexNum,1,text)
//             setText("")
//             setIndexNum()
//             setIsEdit(false)
//         } else{
//             setData([...data,text])
//             setText("")
//         }
         
//         }
//     const handleDelete=(index)=>{
        
//         const arr=data.filter((elem,i)=>i!==index)
//         setData(arr)
//     }
//     const handleEdit=(item,index)=>{
//         setText(item)
//         setIndexNum(index)
//         setIsEdit(true)

//     }
//     return(
//         <div>
//             <h1>Todo list</h1>
//             <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//             <button onClick={handleAdd}>Add</button>
//             {
//                 data.map((item,index)=>{
//                     return(
//                         <div>
//                             <h1>{item}</h1>
//                             <button onClick={()=>handleDelete(index)}>Delete</button>
//                             <button onClick={()=>handleEdit(item,index)}>Edit</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )

// }
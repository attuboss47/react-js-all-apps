import React, { useState } from "react";

export const Todoop=()=>{
    const[text,setText]=useState("")
    const[data,setdata]=useState([])
    const[iindex,setIindex]=useState(null)
    const[isEdit,setIsEdit]=useState(false)

    const handleAdd=()=>{
        if(isEdit==true){
          data.splice(iindex,1,text)
          setText("")
          setIindex(null)
          setIsEdit(false)  
        }else{
        setdata([...data,text])
    }
        
    }
    const handleDelete=(index)=>{
        const arr=data.filter((elem,i)=>i!==index)
        setdata(arr)
    }
    const handleEdit=(item,index)=>{
        setText(item)
        setIindex(index)
        setIsEdit(true)

    }



    return(
        <div>
            <h1>Todo list</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            {
                data.map((item,index)=>{
                    return(
                        <div>
                            <h1>{index+1}.
                            {item}</h1>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                            <button onClick={()=>handleEdit(item,index)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
import React, { useState } from "react";

export const Todo2=()=>{
    const [text,setText]=useState("")
    const [data,setData]=useState([])

    const handleAdd=()=>{
        if(text.trim()!=="")
        setData([...data,text])
        setText("")



    }
    const handleDelete=(index)=>{
        const arr=data.filter((elem,ind)=>ind!==index)
        setData(arr)
    }
    return(
        <div>
            <h1>Todo list</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>


            {
                data.map((item,index)=>{
                    return(
                        <div>
                            <h1>{item}</h1>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
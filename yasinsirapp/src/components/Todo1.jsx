import React,{useState} from "react"

export const Todo1=()=>{
    const [data,setData]=useState([])
    const [text,setText]=useState("")

    const handleAdd=()=>{
        setData([...data,text])
    }
    const handleDelete=(ind)=>{
        const result=data.filter((item,i)=>i!==ind)
        setData(result)
    }
    return(
        <div>
            <h1>Todo LIST</h1>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            {
                data.map((item,ind)=>{
                    return(
                        <div>
                            <h1>{item}</h1>
                            <button onClick={()=>handleDelete(ind)}>Delete</button>
                            <button >Edit</button>
                        </div>
                    )
                })
            }
        </div> 
    )
}
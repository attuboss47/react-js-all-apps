import React,{useState} from "react"

export const TodoListt=()=>{
    const [text,setText]=useState("")
    const [data,setdata]=useState([])
    const [indexnum, setIndexnum]=useState(null)
    const [isEdit,setIsEdit]=useState(false)

    const handleAdd=()=>{
        if(text.trim()!=="")
        if(isEdit===true){
            data.splice(indexnum,1,text)
            setText("")
            setIndexnum(null)
            setIsEdit(false)
        }else{
            setdata([...data,text])
            setText("")
        }
    }
    const handleDelete=(index)=>{
        const filtered=data.filter((elem,i)=>i!==index)
        setdata(filtered)
    }
    const handleEdit=(item,index)=>{
        setText(item)        
        setIndexnum(index)
        setIsEdit(true)

    }
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            
            {
                data.map((item,index)=>{
                    return(
                        <div>
                            <h1>{index+1}.{item}</h1>
                            <button onClick={()=>handleDelete(index)}>delete</button>
                            <button onClick={()=>handleEdit(item,index)} >Edit</button>
                        </div>
                    )
                })
            }

        </div>
    )
}
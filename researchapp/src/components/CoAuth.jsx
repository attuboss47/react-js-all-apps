import React,{useState} from "react";

 export const CoAuth=()=>{
    const [name,setName]=useState("Hello")
    return(
        <div className="sub">
            <h1>{name}</h1>
            <input onChange={e=>setName(e.target.value)} type="text" />

        </div>
    )
}
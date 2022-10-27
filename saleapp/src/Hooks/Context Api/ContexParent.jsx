import React, { useState } from "react"
import {ContextChild1} from "./ContextChild1"


export const ContextParent=()=>{
    const[text,setText]=useState("")
    const[show,setShow]=useState("")
    return(

        <div>
            <h1>ContextParent</h1>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>setShow(text)}>add</button>
            <ContextChild1 show={show} text={text}/>

        </div>
    )
}
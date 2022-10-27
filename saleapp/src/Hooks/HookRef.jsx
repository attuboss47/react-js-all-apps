import React, {useRef}from "react";    

export const HookRef=()=>{

    const in1=useRef()
    // const [text,setText]=useState("")

    const handleFocus=()=>{
        in1.current.focus()
    }
    const handleEdit=()=>{
        in1.current.value="attuboss47"
    }
    const handleClear=()=>{
        
        in1.current.value=""
        
        
    }
    const handleColor=()=>{
        in1.style.color="orange"
        in1.current.style.fontWeight="bolder"
        in1.current.style.textAlign="center"
    }
    return(
        <div>
            <h1>UserRef Hook</h1>
            <input  type="text" ref={in1} />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleColor}>color</button>
            <button onClick={handleColor}>color</button>
            <br />
            <hr />
        </div>
    )
}

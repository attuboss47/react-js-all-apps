import React from "react"
import { ContextChild2 } from "./ContextChild2"


export const ContextChild1=({text,show})=>{

    return(

        <div>
            <h1>context child1</h1>
            {/* <h1>{text}</h1>
            <h1>{show}</h1> */}
            <br />
            <hr />
            <ContextChild2 show={show} text={text}/>
        </div>
    )
}
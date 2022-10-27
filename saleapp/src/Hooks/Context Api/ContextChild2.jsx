import React from "react"

export const ContextChild2=({text,show})=>{
    return(

        <div>
            <h1>Context child2</h1>
            {/* <h1>{text}</h1> */}
            <h1>{show}</h1>
        </div>
    )
}
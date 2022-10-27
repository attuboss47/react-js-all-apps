import React,{useState} from "react";


export const Greet=()=>{

    const[name,setName]=useState("Welcome")
    return(

        <div className="sub">
            <h1>{name}</h1>
            <button onClick={()=>setName("Good Morning")}>Good Morning</button>
            <button onClick={()=>setName("Good Afternoon")}>Good Afternoon</button>
            <button onClick={()=>setName("Good Evening ")}>Good Evening</button>
            <button onClick={()=>setName("Good Night")}>Good Night</button>
        </div>
    )
}
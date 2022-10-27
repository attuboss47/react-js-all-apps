import React,{useState} from "react";


export const Vehicles=()=>{
    const[home,setHome]=useState("hello")

    return(
        <div className="main2">
            <h1>{home}</h1>
            <button onClick={()=>setHome("Very Good Morning")}>Mornig</button>
            <button onClick={()=>setHome("Good Afternoon")}>Afternoon</button>
            <button onClick={()=>setHome("Good Evening")} >Evening</button>
            <button onClick={()=>setHome("Good Night")}>Night</button>
        </div>
    )
}
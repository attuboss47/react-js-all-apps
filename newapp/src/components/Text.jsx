import React,{useState} from "react";


export const Text=()=>{
    const[home,setHome]=useState()

    return(
        <div className="main2">
            <input onChange=
            {e=>setHome(e.target.value)} type="text"  />
            <h1>{home} </h1>
        
        </div>


    )
}
import React,{useState} from "react";

export const Fruits=()=>{


    const[name,setName]=useState("Mango") 
    return( 

        <div className="sub">
            <h1>{name}
            <img width={"150px"}  src={"Fruite/" +name+".jpg"} alt={name}/>
            </h1>

            <button onClick={()=>setName("Apple")}>Apple</button>
            <button onClick={()=>setName("Banana")}>Banana</button>
            <button onClick={()=>setName("Kiwi")}>Kiwi</button>
            <button onClick={()=>setName("Orange")}>Orange</button>
            <button onClick={()=>setName("Mango")}>Mango</button>
        </div>
    )
}
    
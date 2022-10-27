import React,{useState} from "react";

  
export const Artical=()=>{
    const[name,setName]=useState("hello")
    return(

        <div className="main2">
            <h1>{name}
            <img width={"150px"} src={"Artical/" +name+ ".jpg"} alt={name} /></h1>
            <button onClick={()=>setName("Ac")}>Ac</button>
            <button onClick={()=>setName("Chair")}>Chair</button>
            <button onClick={()=>setName("Cooler")}>Cooler</button>
            <button onClick={()=>setName("Fan")}>Fan</button>
            <button onClick={()=>setName("Table")}>Table</button>
            <button onClick={()=>setName("Tv")}>Tv</button>
            <button onClick={()=>setName("Washing Machine")}>Washing Machine</button>
        </div>
    )
}